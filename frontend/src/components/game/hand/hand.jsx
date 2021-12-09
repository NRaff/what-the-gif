import React from "react";
import '../../../stylesheets/root.scss'

class Hand extends React.Component {
  constructor(props){
    super(props)
    
    this.playerHand = this.playerHand.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser)
  }

  playerHand(hand){
    return(
      hand.map((card, i) => (
        <div className='player-cards' id={i} key={i}>
          <p>{card.displayName}</p>
        </div>
      ))
    )
  }

  render(){
    const testHand = [{ curHand: 'l7fdqmHQ1jCg2HzQlx, o75ajIFH0QnQC3nCeD, xT5LMHxhOfscxPfIfm, TdfyKrN7HGTIY, MeIucAjPKoA120R7sN' }]
    return(
      <div className="player-hand-show">
        {/* <label>Your Hand</label> */}
        <h1>this is my hand</h1>
        {/* {this.playerHand} */}
        <section className='player-lineup'>
          {this.playerHand(testHand)}
        </section>
      </div>
    )
  }
}

export default Hand