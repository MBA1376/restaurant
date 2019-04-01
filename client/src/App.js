import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import GeneralPage from './components/layout/GeneralPage';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={GeneralPage} />
            {/* <GeneralPage /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
