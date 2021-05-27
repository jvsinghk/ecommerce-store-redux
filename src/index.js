import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
// Import the store here.

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App 
      
    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.