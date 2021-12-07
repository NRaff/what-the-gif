import React from "react";
import '../../stylesheets/root.scss'

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className='bg'>
        <div className='splash'>
          <section className='top' />
          <section className='center'>
            <h1>What the GIF!?</h1>
            <div id='game-nav'>
              <button>Create Game</button>
              <button>Join Game</button>
            </div>
          </section>
          <section className='bottom' />
        </div>
      </div>
    )
  }
}

export default Splash