import React, { Component } from "react";
import BotCardDeck from "./botcarddeck";
import BotCardDiscard from "./botcarddiscard";
import BotCardPlayed from "./botcardplayed";
import BotHand from "./bothand";
import "./styleBotSide.css";

class BotSide extends Component {
  render() {
    const {
      playerCardDeckClicked,
      playerCardConfirmedClicked,
      callBackCardPlayedByBot,
      nbrOfRound,
      cardDiscardBot,
      battleOn,
    } = this.props;

    return (
      <div className="botSide">
        <div className="botBoard">
          <BotCardDeck
            playerCardDeckClicked={playerCardDeckClicked}
            nbrOfRound={nbrOfRound}
          />

          <BotHand
            playerCardDeckClicked={playerCardDeckClicked}
            nbrOfRound={nbrOfRound}
          />

          <BotCardDiscard cardDiscardBot={cardDiscardBot} />
        </div>
        <BotCardPlayed
          playerCardDeckClicked={playerCardDeckClicked}
          playerCardConfirmedClicked={playerCardConfirmedClicked}
          callBackCardPlayedByBot={callBackCardPlayedByBot}
          battleOn={battleOn}
          cardDiscardBot={cardDiscardBot}
          nbrOfRound={nbrOfRound}
        />
      </div>
    );
  }
}

export default BotSide;
