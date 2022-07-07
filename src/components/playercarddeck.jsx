import React, { Component } from "react";

class PlayerCardDeck extends Component {
  render() {
    const { onDraw, cardDeck } = this.props;
    return (
      <React.StrictMode>
        <img onClick={onDraw} src={require("./assets/Back.jpg")} alt="" />
        Card : {cardDeck.length}
      </React.StrictMode>
    );
  }
}

export default PlayerCardDeck;
