import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

export default function nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pokemon">Pokémon</Link></li>
                <li><Link to="/berries">Berries</Link></li>
                <li><Link to="/items">Items</Link></li>
                <li><Link to="/region">Region</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
