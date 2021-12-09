import React from "react";
import '../../../stylesheets/root.scss'
import Card from "./card";
// import { myGif, fetchGif } from "../../../actions/searched_gifs_actions";
import { shuffleArray } from "../../component_utils/methods";
// import { fetchHand } from "../../../actions/hand_actions";

export const playerHandIDs = (users) => {
    const arr=[]
    if (users && users.length >= 1){
      users.forEach((item)=>{
        const myHand = (item.curHand[0].split(','))
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

}

// const slat = myGif('l7fdqmHQ1jCg2HzQlx')
// console.log(this.props)

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
  
    const shflD = (shuffleArray(this.props.gameDeck))

    const deckArr = []
    for (let i = 0; i < 5; i++) {
      deckArr.push(shflD[i])
    }

    const curId = this.props.currentUser.id;
  
    const payload = { user: curId, cards: deckArr }
    console.log(payload)

    return(
      <div className="player-hand-show">
        <h1>this is my hand</h1>
        <div className='player-lineup'>
          <Card 
            users={this.props.users}
            currentUser={this.props.currentUser}
            
          />
        </div>
        <button onClick={() => this.handleSubmit(payload)}>Deal Cards</button>
      </div>
    )
  }

}

export default Hand