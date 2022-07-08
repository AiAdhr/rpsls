import React, { Component } from "react";
import BotSide from "./components/botside";
import PlayerSide from "./components/playerside";
import "./components/assets/style.css";

class AppRpsls extends Component {
  state = {
    playerCardDeckClicked: false,
    playerCardConfirmedClicked: false,
    cardPlayedByPlayer: [],
    cardPlayedByBot: [],
    nbrOfRound: 0,
    cardDiscardBot: [],
  };

  callBackCardDrewByPlayer = (childData) => {
    this.setState({ playerCardDeckClicked: childData });
  };

  callBackCardConfirmedByPlayer = (childData) => {
    this.setState({ playerCardConfirmedClicked: childData });
  };

  callBackCardPlayedByPlayer = (childData) => {
    this.setState({ cardPlayedByPlayer: childData });
  };

  callBackCardPlayedByBot = (childData) => {
    if (this.state.cardPlayedByBot.length === 0) {
      this.setState({ cardPlayedByBot: childData });
    }
  };

  handleBattle = () => {
    if (this.state.playerCardConfirmedClicked) {
      this.setState({ nbrOfRound: this.state.nbrOfRound + 1 });
      this.setState((previousState) => ({
        cardDiscardBot: [
          ...previousState.cardDiscardBot,
          this.state.cardPlayedByBot,
        ],
      }));
      this.setState({ cardPlayed: [] });
    }
  };

  render() {
    return (
      <div className="body">
        <div>
          <BotSide
            playerCardDeckClicked={this.state.playerCardDeckClicked}
            playerCardConfirmedClicked={this.state.playerCardConfirmedClicked}
            nbrOfRound={this.state.nbrOfRound}
            callBackCardPlayedByBot={this.callBackCardPlayedByBot}
            cardDiscardBot={this.state.cardDiscardBot}
          />
        </div>
        <button onClick={this.handleBattle}>OK</button>
        <div>
          <PlayerSide
            callBackCardDrewByPlayer={this.callBackCardDrewByPlayer}
            callBackCardConfirmedByPlayer={this.callBackCardConfirmedByPlayer}
            callBackCardPlayedByPlayer={this.callBackCardPlayedByPlayer}
          />
        </div>
      </div>
    );
  }
}

export default AppRpsls;
