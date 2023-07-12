import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Navbar.css';

function Navbar({ home, calculator, quote }) {
  Navbar.propTypes = {
    home: PropTypes.string.isRequired,
    calculator: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  };
  return (
    <nav>
      <h2 className="logo">Math Magicians</h2>
      <ul className="nav-item">
        <li className="nav-item-list"><NavLink to={home}>Home</NavLink></li>
        <li className="nav-item-list"><NavLink to={calculator}>Calculator</NavLink></li>
        <li className="nav-item-list"><NavLink to={quote}>Quote</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
