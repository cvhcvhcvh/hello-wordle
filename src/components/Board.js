import { useState, useEffect } from "react";
import Guess from "./Guess";

const Board = () => {
  let wordList = [
    "piano",
    "smile",
    "horse",
    "bling",
    "cater",
    "paper",
    "panic",
    "right",
    "thing",
  ];

  let [history, setHistory] = useState([]);
  console.log("history is", history);
  let [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function getSecretWord() {
    let idx = Math.floor(Math.random() * wordList.length);
    let secret = wordList[idx];
    return secret;
  }

  let secret = getSecretWord();

  function handleKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }
    if (history.length === 6) {
      return;
    }

    let key = e.key;
    let letter = key.toLowerCase();

    if (letter === "enter") {
      if (currentGuess.length < 5) {
        alert("not enough letters");
        return;
      }
      if (!wordList.includes(currentGuess)) {
        alert("word not in list");
        return;
      }
      if (history.length === 5 && currentGuess !== secret) {
        alert(secret);
      }

      let newHistory = [...history, currentGuess];
      setHistory(newHistory);
      setCurrentGuess("");
    } else if (letter === "backspace") {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + letter);
      }
    }
  }

  let rows = [];
  console.log("history is", history);

  for (let i = 0; i < 6; i++) {
    // re-render, i = 0
    if (i < history.length) {
      // yes, i guessed before => ["smile"]
      rows.push(
        <Guess
          key={i}
          guess={history[i]} // history[i] => ["smile"]
          correctWord={secret} // "tooth"
          submitted={true} //
        />
      );
    } else if (i === history.length) {
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          correctWord={secret}
          submitted={false}
        />
      );
    } else {
      rows.push(
        <Guess key={i} guess="" correctWord={secret} submitted={false} />
      );
    }
  }

  return <div id="board">{rows}</div>;
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
