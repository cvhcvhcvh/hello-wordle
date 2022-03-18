
import Game from "./components/Game"
import "./App.css";

window.addEventListener("keydown", (e) => {
  console.log(e)
})

let list = document.querySelectorAll("[data-letter='inactive']")
let arrayList = [...list]
console.log(arrayList)

function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
