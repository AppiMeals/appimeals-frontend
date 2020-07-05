import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import BrowseRecipes from './Pages/BrowseRecipes/BrowseRecipes';
import Registration from './Pages/Registration/Registration';
import SignInPage from './Pages/SignInPage/SignInPage';
import MyMealShop from './Pages/MyMealShop/MyMealShop';
import SuperMarketLogIn from './Pages/SuperMarketLogIn/SuperMarketLogIn';
import MyMealChoices from './Pages/MyMealChoices/MyMealChoices';


import LoginExample from './Pages/LoginExample/LoginExample';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
            <Route path="/BrowseRecipes" component={BrowseRecipes} exact />
            <Route path="/LoginExample" component={LoginExample} exact />
            <Route path="/MyMealShop" component={MyMealShop} exact />
            <Route path="/SuperMarketLogIn" component={SuperMarketLogIn} exact />
            <Route path="/MyMealChoices" component={MyMealChoices} exact />
          </div>
          <Footer /> 
        </div>
      </Router>
    );
  }
}



export default App;
