import React from 'react'
import Cell from './Cell';

import '../styles/Board.css'

const Board = ({ shipOne, shipTwo }) => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="board">
            {arr1.map((a, x) =>
                arr2.map((b, y) =>
                    (Object.values(shipOne).includes(`${a}${b}`) ?
                        <Cell key={x + y} x={x} y={y} ship={true} shipOne={shipOne} /> :
                        <Cell key={x + y} x={x} y={y} ship={false} shipOne={shipOne} />
                    )
                        (Object.values(shipTwo).includes(`${a}${b}`) ?
                            <Cell key={x + y} x={x} y={y} ship={true} shipTwo={shipTwo} /> :
                            <Cell key={x + y} x={x} y={y} ship={false} shipTwo={shipTwo} />
                        )
                ))}
        </div>
    )
}

export default Board
