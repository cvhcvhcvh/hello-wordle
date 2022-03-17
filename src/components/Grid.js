import React from 'react'

import Tile from './Tile'

const Grid = () => {

  const emptyTiles = Array(30).fill("")

  return (
    <div id="grid">
      {emptyTiles.map((value, i) => (
        <Tile key={i} value={value}/>
      ))}
    </div>
  )
}

export default Grid