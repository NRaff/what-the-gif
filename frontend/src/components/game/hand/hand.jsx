import React from "react";
import '../../../stylesheets/root.scss'
import { shuffleArray } from "../../component_utils/methods";
import Card from "./card";

class Hand extends React.Component {
  constructor(props){
    super(props)
    this.pageIndex = 0
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.props.fetchCards()
    // if (this.props.users === {} || this.props.gameDeck.length === 0) {
    //   return null
    // }
    // const shflD = (shuffleArray(this.props.gameDeck))
    // const deckArr = []
    // for (let i = 0; i < 5; i++) {
    //   deckArr.push(shflD[i])
    // }
    // const {users, currentUser} = this.props
    // const player = this.props.currentUser.id
    // const payload = { user: player, cards: deckArr }
    // this.props.fetchHand(payload)
    
  }

  getHand() {
    const {users, gameDeck, currentUser, fetchHand} = this.props
    if (users === {} || gameDeck.length === 0) {
      return false
    } else {
      const payload = {
        user: currentUser.id,
        cards: gameDeck
      }
      fetchHand(payload)
      return true
    }
  }

  handleSubmit(payload){
    this.pageIndex += 1
  }

  render(){
    const {users, currentUser, playedCards} = this.props
    const currentHand = users[currentUser.id].curHand
    // if (!this.getHand()) {
    //   return null
    // }
    return(
      <div className="player-hand-show">
        <div className="hand-map">
          <div className='player-lineup'>
            {this.pageIndex !== 0 ? (
              currentHand.map((card, i)=>(
                <div key={i}>
              
                  <Card 
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                    gameDeck={this.props.gameDeck}
                    card={playedCards[card]}
                  />
                </div>
              ))) : null }
          </div>
        </div>

        {/* <div className="shuffle-deck">
          {(this.pageIndex === 0) ? (
            <button onClick={() => this.handleSubmit(payload)} >Deal Cards</button>
          ) : null}
        </div> */}
      </div>
    )
  }

}

export default Hand