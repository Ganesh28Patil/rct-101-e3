import React from "react";

import {Link} from 'react-router-dom';
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const handleClick = () =>{}
  return (
    <div data-cy="navbar">
      <Link  data-cy="navbar-home-link" to='/'>Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{0
        /* count here */
      
      }</span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Navbar;
