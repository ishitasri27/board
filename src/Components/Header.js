import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Components/logo512.png'; 
import logo1 from '../Components/logo192.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
        <img src={logo1} alt="College Logo" width="50" height="50" />
          <img src={logo} alt="Editorial Board Logo" width="50" height="50" /> 
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/interviews">Interviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
