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
            <React.StrictMode>
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
            </React.StrictMode>
          );
        }
        if (nbrOfRound === 7) {
          return (
            <React.StrictMode>
              <img src={require("./assets/Back.jpg")} />
              <img src={require("./assets/Back.jpg")} />
            </React.StrictMode>
          );
        }
        if (nbrOfRound === 8) {
          return (
            <React.StrictMode>
              <img src={require("./assets/Back.jpg")} />
            </React.StrictMode>
          );
        }
        if (nbrOfRound === 9) {
          return <React.StrictMode></React.StrictMode>;
        }
      }
    }

    // return (
    //   <React.StrictMode>
    //     <img src={require("./assets/Back.jpg")} />
    //   </React.StrictMode>
    // );
  }
}

export default BotHand;
