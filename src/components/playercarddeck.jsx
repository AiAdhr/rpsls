import React, { Component } from "react";

class PlayerCardDeck extends Component {
  render() {
    const { onDraw, cardDeck, callBackCardPlayedByPlayer } = this.props;

    const triggerDraw = () => {
      onDraw();
      callBackCardPlayedByPlayer(true);
    };

    return (
      <React.StrictMode>
        <img onClick={triggerDraw} src={require("./assets/Back.jpg")} alt="" />
        Card : {cardDeck.length}
      </React.StrictMode>
    );
  }
}

export default PlayerCardDeck;
