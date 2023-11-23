import "./App.css";
import Box from "./components/Box";
import winner from "./modules/winner";
import { useState } from "react";

const App = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  const handleClick = (e) => {
    if (winner(square) || square[e]) {
      return;
    }

    const newSquare = square.slice();
    if (isXNext) {
      newSquare[e] = "X";
    } else {
      newSquare[e] = "O";
    }
    setIsXNext(!isXNext);
    setSquare(newSquare);
  };

  const win = winner(square);
  let status;
  if (win) {
    status = "Winner " + win;
  } else {
    status = " Next Player " + (isXNext ? "X" : "O");
  }

  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="row">
        <Box value={square[0]} onSquare={() => handleClick(0)} />
        <Box value={square[1]} onSquare={() => handleClick(1)} />
        <Box value={square[2]} onSquare={() => handleClick(2)} />
      </div>
      <div className="row">
        <Box value={square[3]} onSquare={() => handleClick(3)} />
        <Box value={square[4]} onSquare={() => handleClick(4)} />
        <Box value={square[5]} onSquare={() => handleClick(5)} />
      </div>
      <div className="row">
        <Box value={square[6]} onSquare={() => handleClick(6)} />
        <Box value={square[7]} onSquare={() => handleClick(7)} />
        <Box value={square[8]} onSquare={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default App;
