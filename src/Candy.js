import React from 'react';
import { NavLink } from 'react-router-dom';
export const Candy = () => {
    return (
        <div>
            <h1>Candy</h1>
            <img src='https://media.giphy.com/media/LqgrRiLbCwrCcopc79/giphy.gif' />
            <h3>
                <NavLink to='/'>Home</NavLink>
            </h3>
        </div>
    );
};
