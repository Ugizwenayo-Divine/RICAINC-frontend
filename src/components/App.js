import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'
        integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ'
        crossOrigin='anonymous'
      ></link>
      <Routes />
    </Router>
  );
}

export default App;
