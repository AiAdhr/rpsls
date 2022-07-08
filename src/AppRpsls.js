import React, { Component } from "react";
import BotSide from "./components/botside";
import PlayerSide from "./components/playerside";
import "./components/assets/style.css";

class AppRpsls extends Component {
  state = {
    playerCardDeckClicked: false,
    playerCardConfirmedClicked: false,
  };

  callBackCardDrewByPlayer = (childData) => {
    this.setState({ playerCardDeckClicked: childData });
  };

  callBackCardConfirmedByPlayer = (childData) => {
    this.setState({ playerCardConfirmedClicked: childData });
  };

  render() {
    return (
      <div className="body">
        <div>
          <BotSide
            playerCardDeckClicked={this.state.playerCardDeckClicked}
            playerCardConfirmedClicked={this.state.playerCardConfirmedClicked}
          />
        </div>
        <div>
          <PlayerSide
            callBackCardDrewByPlayer={this.callBackCardDrewByPlayer}
            callBackCardConfirmedByPlayer={this.callBackCardConfirmedByPlayer}
          />
        </div>
      </div>
    );
  }
}

export default AppRpsls;
