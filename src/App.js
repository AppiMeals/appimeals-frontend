import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/sign-in" component={LoginPage} exact />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
