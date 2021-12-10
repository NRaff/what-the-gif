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
    
  }

  componentDidMount(){
    // this.props.fetchCategories()
  }

  handleSubmit(category){
    const {gameCode, dispatch} = this.props
    const manager = GameManager(gameCode, dispatch )
    manager.sendToGame({type: UPDATE_CATEGORY})
    manager.sendToGame({type: NEXT_ROUND})
    const playPayload = {
      type: PLAY_CATEGORY,
      category
    }
    manager.sendToGame(playPayload)

  }
  
  render(){
    const {currentCat, nextCategory, deckCategories} = this.props
    if (!this.props.deckCategories.length > 0) return null
    const category = deckCategories[currentCat]
    
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