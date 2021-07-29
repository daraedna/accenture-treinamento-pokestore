import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return(
    <BrowserRouter>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;