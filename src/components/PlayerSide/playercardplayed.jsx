import React, { Component } from "react";

class PlayerCardPlayed extends Component {
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
    const {
      cardPlayed,
      onCardConfirmed,
      callBackCardConfirmedByPlayer,
      callBackCardPlayedByPlayer,
    } = this.props;

    const CardConfirmed = () => {
      onCardConfirmed(cardPlayed);
      callBackCardConfirmedByPlayer(true);
      callBackCardPlayedByPlayer(cardPlayed);
    };

    return (
      <img src={this.handleCard(cardPlayed)} alt="" onClick={CardConfirmed} />
    );
  }
}

export default PlayerCardPlayed;
