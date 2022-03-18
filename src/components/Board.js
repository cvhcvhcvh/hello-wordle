import Tile from "./Tile";
import Guess from "./Guess";

const Board = () => {
  let guessRows = [];
  for (let i = 0; i < 6; i++) {
    guessRows.push(
      <Guess key={i}

      />);
    //
   
  }

  return (
    <div id="board"> 
      {guessRows}
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
