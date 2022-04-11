import Game from "./components/Game";
import "./App.css";
import {secret} from "./wordleUtils"

function App() {
  return <Game secret={secret}/>;
}

export default App;
