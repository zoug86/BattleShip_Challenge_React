import React from 'react'
import Cell from './Cell';

import '../styles/PlayerOne.css';

const PlayerOne = () => {
    const shipOne = { cell1: '11', cell2: '12', cell3: '13' }//, cell4: '64', cell5: '65', cell6: '66' };
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="playerOne">
            <h2>Player 1's Board</h2>
            <div className="board">
                {arr1.map((a, x) =>
                    arr2.map((b, y) =>
                    (Object.values(shipOne).includes(`${a}${b}`) ?
                        <Cell key={x + y} x1={x} y1={y} ship={true} shipOne={shipOne} name='playerOne' /> :
                        <Cell key={x + y} x1={x} y1={y} ship={false} shipOne={shipOne} name='playerOne' />
                    )
                    ))}
            </div>
        </div>
    )
}

export default PlayerOne
