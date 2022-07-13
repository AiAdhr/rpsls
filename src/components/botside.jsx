import React, { Component } from "react";
import BotCardDeck from "./botcarddeck";
import BotCardDiscard from "./botcarddiscard";
import BotCardPlayed from "./botcardplayed";
import BotHand from "./bothand";

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
      <div className="botBoard">
        <div className="botSide">
          <div>
            <BotCardDeck
              playerCardDeckClicked={playerCardDeckClicked}
              nbrOfRound={nbrOfRound}
            />
          </div>
          <div>
            <BotHand
              playerCardDeckClicked={playerCardDeckClicked}
              nbrOfRound={nbrOfRound}
            />
          </div>
          <div>
            <BotCardDiscard cardDiscardBot={cardDiscardBot} />
          </div>
        </div>
        <div>
          <BotCardPlayed
            playerCardDeckClicked={playerCardDeckClicked}
            playerCardConfirmedClicked={playerCardConfirmedClicked}
            callBackCardPlayedByBot={callBackCardPlayedByBot}
            battleOn={battleOn}
            cardDiscardBot={cardDiscardBot}
            nbrOfRound={nbrOfRound}
          />
        </div>
      </div>
    );
  }
}

export default BotSide;
