import React from "react";
import '../../stylesheets/root.scss'
import {manager} from "../../util/game_socket_util"
import { UPDATE_CATEGORY } from "../../actions/ui_actions";
import ReactTooltip from "react-tooltip";
class Categories extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.manager = undefined;
    this.state = {hover: false}
  }

  handleSubmit(category){
    const {
      gameCode, 
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

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render(){
    if (!this.props.deckCategories.length > 0) return null
    const {deckCategories, currentRound} = this.props
    if (!currentRound) return null
    const category = deckCategories[currentRound.category]
    return (
      <div>
        <div id="categories">
            {/* <h2>CATEGORY</h2> */}
            <h1 key={category.id}>{category.name.toUpperCase()}</h1>
            
           
            {this.props.timesUp ? null : <button data-tip data-for="registerTip" onClick={() => this.handleSubmit(category)}>Shuffle</button>}
          <ReactTooltip id="registerTip" place="left" effect="solid">
            Skip to the next category!
          </ReactTooltip>
        </div>
        
      </div>
    )
  }
}

export default Categories