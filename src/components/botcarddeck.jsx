import React, { Component } from "react";

class BotCardDeck extends Component {
  state = {
    nbrOfCardPlayed: 0,
  };
  render() {
    const { playerCardDeckClicked } = this.props;

    const nbrOfCard = () => {
      if (playerCardDeckClicked) {
        return 6 - this.state.nbrOfCardPlayed;
      } else {
        return 10;
      }
    };

    return (
      <React.StrictMode>
        <img src={require("./assets/Back.jpg")}></img>
        Card : {nbrOfCard()}
      </React.StrictMode>
    );
  }
}

export default BotCardDeck;
