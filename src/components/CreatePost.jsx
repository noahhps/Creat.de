import {useState } from 'react';
import pb from '../lib/pocketbase.js';
import './styles/Post.css';
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
      <button id='upload' onClick={handleUploadClick}>upload</button>
    </div>
    </>
  );
}
