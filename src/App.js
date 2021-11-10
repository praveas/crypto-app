//rafce shortcut snippet from ES7 React Snippet
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components'; // one line trick, exporting from index.js

const App = () => {
  return (
    <div className = "app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
