import React, { Component } from "react";
import PlayerCardDeck from "./playercarddeck";
import PlayerHand from "./playerhand";

class PlayerSide extends Component {
  state = {
    cardDeck: [
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
    cardDrew: [],
    newCardDrew: 0,
  };

  drawCard = () => {
    if (this.state.cardDrew.length < 4) {
      const card =
        this.state.cardDeck[
          Math.floor(Math.random() * this.state.cardDeck.length)
        ];
      this.state.newCardDrew = card.id;
      const cardDeck = this.state.cardDeck.filter(
        (c) => c.value !== card.value
      );
      this.setState({ cardDeck });
      this.setState((previousState) => ({
        cardDrew: [...previousState.cardDrew, card],
      }));
    }
  };

  handleCardInHand = () => {};

  render() {
    return (
      <React.StrictMode>
        <PlayerHand
          inHand={this.handleCardInHand}
          cardDrew={this.state.cardDrew}
          cardDrewId={this.state.cardDrew.id}
          newCardDrew={this.state.newCardDrew}
        />
        <PlayerCardDeck onDraw={this.drawCard} />
      </React.StrictMode>
    );
  }
}

export default PlayerSide;
