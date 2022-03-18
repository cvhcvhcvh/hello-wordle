
import Game from "./components/Game"
import "./App.css";

window.addEventListener("keydown", (e) => {
  console.log(e)
})

function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
