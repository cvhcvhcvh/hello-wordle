import React from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = () => {
  return (
    <>
      <Header />
      <div id="game">
        <div id="board-container">
          <Board />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Game;
