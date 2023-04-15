import Square from "./Square"
import { useState } from "react"
import "../css/Board.css"

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState('Next player: X')

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const copySquares = [...squares];
        copySquares[i] = xIsNext ? "X" : "O";
        setXIsNext(!xIsNext);
        setSquares(copySquares);

        const winner = calculateWinner(copySquares);
        if (winner) {
            setStatus('Winner: ' + winner);
        } else if (copySquares.every((square) => square !== null)) {
            setStatus('Draw');
        } else {
            setStatus('Next player: ' + (xIsNext ? 'O' : 'X'));
        }
    }

    const handleReset = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
        setStatus('Next player: X')
    }

    return (
        <>
            <div className="board">
                <div className="status">{status}</div>
                <div className="row">
                    <Square handleClick={() => handleClick(0)} value={squares[0]} />
                    <Square handleClick={() => handleClick(1)} value={squares[1]} />
                    <Square handleClick={() => handleClick(2)} value={squares[2]} />
                </div>
                <div className="row">
                    <Square handleClick={() => handleClick(3)} value={squares[3]} />
                    <Square handleClick={() => handleClick(4)} value={squares[4]} />
                    <Square handleClick={() => handleClick(5)} value={squares[5]} />
                </div>
                <div className="row">
                    <Square handleClick={() => handleClick(6)} value={squares[6]} />
                    <Square handleClick={() => handleClick(7)} value={squares[7]} />
                    <Square handleClick={() => handleClick(8)} value={squares[8]} />
                </div>
            </div>
            <button className="reset-button" onClick={handleReset}>Reset</button>
        </>
    )
}


function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board