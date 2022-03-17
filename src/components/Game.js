import React from 'react'
import Grid from './Grid'
import Keyboard from './Keyboard'
import Header from './Header'

const Game = () => {
  return (
    <div id="screen">
      <Header/>
      <Grid/>
      <Keyboard/>
    </div>
  )
}

export default Game