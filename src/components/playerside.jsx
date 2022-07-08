import React, { Component } from "react";
import PlayerCardDeck from "./playercarddeck";
import PlayerCardPlayed from "./playercardplayed";
import PlayerHand from "./playerhand";
import CardDiscard from "./playercarddiscard";

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
    cardPlayed: [],
    cardDiscard: [],
  };

  callBackCardPlayed = (childData) => {
    this.setState({ cardPlayed: childData });
  };

  callBackCardConfirmed = (childData) => {
    this.setState({
      cardDrew: this.state.cardDrew.filter((c) => c.value !== childData.value),
    });
    this.setState((previousState) => ({
      cardDiscard: [...previousState.cardDiscard, childData],
    }));
    this.setState({ cardPlayed: [] });
  };

  drawCard = () => {
    if (this.state.cardDrew.length + this.state.cardPlayed.length < 4) {
      if (this.state.cardDeck.length + this.state.cardPlayed.length !== 0) {
        const card =
          this.state.cardDeck[
            Math.floor(Math.random() * this.state.cardDeck.length)
          ];
        const cardDeck = this.state.cardDeck.filter(
          (c) => c.value !== card.value
        );
        this.setState({ cardDeck });
        this.setState((previousState) => ({
          cardDrew: [...previousState.cardDrew, card],
        }));
      }
    }
  };

  render() {
    const { callBackCardDrewByPlayer, callBackCardConfirmedByPlayer } =
      this.props;

    return (
      <div className="playerBoard">
        <div>
          <PlayerCardPlayed
            cardPlayed={this.state.cardPlayed}
            onCardConfirmed={this.callBackCardConfirmed}
            callBackCardConfirmedByPlayer={callBackCardConfirmedByPlayer}
          />
        </div>
        <div className="playerSide">
          <div>
            <CardDiscard cardDiscard={this.state.cardDiscard} />
          </div>

          <div>
            <PlayerHand
              cardDrew={this.state.cardDrew}
              callBackCardPlayed={this.callBackCardPlayed}
              cardPlayed={this.state.cardPlayed}
              cardDeck={this.state.cardDeck}
            />
          </div>

          <div>
            <PlayerCardDeck
              onDraw={this.drawCard}
              cardDeck={this.state.cardDeck}
              callBackCardDrewByPlayer={callBackCardDrewByPlayer}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerSide;
