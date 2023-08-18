import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Components/logo512.png'; 
import logo1 from '../Components/logo192.png';
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logos">
          <img src={logo1} alt="Logo 1" className="navbar-logo" />
          <img src={logo} alt="Logo 2" className="navbar-logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/members" className="navbar-link">Members</Link>
          </li>
          <li className="navbar-item">
            <Link to="/events" className="navbar-link">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/publications" className="navbar-link">Publications</Link>
          </li>
          <li className="navbar-item">
            <Link to="/interviews" className="navbar-link">Interviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
