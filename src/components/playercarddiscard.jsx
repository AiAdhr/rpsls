import React, { Component } from "react";

class CardDiscard extends Component {
  state = {};

  render() {
    const { cardDiscardPlayer } = this.props;

    const rockCount =
      cardDiscardPlayer.filter((c) => c.id === 1).length +
      cardDiscardPlayer.filter((c) => c.id === 2).length;
    const paperCount =
      cardDiscardPlayer.filter((c) => c.id === 3).length +
      cardDiscardPlayer.filter((c) => c.id === 4).length;
    const ScissorsCount =
      cardDiscardPlayer.filter((c) => c.id === 5).length +
      cardDiscardPlayer.filter((c) => c.id === 6).length;
    const lizardCount =
      cardDiscardPlayer.filter((c) => c.id === 7).length +
      cardDiscardPlayer.filter((c) => c.id === 8).length;
    const spockCount =
      cardDiscardPlayer.filter((c) => c.id === 9).length +
      cardDiscardPlayer.filter((c) => c.id === 10).length;

    return (
      <React.StrictMode>
        <div>Rock : {rockCount}</div>
        <div>Paper : {paperCount}</div>
        <div>Scissors : {ScissorsCount}</div>
        <div>Lizard : {lizardCount}</div>
        <div>Spock : {spockCount}</div>
      </React.StrictMode>
    );
  }
}

export default CardDiscard;
