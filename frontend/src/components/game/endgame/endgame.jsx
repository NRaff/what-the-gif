import React from "react";
import '../../../stylesheets/root.scss';
import { playerIndex } from "../lobby/lobby";

class Endgame extends React.Component {
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
          <h1>Score: {leaderScore}</h1>
        </div>
      </div>
    )
  }


}
export default Endgame