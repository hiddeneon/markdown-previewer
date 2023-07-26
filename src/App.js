import React, { useState } from 'react';
import MarkdownPreview from './MarkdownPreview';
import './App.css';

export function App() {

  const placeholder = "# Willkommen bei meine Site\n## Was willst du von ihrer Benutzung\nDoch ich habe eine [Link](https://freecodecamp.com)\nInline code example: `<!DOCTYPE>`\n```\n//multiline code:\nfunction sum(a, b) => {\nreturn a + b;\n}\n```\n- List item\n  - item1\n  - second item\n    - and one more\n    - finally! the last...\n\n### Here's how blockquotes look like:\n> I am a blockquote!\n\n**That's bolded text**\n### An example of image:\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')";

  const [postContent, setPostContent] = useState(placeholder);

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
