const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Game = require('../../models/Game')
const Player = require('../../models/Player')

// * Get User Games
router.get("/", (req, res) => res.json({

}))

// * Join Game
// requires body with gameCode and playerId
router.patch("/join", (req, res) => {
  Game.findOne({ gameCode: req.body.gameCode})
    .then(game => {
      if (!game) {
        return res.status(422).json({game: "Invalid game code"})
      } else {
        Player.findById(req.body.playerId)
          .then(player => {
            if (!player) {
              return res.status(422).json({players: "Unable to connect player"})
            } else {
              const newPlayer = new Player({user: player})
              newPlayer.save()
                .then(player => {
                  game.players.push(player)
                  game.save()
                    .then(updatedGame => res.json(updatedGame))
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            }
          })
      }
    })
})


// * Create Game
router.post("/create", (req, res) => {
  Game.findOne({gameCode: req.body.gameCode})
    .then(game => {
      if (game) {
        return res.status(400).json({game: "Please generate a new code"})
      } else {
        const newGame = new Game({
          players: req.body.players, 
          round: req.body.round,
          gameOwner: req.body.gameOwner,
          gameCode: req.body.gameCode,
          maxPlayers: req.body.maxPlayers
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