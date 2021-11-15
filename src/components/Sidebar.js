import React from 'react'

import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Game Rules</h1>
            <p>1. Each Board has a hidden ship that is 3 squares long (vertically or horizontally).</p>
            <p>2. Players take alternate roles to attack the other player's board (a player cannot click twice simultaneously on the enemy's board).</p>
            <p>3. If you click on a square that does not have a ship part, that square will trun to blue.</p>
            <p>4. If you click on a square that does have a ship part, that square will trun to red (direct hit!).</p>
            <p>5. The player who hits all three ship parts first will win the game!</p>
        </div>
    )
}

export default Sidebar
