import React from "react";
import '../../stylesheets/root.scss'
import {manager} from "../../util/game_socket_util"
import { NEXT_ROUND, UPDATE_CATEGORY } from "../../actions/ui_actions";
import { PLAY_CATEGORY } from "../../actions/categories/deck_category_actions";

class Categories extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.manager = undefined;
  }

  handleSubmit(category){
    const {
      gameCode, 
      dispatch, 
      deckCategories, 
      playedCategories,
      currentRound
    } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    const updatedRound = Object.assign({}, currentRound)
    updatedRound.category += 1 
    this.manager.sendToGame({
      type: UPDATE_CATEGORY,
      round: updatedRound
    })
  }

  render(){
    if (!this.props.deckCategories.length > 0) return null
    const {currentCat, nextCategory, deckCategories, currentRound} = this.props
    if (!currentRound) return null
    const category = deckCategories[currentRound.category]
    return (
      <div>
        <div id="categories">
            {/* <h2>CATEGORY</h2> */}
            <h1 key={category.id}>{category.name.toUpperCase()}</h1>
          {this.props.timesUp ? null : <button onClick={() => this.handleSubmit(category)}>Shuffle</button>}
        </div>
        
      </div>
    )
  }
}

export default Categories