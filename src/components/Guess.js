import React from 'react'
import Tile from './Tile'

const Guess = ( {guess, submitted, correctWord} ) => {

  let tiles = [];
  for (let i = 0; i < 5; i++){
    tiles.push(
      <Tile
        key={i}
        guess={guess} // re-render => smile (in history)
        index={i}
        submitted={submitted} // 
        correctWord={correctWord}
      />
    );
  }

  return (
    <div className="board row">
     {tiles}
    </div>
  );
}

export default Guess
