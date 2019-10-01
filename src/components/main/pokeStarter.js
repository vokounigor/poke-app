import React from 'react';
import '../../styles/pokeStarter.css';

export default function pokeStarter({ name, img_name }) {
    return (
        <div className={`poke ${name}`}>
            <img src={img_name} alt={name} />
            <p>{name}</p>
        </div>
    )
}
