import Key from "./Key";

const Keyboard = ({ history, currentGuess, secret, onKey, bestColors }) => {
  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["z", "x", "c", "v", "b", "n", "m"];

 
  return (
    <div id="keyboard">
      <div className="keyboard row">
        {keys1.map((letter, i) => (
          <Key
            key={letter}
            value={letter}
            history={history}
            currentGuess={currentGuess}
            secret={secret}
            index={i}
            onKey={onKey}
            color={bestColors.get(letter)}
          />
        ))}
      </div>
      <div className="keyboard row">
        <div className="spacer half"></div>
        {keys2.map((letter, i) => (
          <Key
            key={letter}
            value={letter}
            history={history}
            currentGuess={currentGuess}
            secret={secret}
            index={i}
            onKey={onKey}
            color={bestColors.get(letter)}
          />
        ))}
        <div className="spacer half"></div>
      </div>
      <div className="keyboard row">
        <Key key="enter" className="one-and-a-half" onKey={onKey} value="enter">
          enter
        </Key>
        {keys3.map((letter, i) => (
          <Key
            key={letter}
            value={letter}
            history={history}
            currentGuess={currentGuess}
            secret={secret}
            index={i}
            onKey={onKey}
            color={bestColors.get(letter)}
          />
        ))}
        <Key
          key="delete"
          className="one-and-a-half"
          onKey={onKey}
          value="delete"
        >
          delete
        </Key>
      </div>
    </div>
  );
};

export default Keyboard;

