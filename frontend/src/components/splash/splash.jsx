import React from "react";
import '../../stylesheets/root.scss'
import { Link } from "react-router-dom";
import { stopListening } from "../../util/game_socket_util";
// import {manager} from "../../util/game_socket_util"

class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.splashNav = this.splashNav.bind(this)
  }

  componentDidMount(){
    stopListening()
    this.props.clearUsers()
    this.props.resetGame()
    this.props.removeCurrentGame()
    this.props.removePlayedCards()
    this.props.removeSubmittedCards()
    this.props.removeAllCategories()
    this.props.removeAllPlayedCategories()
    this.props.removeAllGames()
    this.props.clearRounds()
    this.props.resetAllUI()
  }

  splashNav(){
    return (
      (this.props.auth ? (
        <div id='game-nav'>
          <Link to='/create'><button>Create Game</button></Link>
          <Link to='/join'><button>Join Game</button></Link>
        </div>
      ) : (
        <div className='logged-out'>
          <Link to='/login'>
            <button id='log-in-button'>Log In to Play</button>
          </Link>
        </div >
      )))
  }

  render(){
    return(
      <div className='bg'>
        <div className='splash'>
          <section className='top' />
          <section className='center'>
            <h1>WHAT THE GIF!?</h1>
            {this.splashNav()}
            {/* <div id='game-nav'>
              <Link to='/create'><button>Create Game</button></Link>
              <Link to='/join'><button>Join Game</button></Link>
            </div> */}
          </section>
          <section className='bottom' />
        </div>
      </div>
    )
  }
}

export default Splash