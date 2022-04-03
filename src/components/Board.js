
import Guess from "./Guess";

const Board = ({
  history, 
  currentGuess, 
  secret, 
  // getBgColor
}) => {
 
  let rows = [];
                                // history ["snake", "hello"]
  for (let i = 0; i < 6; i++) { // i = 1
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

// const Grid = () => {
//   const emptyTiles = Array(30).fill("")

//   return (
//       <div id="grid">
//         <div className="grid-row">
//           {emptyTiles.map((value, i) => (
//             <Tile key={i} value={value}/>
//           ))}
//         </div>
//       </div>
//   )
// }

// export default Grid
