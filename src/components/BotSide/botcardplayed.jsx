import React, { Component } from "react";

class BotCardPlayed extends Component {
  state = {
    cardDeckBot: [
      { id: 1, value: "Buster" },
      { id: 2, value: "Buster" },
      { id: 3, value: "Quick" },
      { id: 4, value: "Quick" },
      { id: 5, value: "Art" },
      { id: 6, value: "Art" },
      { id: 7, value: "Seal" },
      { id: 8, value: "Seal" },
      { id: 9, value: "Seal" },
      { id: 10, value: "NP" },
    ],
    cardPlayedBot: [],
  };

  handleCard = (c) => {
    const a = {
      0: require("./assets/Back.jpg"),
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

  handleCardImage = (c) => {
    if (this.state.cardPlayedBot.length === 0) {
      return this.handleCard({ id: 0, value: "Back" });
    } else {
      return this.handleCard(c);
    }
  };

  randomCard = () => {
    const card =
      this.state.cardDeckBot[
        Math.floor(Math.random() * this.state.cardDeckBot.length)
      ];
    this.setState({ cardPlayedBot: card });
    const cardDeckBot = this.state.cardDeckBot.filter((c) => c.id !== card.id);
    this.setState({ cardDeckBot });
  };

  render() {
    var {
      playerCardDeckClicked,
      playerCardConfirmedClicked,
      callBackCardPlayedByBot,
      battleOn,
      nbrOfRound,
    } = this.props;

    if (battleOn) {
      if (this.state.cardPlayedBot.length !== 0) {
        this.setState({ cardPlayedBot: [] });
      }
    }

    if (playerCardConfirmedClicked) {
      if (this.state.cardPlayedBot.length === 0) {
        this.randomCard();
      }
      callBackCardPlayedByBot(this.state.cardPlayedBot);
    }

    if (nbrOfRound !== 10) {
      if (playerCardDeckClicked) {
        if (!battleOn) {
          return (
            <div className="botPlayed">
              <img src={this.handleCardImage(this.state.cardPlayedBot)} />
            </div>
          );
        }
      }
    }
  }
}

export default BotCardPlayed;
