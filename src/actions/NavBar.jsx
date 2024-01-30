import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Post from './CreatePost';
import UserProfile from '../components/Account/UserProfile';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div id='Navigator'>
      <ul>
        <li id='Home'><Link to="/">🏠 Home</Link></li>
        <li id='Post'><Link to="/NewPost">📝 Write a New Post</Link></li>
        <li id='Shelf'><Link to="/Shelf">📚 Shelf</Link></li>
        <li id='MyProfile'><Link to="/Me">🤙 Me</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NewPost' element={<Post />} />
        <Route path='/Me' element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default NavBar;
