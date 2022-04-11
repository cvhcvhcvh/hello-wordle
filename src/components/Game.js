import { useState, useEffect, useRef, useMemo } from "react";
import { getBgColor, words, getBetterColor } from "../wordleUtils";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";

const Game = ({ secret }) => {
  const [history, setHistory] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  // const [secret, setSecret] = useState("");
  const [win, setWin] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  let loadedRef = useRef(false);

  console.log("secret is", secret);

  // useEffect(() => {
  //   setSecret(word);
  // }, []);

  let bestColors = useMemo(() => {
    let map = new Map();
    for (let guess of history) {
      for (let i = 0; i < guess.length; i++) {
        let letter = guess[i];
        let color = getBgColor(guess, secret, i);
        let storedColor = map.get(letter);
        map.set(letter, getBetterColor(color, storedColor));
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
    let data = JSON.parse(localStorage.getItem("data"));
    // console.log("in loadHistory, secret is", data.secret);

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
    if (win) {
      return;
    }
    if (isAnimating) {
      return;
    }
    for (let word of history) {
      if (word === secret) {
        setWin(true);
      }
    }
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
        return;
      }

      let newHistory = [...history, currentGuess];
      setHistory(newHistory);
      setCurrentGuess("");
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
      setIsAnimating(true);
    } else if (letter === "backspace" || letter === "delete") {
      setCurrentGuess(currentGuess.slice(0, currentGuess.length - 1));
    } else if (/^[a-z]$/.test(letter)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + letter);
      }
    }
  }

  return (
    <div>
      <Header />
      <div id="game">
        <div id="board-container">
          <Board
            history={history}
            currentGuess={currentGuess}
            secret={secret}
          />
        </div>
        <Keyboard
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
