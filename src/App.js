import React, { Component } from 'react';
import './App.css';

//importing Views
//import HomePage from './views/homepage/homepage.js';
import Login from './views/login/login.js';

//importing Router package
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Login} />
      </div>
      </Router>
    );
  }
}

export default App;
