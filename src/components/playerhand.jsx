import React, { Component } from "react";
import PlayerCard from "./playercard";

class PlayerHand extends Component {
  state = {};

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
    const { inHand, cardDrew, cardDrewId, newCardDrew } = this.props;

    return (
      <React.StrictMode>
        {cardDrew.map((card) => (
          <PlayerCard card={card} handleCard={this.handleCard} />
        ))}
      </React.StrictMode>
    );
  }
}

export default PlayerHand;
