import "./App.css";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="App" style={{ touchAction: "manipulation" }}>
      <Game />
    </div>
  );
}
