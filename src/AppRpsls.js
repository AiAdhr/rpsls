import React, { Component } from "react";
import BotSide from "./components/botside";
import PlayerSide from "./components/playerside";

class AppRpsls extends Component {
  state = {
    playerCardDeckClicked: false,
  };

  callBackCardPlayedByPlayer = (childData) => {
    this.setState({ playerCardDeckClicked: childData });
  };

  render() {
    return (
      <React.StrictMode>
        <BotSide playerCardDeckClicked={this.state.playerCardDeckClicked} />
        <PlayerSide
          callBackCardPlayedByPlayer={this.callBackCardPlayedByPlayer}
        />
      </React.StrictMode>
    );
  }
}

export default AppRpsls;
