import React, { Component } from "react";
import PlayerCardDeck from "./playercarddeck";
import PlayerCardPlayed from "./playercardplayed";
import PlayerHand from "./playerhand";
import CardDiscard from "./playercarddiscard";
import "./stylePlayerSide.css";

class PlayerSide extends Component {
  state = {
    cardDeck: [
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
    cardDrew: [],
    cardPlayed: [],
  };

  callBackCardPlayed = (childData) => {
    this.setState({ cardPlayed: childData });
  };

  callBackCardConfirmed = (childData) => {
    this.setState({
      cardDrew: this.state.cardDrew.filter((c) => c.id !== childData.id),
    });
  };

  drawCard = () => {
    if (this.state.cardDrew.length + this.state.cardPlayed.length < 4) {
      if (this.state.cardDeck.length + this.state.cardPlayed.length !== 0) {
        const card =
          this.state.cardDeck[
            Math.floor(Math.random() * this.state.cardDeck.length)
          ];
        const cardDeck = this.state.cardDeck.filter((c) => c.id !== card.id);
        this.setState({ cardDeck });
        this.setState((previousState) => ({
          cardDrew: [...previousState.cardDrew, card],
        }));
      }
    }
  };

  render() {
    const {
      callBackCardDrewByPlayer,
      callBackCardConfirmedByPlayer,
      callBackCardPlayedByPlayer,
      cardDiscardPlayer,
      battleOn,
    } = this.props;

    if (battleOn) {
      if (this.state.cardPlayed.length !== 0) {
        this.setState({ cardPlayed: [] });
      }
    }

    return (
      <div className="playerSide">
        <div className="playerPlayed">
          <PlayerCardPlayed
            cardPlayed={this.state.cardPlayed}
            onCardConfirmed={this.callBackCardConfirmed}
            callBackCardConfirmedByPlayer={callBackCardConfirmedByPlayer}
            callBackCardPlayedByPlayer={callBackCardPlayedByPlayer}
            battleOn={battleOn}
          />
        </div>
        <div className="playerBoard">
          <CardDiscard cardDiscardPlayer={cardDiscardPlayer} />

          <PlayerHand
            cardDrew={this.state.cardDrew}
            callBackCardPlayed={this.callBackCardPlayed}
            cardPlayed={this.state.cardPlayed}
            cardDeck={this.state.cardDeck}
          />

          <PlayerCardDeck
            onDraw={this.drawCard}
            cardDeck={this.state.cardDeck}
            callBackCardDrewByPlayer={callBackCardDrewByPlayer}
            battleOn={battleOn}
          />
        </div>
      </div>
    );
  }
}

export default PlayerSide;
