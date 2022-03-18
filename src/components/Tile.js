import React from 'react'


const Tile = ( {value} ) => {

  value = "x";
  
  return (
    <div className="tile">{value}</div>
  )
}

export default Tile