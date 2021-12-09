import React from "react";
import '../../../stylesheets/root.scss'
import Card from "./card";
import { shuffleArray } from "../../component_utils/methods";


export const playerHandIDs = (users) => {
    const arr=[]
    if (users && users.length >= 1){
      users.forEach((item)=>{
        // console.log(item.split(','))
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
    this.props.fetchCards()
  }

  handleSubmit(payload){
    this.props.fetchHand(payload)
  }

  render(){
  
    if (!this.props.users) return null;
    // console.log(this.props)
    const shflD = (shuffleArray(this.props.gameDeck))
    const deckArr = []
    for (let i = 0; i < 5; i++) {
      deckArr.push(shflD[i])
    }
    const curId = this.props.currentUser.id;
    const payload = { user: curId, cards: deckArr }
    // console.log(this.props.users[0].curHand)

    if (this.props.users.length !== 0) {
      const newGifId = (playerHandIDs(this.props.users[0].curHand))
      console.log(newGifId)
    } else {
      return null
    }
    // console.log(payload)
    // const showHand = arr => {
    //   return
    // }


    return(
      <div className="player-hand-show">
        <h1>this is my hand</h1>
        <div className='player-lineup'>

          {/* {console.log(showHand(playerHandIDs(this.props.users[0].curHand)))} */}
          {(this.props.users.length !== 0) ?
            
            <Card 
              users={this.props.users}
              currentUser={this.props.currentUser}
              gameDeck={this.props.gameDeck}
          /> : null }
          {/* {console.log(this.props.users)} */}

        </div>
        <div className="shuffle-deck">
          <button onClick={() => this.handleSubmit(payload)}>Deal Cards</button>
        </div>
      </div>
    )
  }

}

export default Hand