import React, { Component } from "react";

class PlayerCardDeck extends Component {
  render() {
    const { onDraw, cardDeck, callBackCardDrewByPlayer } = this.props;

    const triggerDraw = () => {
      onDraw();
      callBackCardDrewByPlayer(true);
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
