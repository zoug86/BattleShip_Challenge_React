import React from 'react';
import PlayerOne from '../components/PlayerOne';
import PlayerTwo from '../components/PlayerTwo';
import Result from '../components/Result';

import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">BattleShip Game</h1>
            <Result />
            <PlayerOne />
            <PlayerTwo />

        </div>
    )
}

export default Home
