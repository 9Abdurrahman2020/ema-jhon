import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className="nav-bar">
            <nav>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Review</a>
                <a href="">Manage Inventory</a>
            </nav>
            <div>
                <input type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
            </div>
        </div>
    );
};

export default Header;