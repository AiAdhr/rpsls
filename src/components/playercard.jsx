import React, { Component } from "react";
import BotCardDeck from "./botcarddeck";

class PlayerCard extends Component {
  handleCard = (c) => {
    const a = {
      1: require("./assets/Rock.jpg"),
      2: require("./assets/Rock.jpg"),
      3: require("./assets/Paper.jpg"),
      4: require("./assets/Paper.jpg"),
      5: require("./assets/Scissors.jpg"),
      6: require("./assets/Scissors.jpg"),
      7: require("./assets/Lizard.jpg"),
      8: require("./assets/Lizard.jpg"),
      9: require("./assets/Spock.jpg"),
      10: require("./assets/Spock.jpg"),
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
      <React.StrictMode>
        <img
          src={this.handleCard(card)}
          alt={card.value}
          onClick={cardPlayed}
        />
      </React.StrictMode>
    );
  }
}

export default PlayerCard;
