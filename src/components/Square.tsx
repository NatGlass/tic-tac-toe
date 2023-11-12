type Value = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: Value) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
