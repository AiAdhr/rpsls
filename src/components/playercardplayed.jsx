import React, { Component } from "react";

class PlayerCardPlayed extends Component {
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
    const {
      cardPlayed,
      onCardConfirmed,
      callBackCardConfirmedByPlayer,
      callBackCardPlayedByPlayer,
    } = this.props;

    const CardConfirmed = () => {
      onCardConfirmed(cardPlayed);
      callBackCardConfirmedByPlayer(true);
      // callBackCardPlayedByPlayer(cardPlayed);
    };

    return (
      <img src={this.handleCard(cardPlayed)} alt="" onClick={CardConfirmed} />
    );
  }
}

export default PlayerCardPlayed;
