import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import BrowseRecipes from './Pages/BrowseRecipes/BrowseRecipes';
import Registration from './Pages/Registration/Registration';
import MyMealShop from './Pages/MyMealShop/MyMealShop';
import SuperMarketLogIn from './Pages/SuperMarketLogIn/SuperMarketLogIn';
import MyMealsHub from './Pages/MyMealsHub/MyMealsHub';
import MyMealChoices from './Pages/MyMealChoices/MyMealChoices';

import Login from "./Components/Login/Login";
import Logout from "./Components/Login/Logout";

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import './App.css';


// let authUser = "";
// if (JSON.parse(sessionStorage.getItem('AppiMealsAuthUser') === null)){
//   authUser = null;
// }
// else {
//   console.log("AppiMealsAuthUser " + JSON.parse(sessionStorage.getItem('AppiMealsAuthUser')));
//   authUser = 1;
// }


class App extends Component {
  

  render() {

    return (
      <>     
          <div className="app-body">
            <div className="main-wrapper">
            <Router>
              <NavBar />
              <div className="content">
              <Router>
                <Route path="/" component={HomePage} exact />
                <Route path="/SignIn" component={Login} exact />
                <Route path="/SignOut" component={Logout} exact />

                <Route path="/SignUp" component={Registration} exact />

                <Route path="/BrowseRecipes" component={BrowseRecipes} exact />

                <Route path="/MyMealShop" component={MyMealShop} exact />
                <Route path="/SuperMarketLogIn" component={SuperMarketLogIn} exact />
                <Route path="/MyMealsHub" component={MyMealsHub} exact />
                <Route path="/MyMealChoices" component={MyMealChoices} exact />
                </Router>
              </div>
              <Footer />
              </Router>
            </div>
          </div>
      </>
    );
  }
}

export default App;
