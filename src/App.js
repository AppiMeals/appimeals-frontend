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

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import './App.css';


class App extends Component {
  

  render() {

    return (
      <>
        {/* <AmplifySignOut /> */}

        {/* <LinkContainer to="/signup">
          <NavItem>Signup</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem>Login</NavItem>
        </LinkContainer> */}

        <Router>
          <div className="App">
          <NavBar />
          <div className="page-body">
            <Route path="/" component={HomePage} exact />
            {/* <Route path="/SignIn" component={SignInPage} exact /> */}
            <Route path="/SignIn" component={Login} exact />

            <Route path="/SignUp" component={Registration} exact />

            {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}> */}
            <Route path="/BrowseRecipes" component={BrowseRecipes} exact />
            {/* </AppContext.Provider> */}

            <Route path="/MyMealShop" component={MyMealShop} exact />
            <Route path="/SuperMarketLogIn" component={SuperMarketLogIn} exact />
            <Route path="/MyMealsHub" component={MyMealsHub} exact />
            <Route path="/MyMealChoices" component={MyMealChoices} exact />
          </div>
          <Footer />
        </div>
        </Router>
      </>
    );
  }
}

export default App;