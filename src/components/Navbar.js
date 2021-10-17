import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <h2 style={{ color: "#dfdfdf" }}>Cocktail Store</h2>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
