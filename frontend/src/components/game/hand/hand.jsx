import React from "react";
import '../../../stylesheets/root.scss'
import { shuffleArray } from "../../component_utils/methods";

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

    if (deckArr[0] === undefined) return null;
    return(
      <div className="player-hand-show">
        <h2>MY HAND</h2>
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