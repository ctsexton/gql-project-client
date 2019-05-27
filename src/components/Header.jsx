import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/"><button className="button-link">Select A Song</button></Link>
      <Link to="/songs"><button className="button-link">All Songs</button></Link>
    </div>
  )
}

export default Header;
