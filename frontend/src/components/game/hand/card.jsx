import React from "react";
import { RECEIVE_SUBMITTED_CARD } from "../../../actions/cards/played_card_actions";
// import { render } from "react-dom";
import '../../../stylesheets/root.scss';
import { manager, setupGameSocket } from "../../../util/game_socket_util";

class Card extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(){
    // this.props.submitCard(this.props.card)
    this.chooseGif()
    // let prevcard = document.getElementsByClassName('select')
    // prevcard.className='the-card'

    // let card = document.getElementById(`${this.props.card.gifId}`)
    // card.className = 'select'
    //stuff
  }
  chooseGif(){
    const {currentPlayer, currentGame, card} = this.props
    const gameManager = manager(currentGame.gameCode)
    const payload = {
      type: RECEIVE_SUBMITTED_CARD,
      user: currentPlayer,
      card
    }
    gameManager.sendToGame(payload)
  }

  render() {
    const {card} = this.props
    const submissions = Object.values(this.props.submittedGifs)
    const userIds = Object.keys(this.props.submittedGifs)
    const idx = userIds.indexOf(this.props.currentUser.id)
    const submit = submissions[idx]

    if (card) {
      return (
        <div>
          <div 
            className="the-card" 
            id={card.gifId} 
            key={card.gifId} 
            onClick={this.handleSubmit}
          >
            <img 
              src={this.props.card.images.fixed_height.url} 
              alt="altname" 
              key={this.props.card.id} 
            />

            {submit && (submit.gifId === card.gifId) ? <h2>SELECTED</h2> : null}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Card;
