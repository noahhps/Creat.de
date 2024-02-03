import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div id='Navigator'>
      <ul>
        <li id='Home'><Link to="/">📚 Shelf</Link></li>
        <li id='Post'><Link to="/NewPost">📝 Write a New Post</Link></li>
        <li id='MyProfile'><Link to="/Me">🤙 Me</Link></li>
      </ul>

      
    </div>
  );
};

export default NavBar;
