import React from 'react'
import Tile from './Tile'

const Guess = ( {guess, submitted, secret} ) => {


  let tiles = [];
  for (let i = 0; i < 5; i++){
    tiles.push(
      <Tile
        key={i}
        guess={guess} 
        index={i}
        submitted={submitted}
        secret={secret}
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
