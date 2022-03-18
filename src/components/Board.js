import Tile from "./Tile";
import Guess from "./Guess";

const Board = () => {

  let history = ["piano", "horse"];
  let currentGuess = "wat"

  let rows = [];
  for (let i = 0; i < 6; i++) {
    if (i < history.length) {
      rows.push(
        <Guess 
          key={i}
          guess={history[i]}
          solved={true}
        />);
    } else if(i === history.length){
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          solved={false}
      />)
    } else {
      rows.push(
        <Guess 
          key={i} 
          guess=""
          solved={false} 
      />);
    }
  }

  return (
    <div id="board"> 
      {rows}
    </div>
  );
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
