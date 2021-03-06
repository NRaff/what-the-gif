import React from "react";
import { removeCardFromHand } from "../../../actions/hand_actions";
import '../../../stylesheets/root.scss';
import { manager } from "../../../util/game_socket_util";

class SubmittedCard extends React.Component {
  removefromHand(){
    const {users, submittedGifs, currentGame, currentRound} = this.props
    const gameManager = manager(currentGame.gameCode)
    const nonJudges = users.filter(user => user._id !== currentRound.judge)
    const submitterIds = Object.keys(submittedGifs)
    const activePlayers = nonJudges.filter(user => submitterIds.includes(user._id))
    activePlayers.forEach(user => {
      const payload = {
        user: user._id,
        cardId: submittedGifs[user._id].gifId
      }
      gameManager.sendToGame(removeCardFromHand(payload))
    })
  }

  chooseWinner(){
    const {currentUser, currentRound, currentGame, playerId, card, submittedGifs} = this.props
    const gameManager = manager(currentGame.gameCode)
    if (currentUser.id === currentRound.judge) {
      this.removefromHand()
      let updatedRound = Object.assign({}, currentRound)
      updatedRound.winner = playerId
      updatedRound.winningGif = card.gifId
      updatedRound.submittedGifs = Object.values(submittedGifs).map(gif => gif.gifId)
      let updatedGame = Object.assign({}, currentGame)
      updatedGame.players = updatedGame.players.map(player => {
        if(player.user === updatedRound.winner) {
          player.roundsWon.push(updatedRound.id)
          if(player.roundsWon.length === updatedGame.scoreToWin) {
            updatedGame.winner = player.user
          }
        }
        return player
      })

      const payload = {
        type: 'RECEIVE_ROUND_WINNER',
        round: updatedRound,
        game: updatedGame
      }
      gameManager.sendToGame(payload)
    }
  }

  render() {
    const { card, playerId, players } = this.props
    if (card) {
      return (
          <div
            className="the-card"
            id={card.gifId}
            key={card.gifId}
            onClick={() => this.chooseWinner()}
          >
            <img
              src={this.props.card.images.fixed_height.url}
              alt="altname"
              key={this.props.card.id}
            />
            {(this.props.roundWinnerChosen) ? 
            <h3>{players[playerId].displayName}</h3> : null
          }
          </div>
      )
    } else {
      return null
    }
  }
}

export default SubmittedCard;
