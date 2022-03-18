import React from 'react'
import Tile from './Tile'

const Guess = ( {tiles } ) => {

  let emptyTiles = [];
  for (let i = 0; i < 5; i++){
    emptyTiles.push("")
  }
  
  return (
    <div className="board row">
      {emptyTiles.map((value, i) => (
        <Tile key={i} value={value}/>
      ))}
    </div>
  );
}

export default Guess