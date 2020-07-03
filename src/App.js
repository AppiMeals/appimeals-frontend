import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Registration from './Pages/Registration/Registration';
import SignInPage from './Pages/SignInPage/SignInPage';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/SignIn" component={SignInPage} exact />
            <Route path="/SignUp" component={Registration} exact />
          </div>
          <Footer /> 
        </div>
      </Router>
    );
  }
}



export default App;
