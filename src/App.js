import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Footer/Footer';

//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Route path="/" component={HomePage} exact/> 
            <Route path="/sign-in" component={LoginPage} exact />

            <Footer />            

          </div>
        </div>
      </Router>


    );
  }
}



export default App;
