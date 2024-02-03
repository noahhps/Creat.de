import React, { useState } from 'react';
import NavBar from '../src/actions/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Post from './actions/CreatePost';

const App = () => {
  const [navVisible, setNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Router>
      
      <div id='navBarToggle'>
        <button onClick={toggleNavVisibility}>
          {navVisible ? '✨ Nav Mode' : '📚 Reading Mode'}
        </button>

        {navVisible && <NavBar />}
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NewPost' element={<Post />} />

      </Routes>
    </Router>
  );
};

export default App;
 