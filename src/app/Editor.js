import React from 'react';

function Editor({text, handleChange}) {
  return (
    <textarea
    id='editor'
    value={text}
    onChange={handleChange}
    className='panel editor-panel'
  >
    </textarea>
  );
}

export default Editor;