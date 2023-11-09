import {useState } from 'react';
import pb from '../lib/pocketbase.js';
import './styles/Post.css';
import { catchError } from 'solid-js';
//import ReturnToHome from '../hooks/RenderHome.jsx';
//import Home from './Home'
//import App from '../App.jsx'
//import BackButton from './BackButton.jsx';


export default function PostText() {

  //text Area state manager
  const [textAreaText, setTextAreaText] = useState('');
  const [titleAreaText, setTitleAreaText] = useState('');
  

  //check for any updates within the text area
  const handleTextAreaChange = (event) => {
    setTextAreaText(event.target.value);
  };

  const handleTitleAreaChange = (event) => {
    setTitleAreaText(event.target.value);
  };

  //handle uploading of Text from textArea
  const handleUploadClick = async () => {
    const data = {
      "Post_Title": titleAreaText,
      "Post_Text": textAreaText,
      "Date": new Date()
    };
    catchError(alert('You should add a title or some text ;)'))
    await pb.collection('posts').create(data);
    
  };




  return (
    <>
    <div id='MakePost'>
      <textarea 
      id='titleAreaText' 
      value={titleAreaText} 
      onChange={handleTitleAreaChange} 
      maxLength='40'
      wrap='off'
      ></textarea>
      <textarea id='PostTextArea' value={textAreaText} onChange={handleTextAreaChange}></textarea>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <button id='upload' onClick={handleUploadClick}><span className="material-symbols-outlined">add</span></button>
    </div>
    </>
  );
}
