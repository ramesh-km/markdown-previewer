import React from 'react';

function Previewer({html}) {
  return (
    <section
      id='preview'
      dangerouslySetInnerHTML={html}
      className='panel preview-panel'
    >
    </section>
  );
}

export default Previewer;