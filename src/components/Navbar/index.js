import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
        <Link to='/'>
            Home
          </Link>
          <Link to='/Page'>
            Page
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;