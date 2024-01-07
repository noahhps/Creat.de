//import PostText from './Post'
//import ViewPost from './ViewPost'
import Home from './Home'
//import BackButton from "BackButton";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './CreatePost'
import UserProfile from './Account/UserProfile'
import Shelf from './Shelf'
import './styles/NavBar.css'

export default function NavBar() {
    return (
      <>
      
  <Router>
  <nav id='Navigator'>
    <ul>
      <li id='Home'><Link to="/">🏠 Home</Link></li>
      <li id='Post'><Link to="/NewPost">📝 write a new Post</Link></li>
      <li id='Shelf'><Link to="/Shelf">📚 Shelf</Link></li>
      <li id='MyProfile'><Link to="/Me">🤙 Me</Link></li>
    </ul>
  </nav>
  
  
  
  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/NewPost' element={<Post />} />
    <Route path='/Shelf' element={<Shelf />} />
    <Route path='/Me' element={<UserProfile />}/>
  </Routes>
  
  
      </Router>
      
      </>
    );
  }
  