import Guess from "./Guess";

const Board = ({
  history,
  currentGuess,
  secret,
  // getBgColor
}) => {
  let rows = [];
  console.log("history is", history)

  for (let i = 0; i < 6; i++) {
    // i = 1
    if (i < history.length) {
      rows.push(
        <Guess
          key={i}
          guess={history[i]}
          secret={secret} //
          // getBgColor={getBgColor}
          submitted={true} //
        />
      );
    } else if (i === history.length) {
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          secret={secret}
          // getBgColor={getBgColor}
          submitted={false}
          current={true}
        />
      );
    } else {
      rows.push(
        <Guess
          key={i}
          guess=""
          secret={secret} //
          // getBgColor={getBgColor}
          submitted={false}
        />
      );
    }
  }

  return <div id="board">{rows}</div>;
};

export default Board;

