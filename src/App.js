import React from 'react';
import { render } from 'react-dom';
import Search from './search';

function Pet() {
  return (
      <React.StrictMode>
    <>
      <h1>Welcome</h1>
      <Search />
    </>
      </React.StrictMode>
  );
}

render(<Pet />, document.querySelector('#root'));
