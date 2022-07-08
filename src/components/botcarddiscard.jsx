import React, { Component } from "react";

class BotCardDiscard extends Component {
  state = {};
  render() {
    const { cardDiscardBot } = this.props;

    const rockCount =
      cardDiscardBot.filter((c) => c.id === 1).length +
      cardDiscardBot.filter((c) => c.id === 2).length;
    const paperCount =
      cardDiscardBot.filter((c) => c.id === 3).length +
      cardDiscardBot.filter((c) => c.id === 4).length;
    const ScissorsCount =
      cardDiscardBot.filter((c) => c.id === 5).length +
      cardDiscardBot.filter((c) => c.id === 6).length;
    const lizardCount =
      cardDiscardBot.filter((c) => c.id === 7).length +
      cardDiscardBot.filter((c) => c.id === 8).length;
    const spockCount =
      cardDiscardBot.filter((c) => c.id === 9).length +
      cardDiscardBot.filter((c) => c.id === 10).length;

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

export default BotCardDiscard;
