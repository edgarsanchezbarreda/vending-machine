import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to='/chips'>
                Chips
            </NavLink>
            <NavLink exact to='/soda'>
                Soda
            </NavLink>
            <NavLink exact to='/candy'>
                Candy
            </NavLink>
        </nav>
    );
};
