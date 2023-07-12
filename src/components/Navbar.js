import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ home, calculator, quote }) {
  return (
    <nav>
      <h2 className="logo">Math Magicians</h2>
      <ul className="nav-item">
        <li className="nav-item-list"><Link to={home}>Home</Link></li>
        <li className="nav-item-list"><Link to={calculator}>Calculator</Link></li>
        <li className="nav-item-list"><Link to={quote}>Quote</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
