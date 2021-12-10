import React from "react";
// import { render } from "react-dom";
import '../../../stylesheets/root.scss';

class Card extends React.Component {

  handleSubmit(){
    this.props.submitCard(this.props.card)
    // let prevcard = document.getElementsByClassName('select')
    // prevcard.className='the-card'

    // let card = document.getElementById(`${this.props.card.gifId}`)
    // card.className = 'select'
    //stuff
  }

  render() {
    const {card} = this.props
    if (card) {
      return (
        <div>
          <div className="the-card" id={card.gifId} key={card.gifId} onClick={() => this.handleSubmit()}>
            {/* <ul>{this.props.card.title}</ul> */}
            <img src={this.props.card.images.fixed_height.url} alt="altname" key={this.props.card.id} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Card;
