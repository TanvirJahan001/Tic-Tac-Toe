import { useEffect, useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningSquares, setWinningSquares] = useState([]);

  useEffect(() => {
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let [a, b, c] of lines) {
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return { winner: squares[a], winningSquares: [a, b, c] };
        }
      }
      return { winner: null, winningSquares: [] };
    };

    const result = calculateWinner(squares);
    setWinner(result.winner);
    setWinningSquares(result.winningSquares);
  }, [squares]);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setWinningSquares([]);
    setIsXNext(true);
  };

  return (
    <div className="container text-center main-container">
      <h1 className="mb-3 text-light fw-bold">Tic Tac Toe</h1>
      <Board
        squares={squares}
        handleClick={handleClick}
        winningSquares={winningSquares}
      />
      <h3 className={`mt-3 ${winner ? "text-success fw-bold" : "text-light"}`}>
        {winner
          ? `🎉 Winner: ${winner} 🎉`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </h3>
      <button className="btn btn-lg mt-3 restart-btn" onClick={restartGame}>
        🔄 Restart Game
      </button>
    </div>
  );
};

export default App;
