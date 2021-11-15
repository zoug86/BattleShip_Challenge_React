import React from 'react';
import PlayerOne from '../components/PlayerOne';
import PlayerTwo from '../components/PlayerTwo';

import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1>BattleShip Game</h1>
            <PlayerOne />
            <PlayerTwo />
        </div>
    )
}

export default Home
