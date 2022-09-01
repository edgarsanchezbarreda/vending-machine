import React from 'react';
import { NavLink } from 'react-router-dom';

export const Chips = () => {
    return (
        <div>
            <h1>Chips</h1>
            <img src='https://media.giphy.com/media/X1FeBsAYMQiwo/giphy.gif' />
            <h3>
                <NavLink exact to='/'>
                    Home
                </NavLink>
            </h3>
        </div>
    );
};
