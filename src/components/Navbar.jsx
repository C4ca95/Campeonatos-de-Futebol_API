import React from 'react';
import { Link } from 'react-router-dom';
import './style/global.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/get-all-leagues">Get All Leagues</Link></li>
        <li><Link to="/get-league-by-id">Get League by ID</Link></li>
        <li><Link to="/update-league">Update League</Link></li>
        <li><Link to="/create-league">Create League</Link></li>
        <li><Link to="/delete-league">Delete League</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
