import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/"><button className="button-link">Song Details</button></Link>
      <Link to="/add"><button className="button-link">Add Song</button></Link>
      <Link to="/songs"><button className="button-link">All Songs</button></Link>
      <Link to="/artists"><button className="button-link">All Artists</button></Link>
    </div>
  )
}

export default Header;
