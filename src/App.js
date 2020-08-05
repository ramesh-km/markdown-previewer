import React, { useState } from 'react';
import './App.scss';
import { Remarkable } from 'remarkable';
import PLACEHOLDER_TEXT from './app/placeholderText';
import Editor from './app/Editor';
import Previewer from './app/Previewer';

function App() {
  // `text` state variable holds user markdown input
  const [text, setText] = useState(PLACEHOLDER_TEXT);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  const md = new Remarkable({breaks: true});
  const renderedHtml = {
    __html: md.render(text)
  };

  return (
    <div className="App">
    <h1 className='app-title'>Markdown Previewer</h1>
    <div className='panels'>
      <Editor text={text} handleChange={handleTextChange} />
      <Previewer html={renderedHtml} />
    </div>
    </div>
  );
}

export default App;
