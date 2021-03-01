import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>, 
  // 콘솔에서 2번씩 호출해서 확인함.
  document.getElementById('root')
);