import { useState, useEffect } from "react";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = () => {
  let [history, setHistory] = useState([]);
  let [currentGuess, setCurrentGuess] = useState("");
  let [secret, setSecret] = useState("");
  let [wordList, setWordList] = useState([]);

  // function getRandomIdx() {
  //   let idx = Math.floor(Math.random() * wordList.length)
  //   return idx
  // }

  const getWords = () => {
    fetch("words.json", {})
      .then(function (response) {
        return response.json();
      })
      .then(function (words) {
        return setWordList(words);
      });
    // const randomIdx = Math.floor(Math.random() * wordList.length)
    // const word = wordList[randomIdx];
  };
  console.log(wordList);

  useEffect(() => {
    getWords();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function handleKeyDown(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }
    handleKey(e.key);
  }

  function handleKey(e) {
    if (history.length === 6) {
      return;
    }
    let letter = e.toLowerCase();

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
    } else if (letter === "backspace" || letter === "delete") {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + letter);
      }
    }
  }
  // function getBgColor(guess, secret) {
  //   for (let i = 0; i < guess.length; i++){
  //     let correctLetter = secret[i];
  //     let attemptLetter = guess[i];
  //     if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
  //       return "wrong";
  //     }
  //     if (correctLetter === attemptLetter) {
  //       return "correct";
  //     }
  //     return "present";
  //   }
  // }
  // let color = getBgColor(currentGuess, secret);
  return (
    <>
      <Header />
      <div id="game">
        <div id="board-container">
          <Board
            history={history}
            currentGuess={currentGuess}
            secret={secret}
            // getBgColor={getBgColor}
          />
        </div>
        <Keyboard
          // getBgColor={getBgColor}
          history={history}
          currentGuess={currentGuess}
          secret={secret}
          onKey={handleKey}
        />
      </div>
    </>
  );
};

export default Game;
