import React, { Component } from "react";

class BotCardDeck extends Component {
  state = {};
  render() {
    const { cardDeckBot } = this.props;

    return (
      <React.StrictMode>
        <img src={require("./assets/Back.jpg")}></img>
        Card : {cardDeckBot.length}
      </React.StrictMode>
    );
  }
}

export default BotCardDeck;
