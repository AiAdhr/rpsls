import React, { Component } from "react";

class PlayerCardDeck extends Component {
  render() {
    const { onDraw, cardDeck, callBackCardDrewByPlayer, battleOn } = this.props;

    const triggerDraw = () => {
      if (!battleOn) {
        onDraw();
        callBackCardDrewByPlayer(true);
      }
    };

    return (
      <div className="playerDeck">
        <img onClick={triggerDraw} src={require("./assets/Back.jpg")} alt="" />
        Card : {cardDeck.length}
      </div>
    );
  }
}

export default PlayerCardDeck;
