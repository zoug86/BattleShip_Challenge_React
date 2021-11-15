import React, { useContext } from 'react'
import { ShipContext } from '../context/ShipContext';

import '../styles/Result.css';

const Result = () => {
    const { shipOneCellsClicked, shipTwoCellsClicked } = useContext(ShipContext)

    function refreshPage() {
        window.location.reload(false);
    }
    if (shipOneCellsClicked === 3) {
        return (
            <div className='result'>
                <h1>Player 2 Wins!😄</h1>
                <button className='reset' onClick={refreshPage}>New Game</button>
            </div>
        )
    }
    if (shipTwoCellsClicked === 3) {
        return (
            <div className='result'>
                <h1>Player 1 Wins!😄</h1>
                <button className='reset' onClick={refreshPage}>New Game</button>
            </div>
        )
    }
    return null;

}

export default Result
