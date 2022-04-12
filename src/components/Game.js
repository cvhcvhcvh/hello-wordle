import { useState, useEffect, useRef, useMemo } from "react";
import { getBgColor, words, getBetterColor, congrats } from "../wordleUtils";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Header from "./Header";
import Alert from "./Alert";

const Game = ({ secret }) => {
  const [history, setHistory] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [win, setWin] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("");

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
    let savedHistory = loadHistory();
    if (savedHistory) {
      setHistory(savedHistory);
    }
  }, []);

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
        setTimeout(() => {
          setAlert(true);
          setType(congrats);
        }, 2000);
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
      // if (win) {
      //   setAlert(true);
      //   setType("Phew");
      // }
      if (currentGuess.length < 5) {
        setAlert(true);
        setType("Not enough letters");
        setTimeout(() => {
          setAlert(false);
        }, 1000);
        return;
      }
      if (!words.includes(currentGuess)) {
        setAlert(true);
        setType("Not in word list");
        setTimeout(() => {
          setAlert(false);
        }, 1000);
        return;
      }
      if (history.length === 5 && currentGuess !== secret) {
        setAlert(true);
        setType(secret);
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
      <div id="game">
      <Header />
        {alert ? <Alert alert={alert} type={type} /> : ""}
        <div id="board-container">
          <Board
            history={history}
            currentGuess={currentGuess}
            secret={secret}
            alert={alert}
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
