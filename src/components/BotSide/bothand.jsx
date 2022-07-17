import React, { Component } from "react";
import BotCard from "./botcard";

class BotHand extends Component {
  state = {
    cardInHand: [],
    cardBotPlayed: [],
  };

  render() {
    var { playerCardDeckClicked, nbrOfRound } = this.props;

    if (this.state.cardInHand.length < 3) {
      if (playerCardDeckClicked) {
        if (nbrOfRound <= 6) {
          return (
            <div className="botHand">
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
            </div>
          );
        }
        if (nbrOfRound === 7) {
          return (
            <div className="botHand">
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
            </div>
          );
        }
        if (nbrOfRound === 8) {
          return (
            <div className="botHand">
              <img src={require("./assets/Back.jpg")} />
            </div>
          );
        }
        if (nbrOfRound === 9) {
          return <div className="botHand"></div>;
        }
      }
    }
    if (!playerCardDeckClicked) {
      return <div className="botHand"></div>;
    }
  }
}

export default BotHand;
