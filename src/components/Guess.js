
import Tile from "./Tile";

const Guess = ({ guess, submitted, current, secret, getBgColor }) => {
  let tiles = [];
  for (let i = 0; i < 5; i++) {
    tiles.push(
      <Tile
        key={i}
        guess={guess}
        index={i}
        submitted={submitted}
        // getBgColor={getBgColor}
        secret={secret}
        current={current}
      />
    );
  }

  return <div className="board row">{tiles}</div>;
};

export default Guess;
