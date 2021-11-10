// starting point of any react application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // to use link , switch and route this must be imported

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root'));
