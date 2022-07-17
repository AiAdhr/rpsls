import React, { Component } from "react";

class PlayerCard extends Component {
  handleCard = (c) => {
    const a = {
      1: require("./assets/Buster.jpg"),
      2: require("./assets/Buster.jpg"),
      3: require("./assets/Quick.jpg"),
      4: require("./assets/Quick.jpg"),
      5: require("./assets/Art.jpg"),
      6: require("./assets/Art.jpg"),
      7: require("./assets/Seal.jpg"),
      8: require("./assets/Seal.jpg"),
      9: require("./assets/Seal.jpg"),
      10: require("./assets/NP.jpg"),
    };

    return a[c.id];
  };

  render() {
    const { card, callBackCardPlayed, cardDrew, cardDeck } = this.props;

    const cardPlayed = () => {
      if (cardDrew.length > 3) {
        callBackCardPlayed(card);
      } else if (cardDeck.length === 0) {
        callBackCardPlayed(card);
      }
    };

    return (
      <div className="playerCard">
        <img
          src={this.handleCard(card)}
          alt={card.value}
          onClick={cardPlayed}
        />
      </div>
    );
  }
}

export default PlayerCard;
