import React from "react";
import '../../../stylesheets/root.scss';

class SubmittedCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { card, playerId, players } = this.props
    if (card) {
      return (
        <div>
          <div
            className="the-card"
            id={card.gifId}
            key={card.gifId}
          >
            <img
              src={this.props.card.images.fixed_height.url}
              alt="altname"
              key={this.props.card.id}
            />
            <h3>{players[playerId].displayName}</h3>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SubmittedCard;
