import React from "react";
import '../../../stylesheets/root.scss'
import { randomSample } from "../../../util/game_setup";
import { shuffleArray } from "../../component_utils/methods";
import Card from "./card";

class Hand extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.pageCounter = 0
  }

  handleSubmit(payload){
    this.props.fetchHand(payload)
    // this.pageCounter += 1
  }

  render(){
    if (!this.props.users) return null;
    const {currentPlayer, playedCards} = this.props
    
    return(
      <div className="player-hand-show">
        <h2>MY HAND</h2>
        <div className='player-lineup'>
            {currentPlayer.curHand.map(card => {
              return (
                <Card
                  users={this.props.users}
                  currentUser={this.props.currentUser}
                  gameDeck={this.props.gameDeck}
                  card={playedCards[card]}
                  key={card.gifId}
                  submitCard={this.props.submitCard}
                  removeCard={this.props.removeCard}
                />
              )       
            })}
        </div>
      </div>
    )
  }
}

export default Hand