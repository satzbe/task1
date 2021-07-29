import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { State } from './Context/Context';
ReactDOM.render(
  <State>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </State>,
  document.getElementById('root')
);
