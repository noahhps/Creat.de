import React, { useState } from 'react';
import NavBar from '../src/actions/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const App = () => {
  const [navVisible, setNavVisible] = useState(true);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Router>
      <div>
        <button onClick={toggleNavVisibility}>
          {navVisible ? 'Hide Navbar' : 'Show Navbar'}
        </button>

        {navVisible && <NavBar />}
      </div>
    </Router>
  );
};

export default App;
 