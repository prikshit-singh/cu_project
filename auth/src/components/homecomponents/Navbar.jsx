import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css';

function Navbar(props) {
    return (
        <div>
            <div className="mainNav">
                <li><NavLink className='link' to="/" style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'white'
                })}>
                    Home
                </NavLink></li>
                <li><NavLink className='link' to="/dashboard" style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'white'
                })}>
                    Dashboard
                </NavLink></li>
                <li><NavLink className='link' to="/login" style={({ isActive }) => ({
                    color: isActive ? 'blue' : 'white'
                })}>
                    Login
                </NavLink></li>
            </div>
        </div>
    );
}

export default Navbar;