import React from "react";
import '../../../stylesheets/root.scss'
import CardContainer from "./card_container"

class Hand extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(payload){
    this.props.fetchHand(payload)
  }

  renderOverlay(){
    const { currentRound, currentPlayer } = this.props
    if (currentRound.judge === currentPlayer._id){
      return (
        <div className="hand-overlay">
          <span>It's your turn to judge!</span>
        </div>
      )
    }
  }

  render(){
    if (!this.props.users || !this.props.currentRound) return null;
    const {currentPlayer, playedCards} = this.props
    
    return(
      <div className="player-hand-show">
        <h2>MY HAND</h2>
        <div className='player-lineup-hand'>
            {/* uncomment this line when done testing */}
            {/* {this.renderOverlay()} */}
            {currentPlayer.curHand.map(card => {
              return (
                <CardContainer
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