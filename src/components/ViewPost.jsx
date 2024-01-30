import { useState, useEffect} from "react";
import '../styles/ViewPost.css';
import client from '../lib/pocketbase';
//import PostText from './CreatePost';
import pb from '../lib/pocketbase'


export default function PostFunction() {
  const [posts, setPosts] = useState([])

  // figure out how to add bookmarking latr
  //const [bookmarked, setBookMarked] = useState(False)
  
    
  //load data from database, and then render using useEffect on page load
  useEffect( () => {
    client
      .collection("posts")
      .getFullList()
      .then((res) => setPosts(res));
  }, [])

    
    //async function record() { await pb.collection('posts').update('Book_Mark', true); }
    


  return (
    <>

    
    

      {posts.map((posts) => (
      <div id='PostViewDiv' key={posts.id}>
        <h3 id='PostTitle'>{posts.Post_Title}</h3>
        <p id= 'PostText'>{posts.Post_Text}</p>
        {/*<button id='BookMark' onChange={record()}>BookMark</button>*/}
        
        
        </div>
      ))}
      
    
  </>
  );

}