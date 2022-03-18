import React from 'react'


const Tile = ( {guess, submitted, index, correctWord} ) => {
  
  let content;
  let className;

  let letter = guess[index]

  if (letter) {
    content = letter;
    className = "tile active"
  } else {
    className = "tile"
  }

  if (letter === correctWord[index]){
    className = "tile correct"
  } else if (correctWord.indexOf(letter) === -1){
    className = "tile wrong"
  } else {
    className = "tile present"
  }

  return (
    <div className={submitted ? className : "tile"}>{content}</div>
  )
}

export default Tile

/*
let BLACK = '#111'
let GREY = '#212121'
let MIDDLEGREY = '#666'
let LIGHTGREY = '#888'
let GREEN = '#538d4e'
let YELLOW = '#b59f3b'
*/