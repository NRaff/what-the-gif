import React from "react";
import '../../../stylesheets/root.scss'
// import Card from "./card";
import { shuffleArray } from "../../component_utils/methods";

// export const playerHandIDs = (users) => {
//     const arr=[]
//     if (users && users.length >= 1){
//       users.forEach((item)=>{
//         const myHand = (item.split(','))
//         myHand.forEach((item)=>{
//           if (item.length !== 18){
//             arr.push(item.slice(1))
//           } else {
//             arr.push(item)
//           }
//         })
//       })
//     } else {
//       return null
//     }
//     return(arr)
// }

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
    // console.log(this.props)
    const shflD = (shuffleArray(this.props.gameDeck))
    const deckArr = []
    for (let i = 0; i < 5; i++) {
      deckArr.push(shflD[i])
    }
    const curId = this.props.currentUser.id;
    const payload = { user: curId, cards: deckArr }

    // if (this.props.users.length !== 0) {
    //   const newGifId = (playerHandIDs(this.props.users[0].curHand))
    //   // console.log(newGifId)
    // } else {
    //   return null
    // }

    console.log(deckArr)
    // debugger
    if (deckArr[0] === undefined) return null;
    return(
      <div className="player-hand-show">
        {/* <h1>this is my hand</h1> */}
        {this.pageIndex !== 0 ? (

        <div className="hand-map">
          {deckArr.map((card, i)=>(
            <div key={i}>
              <ul>{card.title}</ul>
              <img src={card.images.fixed_height.url} alt="altname" key={card.id}/>
            </div>
          )
          )}
        </div>
        ) : null } 
        {/* <div className='player-lineup'>
          {(this.props.users.length !== 0) ?
            <Card 
              users={this.props.users}
              currentUser={this.props.currentUser}
              gameDeck={this.props.gameDeck}
          /> : null }
        </div> */}
        
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