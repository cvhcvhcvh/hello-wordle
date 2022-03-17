import React from "react";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = () => {
  return (
    <div id="screen">
      <Header />
      <div id="game-container">
        <Grid />
        <Keyboard />
      </div>
    </div>
  );
};

export default Game;
