import React, { useState } from 'react';

import '../styles/Cell.css';
let countOne = 0;
let countTwo = 0;
const Cell = ({ x1, y1, x2, y2, ship, shipOne, shipTwo, name }) => {
    const [cellClicked, setCellClicked] = useState([]);
    const [shipOneCellsClicked, setShipOneCellsClicked] = useState(0);
    const [shipTwoCellsClicked, setShipTwoCellsClicked] = useState(0);

    const handleCellClick = (e) => {
        if (shipOne) {
            if (countOne < 3 && name === 'playerOne') {

                if (Object.values(shipOne).includes(`${x1}${y1}`)) {
                    e.currentTarget.className = 'ship-cell';
                    countOne++;
                    setShipOneCellsClicked(countOne);

                } else {
                    e.currentTarget.className = 'miss-cell'
                }
            } else {
                return;
            }
        }
        if (shipTwo) {
            if (countTwo < 3 && name === 'playerTwo') {
                console.log(e.currentTarget)
                if (Object.values(shipTwo).includes(`${x2}${y2}`)) {
                    e.currentTarget.className = 'ship-cell';
                    countTwo++;
                    setShipTwoCellsClicked(countTwo);

                } else {
                    e.currentTarget.className = 'miss-cell'
                }
                console.log(x2, y2)
            } else {
                return;
            }
        }
    }

    return (
        <div className="cell" onClick={handleCellClick}>

        </div>
    )
}

export default Cell
