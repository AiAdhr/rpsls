import React, { Component } from "react";
import PlayerCard from "./playercard";

class PlayerHand extends Component {
  state = {};

  render() {
    const { cardDrew, callBackCardPlayed, cardPlayed, cardDeck } = this.props;

    return (
      <div className="playerHand">
        {cardDrew
          .filter((c) => c.id !== cardPlayed.id)
          .map((card) => (
            <PlayerCard
              card={card}
              callBackCardPlayed={callBackCardPlayed}
              cardDrew={cardDrew}
              cardDeck={cardDeck}
            />
          ))}
      </div>
    );
  }
}

export default PlayerHand;
