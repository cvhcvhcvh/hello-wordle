import { useState, useEffect, useRef, useMemo } from "react";
import { getBgColor, words, notInWordList } from "../wordleUtils";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = () => {
  let [history, setHistory] = useState([]);
  let [currentGuess, setCurrentGuess] = useState("");
  let [secret, setSecret] = useState("horse");
  let loadedRef = useRef(false);

  // const words = ["smile", "happy", "hello", "world", "horse", "world", "snake", "patio", "piano", "frank"];

  function getBetterColor(a, b) {
    let GREY = "#3A3A3C";
    let GREEN = "#538d4e";
    let YELLOW = "#b59f3b";

    if (a === GREEN || b === GREEN) {
      return GREEN;
    }

    if (a === YELLOW || b === YELLOW) {
      return YELLOW;
    }
    return GREY;
  }

  let bestColors = useMemo(() => {
    // guess = "horse", secret = "horse"
    let map = new Map(); // {}
    for (let guess of history) {
      // horse
      for (let i = 0; i < guess.length; i++) {
        // i = 0
        let letter = guess[i]; // h
        let color = getBgColor(guess, secret, i); // grey
        let storedColor = map.get(letter); // grey
        map.set(letter, getBetterColor(color, storedColor)); // o => (grey, grey)
        // map { t => grey, o => yellow }
      }
    }
    return map;
  }, [history]);

  useEffect(() => {
    if (loadedRef.current) {
      return;
    }
    loadedRef.current = true;
    let savedHistory = loadHistory();
    if (savedHistory) {
      setHistory(savedHistory);
    }
  });

  useEffect(() => {
    saveHistory();
  }, [history]);

  function loadHistory() {
    let data;
    try {
      data = JSON.parse(localStorage.getItem("data"));
    } catch {}
    if (data != null) {
      if (data.secret === secret) {
        return data.history;
      }
    }
  }

  function saveHistory() {
    let data = JSON.stringify({
      secret,
      history,
    });
    try {
      localStorage.setItem("data", data);
    } catch {}
  }

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
      if (!words.includes(currentGuess)) {
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

  // let color = getBgColor(currentGuess, secret);
  return (
    <div>
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
          bestColors={bestColors}
        />
      </div>
    </div>
  );
};

export default Game;
