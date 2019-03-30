import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import GeneralPage from './components/layout/GeneralPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <GeneralPage />
      </div>
    );
  }
}

export default App;
