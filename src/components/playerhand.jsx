import React, { Component } from "react";
import PlayerCard from "./playercard";

class PlayerHand extends Component {
  state = {
    cardDrew: {},
    cardPlayed: {},
  };

  render() {
    const { cardDrew, callBackCardPlayed, cardPlayed } = this.props;

    return (
      <React.StrictMode>
        {cardDrew
          .filter((c) => c.value !== cardPlayed.value)
          .map((card) => (
            <PlayerCard card={card} callBackCardPlayed={callBackCardPlayed} />
          ))}
      </React.StrictMode>
    );
  }
}

export default PlayerHand;
