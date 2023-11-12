import { useState } from "react";
import Square from "./Square";

const Board = () => {
  // Create an array of 9 elements and set their initial value to null
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Determines which players turn it is (x goes first)
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  winner
    ? (status = "Winner: " + winner)
    : (status = "Next player: " + (xIsNext ? "X" : "O"));

  function handleClick(index: number) {
    // Prevent the value of a square being overwritten if it already has a value
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    xIsNext ? (nextSquares[index] = "X") : (nextSquares[index] = "O");

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};

export default Board;

function calculateWinner(squares: number[]) {
  const possibleWinConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < possibleWinConditions.length; i++) {
    const [a, b, c] = possibleWinConditions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
