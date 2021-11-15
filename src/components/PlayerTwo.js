import React from 'react'
import Cell from './Cell';
import { v4 as uuidv4 } from 'uuid';

const PlayerTwo = () => {
    const shipTwo = { cell1: '35', cell2: '45', cell3: '55' }
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <h2>Player 2</h2>
            <div className="board">
                {arr1.map((a, x) =>
                    arr2.map((b, y) =>
                    (Object.values(shipTwo).includes(`${a}${b}`) ?
                        <Cell key={uuidv4()} x2={x} y2={y} ship={true} shipTwo={shipTwo} name='playerTwo' /> :
                        <Cell key={uuidv4()} x2={x} y2={y} ship={false} shipTwo={shipTwo} name='playerTwo' />
                    )
                    ))}
            </div>
        </div>
    )
}

export default PlayerTwo
