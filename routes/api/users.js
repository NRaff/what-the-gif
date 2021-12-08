const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

// * Users Route
router.get("/", (req, res) => res.json({
  message: "This is the users route"
}))

// * Get Current User
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    displayName: req.user.displayName,
    email: req.user.email
  })
})

// * User Registration
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          displayName: req.body.displayName,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

// * User Login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              displayName: user.displayName,
              email: user.email
            }
            jwt.sign(
              payload,
              keys.secretOrKey,
              {expiresIn: 360000},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              })
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

router.patch('/fav/create', (req, res) => {

  User.findByIdAndUpdate(req.body._id, {curHand: req.body.hand}, {new: true, useFindAndModify: false}, (error, doc) => {
    // determine if request works or not
    // pass in error
    if (error) {
        console.log('Something went wrong when updating')
        return res.status(400).json({ error: 'Something is wrong here' })
    } else {
      console.log(doc)
      return res.json({
        success: true,
        user: doc
      })
    }
    

  })

})

module.exports = router;