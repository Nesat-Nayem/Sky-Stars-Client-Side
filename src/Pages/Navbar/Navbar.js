import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
      <div className="navbar custom-container">
        <div className="logo">
          <h1>Sky <span>Stars</span></h1>
        </div>
        <nav>
          <ul className='menu'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/'>Service</NavLink>
            </li>
            <li>
              <NavLink to='/'>About</NavLink>
            </li>
            <li>
              <NavLink to='/'>Dashboard</NavLink>
            </li>
          </ul>
          <ul className='login-regi'>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;