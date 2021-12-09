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
    // this.props.fetchUser(this.props.currentUser)
    this.props.fetchCards()
    // console.log(this.props.gameDeck)
    if (this.props.users === {} || this.props.gameDeck.length === 0) {
      return null
    }
    const shflD = (shuffleArray(this.props.gameDeck))
    const deckArr = []
    for (let i = 0; i < 5; i++) {
      deckArr.push(shflD[i])
    }
    debugger
    // const curId = this.props.currentUser.id;
    const {users, currentUser} = this.props
    // const player = users[currentUser.id]
    const player = this.props.currentUser.id
    const payload = { user: player, cards: deckArr }
    // debugger
    // console.log(payload)
    this.props.fetchHand(payload)
  }

  handleSubmit(payload){
    this.pageIndex += 1
  }

  render(){
    // if (!this.props.users) return null;
    // const shflD = (shuffleArray(this.props.gameDeck))
    // const deckArr = []
    // for (let i = 0; i < 5; i++) {
    //   deckArr.push(shflD[i])
    // }
    // const curId = this.props.currentUser.id;
    // const payload = { user: curId, cards: deckArr }
    // const {users, currentUser, playedCards} = this.props
    // // debugger
    // const currentHand = users[currentUser.id].curHand
    console.log(this.props)
    return(
      <div className="player-hand-show">
        {/* <div className="hand-map">
          <div className='player-lineup'> */}
            {/* {console.log(this.props)} */}
            {/* {this.pageIndex !== 0 ? (
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
        </div> */}

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