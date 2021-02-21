import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode> 
    {/* 배포 버전에서는 strict mode가 활성화 되지 않기때문에 사용자 콘솔에서는 볼 수 없음 */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


