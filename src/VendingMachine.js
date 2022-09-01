import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Chips } from './Chips';
import { Soda } from './Soda';
import { Candy } from './Candy';
import { Home } from './Home';

export const VendingMachine = () => {
    return (
        <main>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/chips' element={<Chips />} />
                    <Route exact path='/soda' element={<Soda />} />
                    <Route exact path='/candy' element={<Candy />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};
