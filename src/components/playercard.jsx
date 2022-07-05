import React, { Component } from "react";

class PlayerCard extends Component {
  state = {};

  render() {
    const { card, handleCard } = this.props;

    return (
      <React.StrictMode>
        <img src={handleCard(card)} alt="" />
      </React.StrictMode>
    );
  }
}

export default PlayerCard;
