import React, { Component } from "react";

class PlayerCardDeck extends Component {
  render() {
    const { onDraw } = this.props;
    return (
      <React.StrictMode>
        <img onClick={onDraw} src={require("./assets/Back.jpg")} alt="" />
      </React.StrictMode>
    );
  }
}

export default PlayerCardDeck;
