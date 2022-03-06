import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import Header from './components/Header';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    {/* <Header/> */}
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

