import React from "react";
import { randomLength } from "../component_utils/methods";
import '../../stylesheets/root.scss'
import GameManager from "../../util/game_socket_util"
import { NEXT_ROUND, UPDATE_CATEGORY } from "../../actions/ui_actions";
import { PLAY_CATEGORY } from "../../actions/deck_category_actions";

class Categories extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.manager = undefined;
  }

  componentDidMount(){
    // this.props.fetchCategories()
  }

  handleSubmit(category){
    const {gameCode, dispatch, deckCategories, playedCategories} = this.props
    this.manager = this.manager ? this.manager : GameManager(gameCode, dispatch)
    const newRoundNum = Object.values(playedCategories).length + 1
    // debugger
    this.manager.sendToGame({type: UPDATE_CATEGORY})
    this.manager.sendToGame({type: NEXT_ROUND, roundNum: newRoundNum})
    const playPayload = {
      type: PLAY_CATEGORY,
      category
    }
    this.manager.sendToGame(playPayload)
  }

  render(){
    if (!this.props.deckCategories.length > 0) return null
    const {currentCat, nextCategory, deckCategories} = this.props
    const category = deckCategories[0]
    
    return (
      <div>
        <div id="categories">
            <h1 key={category.id}>{category.name.toUpperCase()}</h1>
        </div>
        <button onClick={() => this.handleSubmit(category)}>Shuffle</button>
      </div>
    )
  }
}

export default Categories