import react from "react";
import { useState } from "react";
import pb from "../lib/pocketbase";
import posts from "../components/ViewPost";

export default function bookmark() {
const[bookMarked, setBookMarked] = useState(false)

    const handleBookMarkChange = (event) => {
        setBookMarked(event.target.value);
    }

    
    const handleBookMark = async () => {
      const boolChange = {
        'Book_Mark': true
      }; 
      try {
      await pb.collection('posts').update(posts.id, boolChange);
      } catch {
        throw(alert('an error has occured'))
      }
  };
  
}
