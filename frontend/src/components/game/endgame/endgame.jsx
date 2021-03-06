import React from "react";
import '../../../stylesheets/root.scss';
import { playerIndex } from "../lobby/lobby";

class Endgame extends React.Component {
  // need to make conditional that only renders this component if a players score = winning score 
  render() {
    let leaderScore = 0;
    let leaderID = "";
    let leaderFavGif = ""
    let theLEADER = []
    if (this.props.game.length !== 0) {
      console.log(this.props)
      const gamePlayers = this.props.game[0].players
      gamePlayers.forEach(player => {
        if (player.roundsWon.length >= leaderScore) {
          leaderID = player.user
          leaderScore = player.roundsWon.length
        }
      })
      
    }
    let leaderName = ""
    this.props.players.forEach(player => {
      if (player._id === leaderID) {
        leaderName = player.displayName
        leaderFavGif = player.favGIF
        theLEADER.push(player)
      }
    })
    
    return (
      <div className='endbox'>
        <h1>GAME OVER</h1>
      <div className ='end-screen' key='stuff'>
        {playerIndex(theLEADER)} 
        <h2>is the WINNER!</h2>
      </div>
        <div className='end-score'>
          <h1>Score: {leaderScore}</h1>
          {/* can change this to include all of the winning gifs */}
        </div>
        <div className="redirect-home">
          <a href="#/">

          <button>Go Home</button>
          </a>
        </div>
      </div>
    )
  }

}
export default Endgame