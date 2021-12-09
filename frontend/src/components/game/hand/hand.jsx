import React from "react";
import '../../../stylesheets/root.scss'
// import configureStore from "../../../store/store";

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
    // const user = this.props.user ? this.props.user : this.props.currentUser
    if (!this.props.users) {
      return (null)
    }
    // console.log('test')
    const userID = this.props.currentUser.id
    // console.log(this.props.users)
    
    // console.log(this.props.user.61b0f4408b2dfb580c1c9c31.curHand)

    return(
      <div className="player-hand-show">
        {/* <label>Your Hand</label> */}
        <h1>this is my hand</h1>
        {/* {this.playerHand} */}
        <section className='player-lineup'>
          {/* {console.log('testtesttesttest')} */}
          {/* {console.log(this.props.currentUser)} */}
        </section>
      </div>
    )
  }
}

export default Hand