import React from 'react';
import '../assets/styles/Header.css';
import Switch from './Switch';

const Header = () => (
    <header className="header">
        <div className="wrapper">
        <div className="header-grid">
            <div>
                <h1>Social Media Dashboard</h1>
                <p className="header-total">Total Followers: 23, 004</p>
            </div>
            <Switch/>
        </div>
        </div>
    </header>

);

export default Header;