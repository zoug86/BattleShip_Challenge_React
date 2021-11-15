import React, { useState, createContext } from 'react';

export const ShipContext = createContext();

export const ShipContextProvider = ({ children }) => {
    const [shipOneCellsClicked, setShipOneCellsClicked] = useState(0);
    const [shipTwoCellsClicked, setShipTwoCellsClicked] = useState(0);
    const [resultOne, setResultOne] = useState(false);
    const [resultTwo, setResultTwo] = useState(false);

    return (
        <ShipContext.Provider
            value={{
                shipOneCellsClicked, setShipOneCellsClicked,
                shipTwoCellsClicked, setShipTwoCellsClicked, resultOne,
                setResultOne, resultTwo, setResultTwo
            }}>
            {children}
        </ShipContext.Provider>
    )
}

export default ShipContext;