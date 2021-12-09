import React from "react";
import '../../../stylesheets/root.scss'
import { randomSample } from "../../../util/game_setup";
import { shuffleArray } from "../../component_utils/methods";
import Card from "./card";

export const playerHandIDs = (users) => {
    const arr=[]
    if (users && users.length >= 1){
      users.forEach((item)=>{
        const myHand = (item.split(','))
        myHand.forEach((item)=>{
          if (item.length !== 18){
            arr.push(item.slice(1))
          } else {
            arr.push(item)
          }
        })
      })
    } else {
      return null
    }
    return(arr)
}

export const showHand = (arr) => {
  return(
    arr.map((gifID, i) => (
      <div className="a-card" id={i} key={i}>
        
      </div>
    ))
  )
}

class Hand extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser)
    // this.props.fetchCards()
  }

  handleSubmit(payload){
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

    if (this.props.gameDeck[0] === undefined) return null
    
    return(
      <div className="player-hand-show">
        <h1>this is my hand</h1>
        <div className='player-lineup'>
          {deckArr.map(card => (

            <Card 
              users={this.props.users}
              currentUser={this.props.currentUser}
              gameDeck={this.props.gameDeck}
              card={card} />       
          ))}
        </div>
        <div className="shuffle-deck">
          <button onClick={() => this.handleSubmit(payload)}>Deal Cards</button>
        </div>
      </div>
    )
  }
}

export default Hand