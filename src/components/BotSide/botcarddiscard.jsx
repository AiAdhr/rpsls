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
      cardDiscardBot.filter((c) => c.id === 8).length +
      cardDiscardBot.filter((c) => c.id === 9).length;
    const spockCount = cardDiscardBot.filter((c) => c.id === 10).length;

    return (
      <div className="botDiscard">
        <div>Buster : {rockCount}</div>
        <div>Quick : {paperCount}</div>
        <div>Art : {ScissorsCount}</div>
        <div>Command Seal : {lizardCount}</div>
        <div>Noble Phantasm : {spockCount}</div>
      </div>
    );
  }
}

export default BotCardDiscard;
