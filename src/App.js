import React from 'react';
import './App.css';
import HttpsRedirect from 'react-https-redirect';
import Routes from './routes';

function App() {
  return (
    <HttpsRedirect>
      <Routes />
    </HttpsRedirect>
  )
}

export default App;