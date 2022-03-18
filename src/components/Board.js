
import Guess from "./Guess";

const Board = () => {
  
  let history = ["booth", "water"];
  let currentGuess = "wat"
  let correctWord = "tooth"

  let rows = [];
  for (let i = 0; i < 6; i++) { // 
    if (i < history.length) {
      rows.push(
        <Guess 
          key={i}
          guess={history[i]}
          correctWord={correctWord}
          submitted={true}
        />);
    } else if(i === history.length){
      rows.push(
        <Guess
          key={i}
          guess={currentGuess}
          correctWord={correctWord}
          submitted={false}
        />
      );
    } else {
      rows.push(
        <Guess 
          key={i} 
          guess=""
          correctWord={correctWord}
          submitted={false} 
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
