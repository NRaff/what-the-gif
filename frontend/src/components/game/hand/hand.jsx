import React from "react";
// import { fetchHand } from "../../../actions/hand_actions";
import '../../../stylesheets/root.scss'
import { randomSample } from "../../../util/game_setup";
import { shuffleArray } from "../../component_utils/methods";
import Card from "./card";

class Hand extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    
  }

  render(){
    const {users, currentUser, playedCards, gameDeck, fetchHand} = this.props
    if (gameDeck.length === 0 || playedCards === 0) {
      return null
    } else {
      const sampleCards = randomSample(gameDeck, 5)
      debugger
      const payload = {
        user: currentUser.id,
        cards: sampleCards
      }
      fetchHand(payload)
      const currentHand = users[currentUser.id].curHand
      return (
        <div className="player-hand-show">
          <div className="hand-map">
            <div className='player-lineup'>
                {currentHand.map((card, i) => (
                  <div key={i}>
                    <Card
                      users={this.props.users}
                      currentUser={this.props.currentUser}
                      gameDeck={this.props.gameDeck}
                      card={playedCards[card]}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    }
}

export default Hand