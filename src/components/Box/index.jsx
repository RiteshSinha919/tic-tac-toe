import './index.css'

const Box = (props) => {
  const { value, onSquare } = props;
  return (
    <button className="box" onClick={onSquare}>
      {value}
    </button>
  );
};

export default Box;
