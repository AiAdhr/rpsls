import React, { Component } from "react";
import BotSide from "./components/BotSide/botside";
import PlayerSide from "./components/PlayerSide/playerside";
import "./styleApp.css";

class AppRpsls extends Component {
  state = {
    playerCardDeckClicked: false,
    playerCardConfirmedClicked: false,
    cardPlayedByPlayer: [],
    cardPlayedByBot: [],
    nbrOfRound: 0,
    cardDiscardBot: [],
    cardDiscardPlayer: [],
    battleOn: false,
    roundWonByPlayer: 0,
    roundWonByBot: 0,
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
      this.setState((previousState) => ({
        cardDiscardBot: [
          ...previousState.cardDiscardBot,
          this.state.cardPlayedByBot,
        ],
      }));
      this.setState({ cardPlayed: [] });
      this.setState((previousState) => ({
        cardDiscardPlayer: [
          ...previousState.cardDiscardPlayer,
          this.state.cardPlayedByPlayer,
        ],
      }));
      this.handleLog();
      this.setState({ battleOn: true });
      this.setState({ playerCardConfirmedClicked: false });
      this.setState({ cardPlayedByBot: [] });
    }
  };

  handleBattleEnding = () => {
    if (this.state.battleOn) {
      this.setState({ nbrOfRound: this.state.nbrOfRound + 1 });
      this.setState({ battleOn: false });
    }
  };

  handleLog = () => {
    if (this.state.cardPlayedByPlayer.value === "Rock") {
      if (this.state.cardPlayedByBot.value === "Rock") {
      }
      if (this.state.cardPlayedByBot.value === "Paper") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Scissors") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Lizard") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Spock") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
    }
    if (this.state.cardPlayedByPlayer.value === "Paper") {
      if (this.state.cardPlayedByBot.value === "Rock") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Paper") {
      }
      if (this.state.cardPlayedByBot.value === "Scissors") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Lizard") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Spock") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
    }
    if (this.state.cardPlayedByPlayer.value === "Scissors") {
      if (this.state.cardPlayedByBot.value === "Rock") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Paper") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Scissors") {
      }
      if (this.state.cardPlayedByBot.value === "Lizard") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Spock") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
    }
    if (this.state.cardPlayedByPlayer.value === "Lizard") {
      if (this.state.cardPlayedByBot.value === "Rock") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Paper") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Scissors") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Lizard") {
      }
      if (this.state.cardPlayedByBot.value === "Spock") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
    }
    if (this.state.cardPlayedByPlayer.value === "Spock") {
      if (this.state.cardPlayedByBot.value === "Rock") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Paper") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Scissors") {
        this.setState({ roundWonByPlayer: this.state.roundWonByPlayer + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Lizard") {
        this.setState({ roundWonByBot: this.state.roundWonByBot + 1 });
      }
      if (this.state.cardPlayedByBot.value === "Spock") {
      }
    }
  };

  render() {
    const gameStatus = this.state.playerCardDeckClicked
      ? "Round N°" + (this.state.nbrOfRound + 1)
      : "Draw card from Deck To Start";

    return (
      <div className="body">
        <BotSide
          playerCardDeckClicked={this.state.playerCardDeckClicked}
          playerCardConfirmedClicked={this.state.playerCardConfirmedClicked}
          nbrOfRound={this.state.nbrOfRound}
          callBackCardPlayedByBot={this.callBackCardPlayedByBot}
          cardDiscardBot={this.state.cardDiscardBot}
          battleOn={this.state.battleOn}
        />
        <div className="gameInfo">
          <button className="button" onClick={this.handleBattle}>
            Clear Board
          </button>
          <div className="round">{gameStatus}</div>
          <button className="button" onClick={this.handleBattleEnding}>
            Next round
          </button>
        </div>
        <div className="logBattle">
          Player Wins : {this.state.roundWonByPlayer}
          Bot Wins : {this.state.roundWonByBot}
        </div>
        <PlayerSide
          callBackCardDrewByPlayer={this.callBackCardDrewByPlayer}
          callBackCardConfirmedByPlayer={this.callBackCardConfirmedByPlayer}
          callBackCardPlayedByPlayer={this.callBackCardPlayedByPlayer}
          cardDiscardPlayer={this.state.cardDiscardPlayer}
          battleOn={this.state.battleOn}
          handleBattleEnding={this.handleBattleEnding}
        />
      </div>
    );
  }
}

export default AppRpsls;
