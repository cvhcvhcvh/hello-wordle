import Guess from "./Guess";

const Board = ({ history, currentGuess, secret }) => {
  let rows = [];

  for (let i = 0; i < 6; i++) {
    if (i < history.length) {
      rows.push(
        <Guess
          key={i}
          guess={history[i]}
          secret={secret} //
          submitted={true} //
        />
      );
    } else if (i === history.length) {
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          secret={secret}
          submitted={false}
          current={true}
        />
      );
    } else {
      rows.push(<Guess key={i} guess="" secret={secret} submitted={false} />);
    }
  }

  return <div id="board">{rows}</div>;
};

export default Board;
