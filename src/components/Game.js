import {useState, useEffect} from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = () => {
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
  let [currentGuess, setCurrentGuess] = useState("");
  let secret = "thing";
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

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
  return (
    <>
      <Header />
      <div id="game">
        <div id="board-container">
          <Board 
            history={history}
            currentGuess={currentGuess}
            secret={secret}
          />
        </div>
        <Keyboard />
      </div>
    </>
  );
};

export default Game;
