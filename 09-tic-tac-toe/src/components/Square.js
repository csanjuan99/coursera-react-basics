import '../css/Square.css';

const Square = ({ value, handleClick }) => {

    return <button onClick={handleClick} className="square">{value}</button>;
}

export default Square;