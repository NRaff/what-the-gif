import React from "react";
import '../../../stylesheets/root.scss'
import {playerIndex} from '../lobby/lobby'

class Board extends React.Component {
  constructor(props){
    super(props)
  
  }
  
  render() {
    const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='board-container'>
        <section className='player-lineup'>
          {playerIndex(this.props.players)}
        </section>

        <section className='prompt'>

        </section>

        <section className='player-hand'>

        </section>
      </div>
    )
  }
}

export default Board