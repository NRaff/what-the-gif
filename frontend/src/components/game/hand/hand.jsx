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
    this.props.fetchUser(this.props.currentUser)
    this.props.fetchCards()
  }

  handleSubmit(payload){
    this.pageIndex += 1
    this.props.fetchHand(payload)
  }

  render(){
    if (!this.props.users) return null;
    const shflD = (shuffleArray(this.props.gameDeck))
    const deckArr = []
    for (let i = 0; i < 5; i++) {
      deckArr.push(shflD[i])
    }
    const curId = this.props.currentUser.id;
    const payload = { user: curId, cards: deckArr }
    
    console.log(deckArr)
    if (deckArr[0] === undefined) return null;
    return(
      <div className="player-hand-show">
        <div className="hand-map">
          <div className='player-lineup'>
            {this.pageIndex !== 0 ? (
              deckArr.map((card, i)=>(
                <div key={i}>
              
                <Card 
                users={this.props.users}
                currentUser={this.props.currentUser}
                gameDeck={this.props.gameDeck}
                card= {card}
                
                />
                </div>
              ))) : null }
          </div>
        </div>

        <div className="shuffle-deck">
          {(this.pageIndex === 0) ? (
            <button onClick={() => this.handleSubmit(payload)} >Deal Cards</button>
          ) : null}
        </div>
      </div>
    )
  }

}

export default Hand