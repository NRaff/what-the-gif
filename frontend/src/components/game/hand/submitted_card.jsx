import React from "react";
import { removeCardFromHand } from "../../../actions/hand_actions";
import { toggleRoundWinnerChosen } from "../../../actions/ui_actions";
import '../../../stylesheets/root.scss';
import { manager } from "../../../util/game_socket_util";

class SubmittedCard extends React.Component {
  constructor(props) {
    super(props)
  }

  removefromHand(){
    const {users, submittedGifs, currentGame} = this.props
    const gameManager = manager(currentGame.gameCode)
    users.forEach(user => {
      debugger
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
      const payload = {
        type: 'RECEIVE_ROUND_WINNER',
        round: updatedRound
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
            <h3>{players[playerId].displayName}</h3>
          </div>
      )
    } else {
      return null
    }
  }
}

export default SubmittedCard;
