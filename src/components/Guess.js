import React from 'react'
import Tile from './Tile'

const Guess = ( {guess, solved} ) => {

  let emptyTiles = [];
  for (let i = 0; i < 5; i++){
    emptyTiles.push(
      <Tile
        key={i}
        guess={guess}
    />)
  }
  
  return (
    <div className="board row">
     {emptyTiles}
    </div>
  );
}

export default Guess