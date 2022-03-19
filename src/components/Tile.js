import React from "react";

const Tile = ({ guess, submitted, index, correctWord }) => {

  let BLACK = "#111";
  let GREY = "#212121";
  let MIDDLEGREY = "#666";
  let LIGHTGREY = "#888";
  let GREEN = "#538d4e";
  let YELLOW = "#b59f3b";

  let content;
  if (guess[index] !== undefined) {
    content = guess[index];
  } else {
    content = "";
  }
  function getBgColor(guess, i) {
    let correctLetter = correctWord[i];
    let attemptLetter = guess[i];
    if (attemptLetter === undefined || correctWord.indexOf(attemptLetter) === -1) {
      return GREY;
    }
    if (correctLetter === attemptLetter) {
      return GREEN;
    }
    return YELLOW;
  }
  let color = getBgColor(guess, index)
  

  const flipTile = () => {
    // ! todo, need to animate the flip then call getColor()
    // getColor()
  };

  return <div 
    className="tile"  
    style={{
            backgroundColor: color,
            borderColor: color
          }}>
      {content}
    </div>;
};
export default Tile;

/*
let BLACK = '#111'
let GREY = '#212121'
let MIDDLEGREY = '#666'
let LIGHTGREY = '#888'
let GREEN = '#538d4e'
let YELLOW = '#b59f3b'
*/
