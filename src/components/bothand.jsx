import React, { Component } from "react";
import BotCard from "./botcard";

class BotHand extends Component {
  state = {
    cardInHand: [],
    cardBotPlayed: [],
  };

  render() {
    var { playerCardDeckClicked } = this.props;

    if (this.state.cardInHand.length < 4) {
      if (playerCardDeckClicked) {
        this.setState({
          cardInHand: [
            { id: 1, value: "Card1" },
            { id: 2, value: "Card2" },
            { id: 3, value: "Card3" },
            { id: 4, value: "Card4" },
          ],
        });
      }
    }

    return (
      <React.StrictMode>
        {playerCardDeckClicked && this.state.cardInHand.map((c) => <BotCard />)}
        ;
      </React.StrictMode>
    );
  }
}

export default BotHand;
