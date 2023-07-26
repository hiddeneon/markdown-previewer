import React, { useState } from 'react';
import MarkdownPreview from './MarkdownPreview';
import './App.css';

export function App() {

  const [postContent, setPostContent] = useState('_Hello,_ **Markdown**!');

  return (
    <div className='App'>
      <div className='text-input'>
      <label>Enter some markdown:</label>
        <textarea
          id='editor'
          name='text'
          autoFocus
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
        />
      <hr /> 
      </div>
      <MarkdownPreview markdown={postContent} />
    </div>
  );
}

export default App;
