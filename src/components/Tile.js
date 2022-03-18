import React from "react";

const Tile = ({ guess, submitted, index, correctWord, value }) => {
  
  
  if (submitted){
    console.log("guess is", guess)
  } 



  let letter = guess[index];
  let tile;

  if (letter) {
    value = letter;
    tile = "tile active";
  } else {
    value = ""
    tile = "tile";
  };

  const flipTile = () => {
    // ! to do, need to animate the flip then call getColor()
    // getColor()
  }

  const getColor = () => {
    if (letter === correctWord[index]) {
      return "tile correct";
    } else if (correctWord.indexOf(letter) === -1) {
      return "tile wrong";
    } else {
      return "tile present";
    }
  }

  return <div className={submitted ? getColor() : tile}>{value}</div>

}
export default Tile;

/*
let BLACK = '#111'
let GREY = '#212121'
let MIDDLEGREY = '#666'
let LIGHTGREY = '#888'
let GREEN = '#538d4e'
let YELLOW = '#b59f3b'
*/
