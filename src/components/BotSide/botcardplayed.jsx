import React, { Component } from "react";

class BotCardPlayed extends Component {
  state = {
    cardDeckBot: [
      { id: 1, value: "Rock" },
      { id: 2, value: "Rock" },
      { id: 3, value: "Paper" },
      { id: 4, value: "Paper" },
      { id: 5, value: "Scissors" },
      { id: 6, value: "Scissors" },
      { id: 7, value: "Lizard" },
      { id: 8, value: "Lizard" },
      { id: 9, value: "Spock" },
      { id: 10, value: "Spock" },
    ],
    cardPlayedBot: [],
  };

  handleCard = (c) => {
    const a = {
      0: require("./assets/Back.jpg"),
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
