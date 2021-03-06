const express = require("express");
const router = express.Router();
const Game = require('../../models/Game')
const validateGameJoin = require('../../validations/joingame');
const validateCreateGameInput = require('../../validations/creategame');

// ! DEPRECATED (see socket/game_manager instead)

// * Get User Games
router.get("/", (req, res) => res.json({
  message: "This is the users game route"
}))

// * Join Game
// requires body with gameCode and playerId
router.patch("/join", (req, res) => {
  const { errors, isValid } = validateGameJoin(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

  Game.findOne({ gameCode: req.body.gameCode})
    .then(game => {
      if (!game) {
        return res.status(422).json({game: "Invalid game code"})
      } else {
        const existingPlayerIds = game.players.map(player => player.user)
        console.log(`Existing Players: ${existingPlayerIds.join(', ')}`)
        console.log(`New Player: ${req.body.playerId}`)
        if(!existingPlayerIds.includes(req.body.playerId)) {
          game.players.push({ user: req.body.playerId })
        }
        game.save()
          .then(updatedGame => res.json(updatedGame))
          .catch(err => console.log(err))
        }
    })
})


// * Create Game
router.post("/create", (req, res) => {
  const { errors, isValid } = validateCreateGameInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Game.findOne({gameCode: req.body.gameCode})
    .then(game => {
      if (game) {
        return res.status(400).json({game: "Please generate a new code"})
      } else {
        const newGame = new Game({
          // players: req.body.players, testtest
          round: req.body.round,
          gameOwner: req.body.gameOwner,
          gameCode: req.body.gameCode,
          maxPlayers: req.body.maxPlayers,
          scoreToWin: req.body.scoreToWin,
          title: req.body.title,
          roundTimeLimit: req.body.roundTimeLimit
        })
        newGame.players.push({
          user: req.body.gameOwner
        })
        newGame.save()
          .then(game => res.json(game))
          .catch(err => res.status(400).json({
            game: "There was an issue!",
            error: err
          }))
      }
    })
})

module.exports = router;