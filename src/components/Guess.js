
import Tile from "./Tile";

const Guess = ({ guess, submitted, current, secret, alert }) => {
  let tiles = [];
  for (let i = 0; i < 5; i++) {
    tiles.push(
      <Tile
        key={i}
        guess={guess}
        index={i}
        submitted={submitted}
        secret={secret}
        current={current}
        alert={alert}
      />
    );
  }

  return <div className="board row">{tiles}</div>;
};

export default Guess;
