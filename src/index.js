import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// there are many types of router types,for eg: 
//1) HashRouter - it includes # in the url after slash and then the path.
//2) MemoryRouter - it is used for testing purpose ,
//3) StaticServerRouter - mentioning the default location in the router
//4) HistoryRouter - it is used for the browser usehistory like using forward arrow and backward arrow 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

