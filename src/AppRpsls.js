import React, { Component } from "react";
import BotSide from "./components/botside";
import PlayerSide from "./components/playerside";

class AppRpsls extends Component {
  state = {
    playerCardDeckClicked: false,
    playerCardPlayedClicked: false,
  };

  callBackCardDrewByPlayer = (childData) => {
    this.setState({ playerCardDeckClicked: childData });
  };

  render() {
    return (
      <React.StrictMode>
        <BotSide playerCardDeckClicked={this.state.playerCardDeckClicked} />
        <PlayerSide callBackCardDrewByPlayer={this.callBackCardDrewByPlayer} />
      </React.StrictMode>
    );
  }
}

export default AppRpsls;
