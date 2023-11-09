//import { useState, useEffect } from "react";
import './styles/ViewPost.css';
import { useState } from 'react';
import client from '../lib/pocketbase';
import { useEffect } from 'react';
//import PostText from './CreatePost';
//import axios from 'axios';

export default function PostFunction() {
  const [posts, setPosts] = useState([])

  //load data from database, and then render using useEffect on page load
  useEffect( () => {
    client
      .collection("posts")
      .getFullList()
      .then((res) => setPosts(res));
  }, [])


  return (
    <>
    
      {posts.map((posts) => (
      <div id='PostViewDiv' key={posts.id}>
        
        <h3 id='PostTitle'>{posts.Post_Title}</h3>
        <p id= 'PostText'>{posts.Post_Text}</p>
        </div>
      ))}
      
    
  </>
  );

}