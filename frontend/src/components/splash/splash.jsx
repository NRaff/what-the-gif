import React from "react";
import '../../stylesheets/root.scss'

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className='centered'>
        <h1>What the GIF!?</h1>
        <div id='game-nav'>
          <button>Create Game</button>
          <button>Join Game</button>
        </div>
        
      </div>
    )
  }
}

export default Splash