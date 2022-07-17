import React, { Component } from "react";

class BotCardDeck extends Component {
  state = {};
  render() {
    const { playerCardDeckClicked, nbrOfRound } = this.props;

    const nbrOfCard = () => {
      if (playerCardDeckClicked) {
        if (nbrOfRound >= 6) {
          return 0;
        } else if (nbrOfRound < 6) {
          return 6 - nbrOfRound;
        } else {
          return 10;
        }
      } else {
        return 10;
      }
    };

    return (
      <div className="botDeck">
        <img src={require("./assets/Back.jpg")}></img>
        Card : {nbrOfCard()}
      </div>
    );
  }
}

export default BotCardDeck;
