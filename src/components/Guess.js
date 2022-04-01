import React from "react";
import Tile from "./Tile";

const Guess = ({ guess, submitted, secret, getBgColor }) => {
  let tiles = [];
  for (let i = 0; i < 5; i++) {
    tiles.push(
      <Tile
        key={i}
        guess={guess}
        index={i}
        submitted={submitted}
        // getBgColor={getBgColor}
        secret={secret}
      />
    );
  }

  return <div className="board row">{tiles}</div>;
};

export default Guess;
