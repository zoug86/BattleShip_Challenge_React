import React, { useContext } from 'react';
import { ShipContext } from '../context/ShipContext';


import '../styles/Cell.css';
let countOne = 0;
let countTwo = 0;
const Cell = ({ x1, y1, x2, y2, shipOne, shipTwo, name }) => {
    const { shipOneCellsClicked, setShipOneCellsClicked,
        shipTwoCellsClicked, setShipTwoCellsClicked, resultOne,
        setResultOne, resultTwo, setResultTwo } = useContext(ShipContext)

    const handleCellOneClick = (e) => {
        if (shipOne) {
            if (countOne < 3 && name === 'playerOne') {
                if (Object.values(shipOne).includes(`${x1}${y1}`)) {
                    e.currentTarget.className = 'ship-cell';
                    countOne++;
                    setShipOneCellsClicked(countOne);

                } else {
                    e.currentTarget.className = 'miss-cell'
                }
            }
            setResultOne(true);
            setResultTwo(false);
        }
        if (shipTwoCellsClicked === 3 || shipOneCellsClicked === 3) {
            setResultOne(true);
            setResultTwo(true);
            return;
        }
    }
    const handleCellTwoClick = (e) => {
        if (shipTwo) {
            if (countTwo < 3 && name === 'playerTwo') {
                if (Object.values(shipTwo).includes(`${x2}${y2}`)) {
                    e.currentTarget.className = 'ship-cell';
                    countTwo++;
                    setShipTwoCellsClicked(countTwo);

                } else {
                    e.currentTarget.className = 'miss-cell'
                }
            }
            setResultTwo(true);
            setResultOne(false);
        }
        if (shipTwoCellsClicked === 3 || shipOneCellsClicked === 3) {
            setResultOne(true);
            setResultTwo(true);
            return;
        }
    }
    return (
        <div className="cell" onClick={!resultOne ? handleCellOneClick : !resultTwo ? handleCellTwoClick : ''}>

        </div>
    )

}

export default Cell;
