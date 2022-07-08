import React, { Component } from "react";

class BotCardPlayed extends Component {
  state = {
    cardDeckBot: [
      { id: 1, value: "Rock1" },
      { id: 2, value: "Rock2" },
      { id: 3, value: "Paper1" },
      { id: 4, value: "Paper2" },
      { id: 5, value: "Scissors1" },
      { id: 6, value: "Scissors2" },
      { id: 7, value: "Lizard1" },
      { id: 8, value: "Lizard2" },
      { id: 9, value: "Spock1" },
      { id: 10, value: "Spock2" },
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
    if (this.state.cardPlayedBot.length === 0) {
      const card =
        this.state.cardDeckBot[
          Math.floor(Math.random() * this.state.cardDeckBot.length)
        ];
      this.setState({ cardPlayedBot: card });
    }
  };

  render() {
    var {
      playerCardDeckClicked,
      playerCardConfirmedClicked,
      callBackCardPlayedByBot,
    } = this.props;

    if (playerCardConfirmedClicked) {
      this.randomCard();
      callBackCardPlayedByBot(this.state.cardPlayedBot);
    }

    if (playerCardDeckClicked) {
      return (
        <React.StrictMode>
          <img src={this.handleCardImage(this.state.cardPlayedBot)} />
        </React.StrictMode>
      );
    }
  }
}

export default BotCardPlayed;
