import React, { Component } from "react";

class CardDiscard extends Component {
  state = {};

  render() {
    const { cardDiscard } = this.props;

    const rockCount =
      cardDiscard.filter((c) => c.id === 1).length +
      cardDiscard.filter((c) => c.id === 2).length;
    const paperCount =
      cardDiscard.filter((c) => c.id === 3).length +
      cardDiscard.filter((c) => c.id === 4).length;
    const ScissorsCount =
      cardDiscard.filter((c) => c.id === 5).length +
      cardDiscard.filter((c) => c.id === 6).length;
    const lizardCount =
      cardDiscard.filter((c) => c.id === 7).length +
      cardDiscard.filter((c) => c.id === 8).length;
    const spockCount =
      cardDiscard.filter((c) => c.id === 9).length +
      cardDiscard.filter((c) => c.id === 10).length;

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
