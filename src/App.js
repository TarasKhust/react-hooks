import React from 'react';
import { render } from 'react-dom';
import Search from './search';

function Pet() {
  return (
    <>
      <h1>Welcome</h1>
      <Search />
    </>
  );
}

render(<Pet />, document.querySelector('#root'));
