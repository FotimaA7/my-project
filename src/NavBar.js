import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">MyApp</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#profiles">Profiles</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#form">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
