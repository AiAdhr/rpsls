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
          this.setState({
            cardInHand: [
              { id: 1, value: "Card1" },
              { id: 2, value: "Card2" },
              { id: 3, value: "Card3" },
            ],
          });
        }
        if (nbrOfRound === 7) {
          this.setState({
            cardInHand: [
              { id: 1, value: "Card1" },
              { id: 2, value: "Card2" },
            ],
          });
        }
        if (nbrOfRound === 8) {
          this.setState({
            cardInHand: [{ id: 1, value: "Card1" }],
          });
        }
        if (nbrOfRound === 9) {
          this.setState({
            cardInHand: [],
          });
        }
      }
    }

    return (
      <React.StrictMode>
        {this.state.cardInHand.map(() => (
          <img src={require("./assets/Back.jpg")} />
        ))}
      </React.StrictMode>
    );
  }
}

export default BotHand;
