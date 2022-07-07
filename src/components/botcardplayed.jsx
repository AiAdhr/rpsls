import React, { Component } from "react";

class BotCardPlayed extends Component {
  state = {};
  render() {
    const { playerCardDeckClicked } = this.props;

    if (playerCardDeckClicked) {
      return (
        <React.StrictMode>
          <img src={require("./assets/Back.jpg")} />
        </React.StrictMode>
      );
    }
  }
}

export default BotCardPlayed;
