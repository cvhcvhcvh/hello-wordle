import { useState, useEffect } from "react";
import Guess from "./Guess";
// /* eslint-disable */

let wordList = [
  "piano", 
  "smile", 
  "horse", 
  "bling", 
  "cater",
  "paper", 
  "panic", 
  "right", 
  "thing"
]

const Board = () => {
  let correctWord = "piano";
  let [history, setHistory] = useState([])
  let [currentGuess, setCurrentGuess] = useState("")

  function handleKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey){
      return 
    }
    if (history.length === 6) {
      return
    }
    let key = e.key;
   
    let letter = key.toLowerCase();
    if (letter === "enter") {
      if (currentGuess.length < 5){
        return
      }
      if (!wordList.includes(letter)){
        console.log("hey")
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown"), handleKeyDown
  })

  let rows = [];
  for (let i = 0; i < 6; i++) { // 
    if (i < history.length) {
      rows.push(
        <Guess 
          key={i}
          guess={history[i]}
          correctWord={correctWord}
          submitted={true}
        />);
    } else if(i === history.length){
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          correctWord={correctWord}
          submitted={false}
        />
      );
    } else {
      rows.push(
        <Guess 
          key={i} 
          guess=""
          correctWord={correctWord}
          submitted={false} 
      />);
    }
  }

  return (
    <div id="board"> 
      {rows}
    </div>
  );
};

export default Board;

// const Grid = () => {
//   const emptyTiles = Array(30).fill("")

//   return (
//       <div id="grid">
//         <div className="grid-row">
//           {emptyTiles.map((value, i) => (
//             <Tile key={i} value={value}/>
//           ))}
//         </div>
//       </div>
//   )
// }

// export default Grid
