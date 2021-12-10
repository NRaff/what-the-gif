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

      <div className ='end-screen' key='stuff'>
        {playerIndex(theLEADER)} 
        <h1>is the WINNER!</h1>
      </div>
        <div className='end-score'>
          <h2>Score: {leaderScore}</h2>
          {/* can change this to include all of the winning gifs */}
        </div>
      </div>
    )
  }

}
export default Endgame