import PropTypes from "prop-types";

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className={`btn square btn-lg ${
        isWinningSquare ? "winning-square" : "normal-square"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isWinningSquare: PropTypes.bool,
};

const Board = ({ squares, handleClick, winningSquares }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => handleClick(index)}
          isWinningSquare={winningSquares.includes(index)}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  winningSquares: PropTypes.arrayOf(PropTypes.number),
};

export default Board;
