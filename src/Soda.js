import React from 'react';
import { NavLink } from 'react-router-dom';
export const Soda = () => {
    return (
        <div>
            <h1>Soda</h1>
            <img src='https://media.giphy.com/media/VO2MiYWK4SRsk/giphy.gif' />
            <h3>
                <NavLink to='/'>Home</NavLink>
            </h3>
        </div>
    );
};
