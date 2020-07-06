
import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './config';
import { AppContext } from "./libs/contextLib";
//import {LinkContainer, NavItem} from 'react-router-bootstrap';

import HomePage from './Pages/HomePage/HomePage';
import BrowseRecipes from './Pages/BrowseRecipes/BrowseRecipes';
import Registration from './Pages/Registration/Registration';
//import SignInPage from './Pages/SignInPage/SignInPage';
import MyMealShop from './Pages/MyMealShop/MyMealShop';
import SuperMarketLogIn from './Pages/SuperMarketLogIn/SuperMarketLogIn';
import MyMealChoices from './Pages/MyMealChoices/MyMealChoices';

import Login from "./Components/Login/Login";

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

import './App.css';


class App extends Component {
  

  render() {

    const [isAuthenticated, userHasAuthenticated] = useState(false);



    Amplify.configure({
      Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
      },
      Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
      },
      API: {
        endpoints: [
          {
            name: "notes",
            endpoint: config.apiGateway.URL,
            region: config.apiGateway.REGION
          },
        ]
      }
    });

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
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            {/* <Route path="/SignIn" component={SignInPage} exact /> */}
            <Route path="/SignIn" component={Login} exact />

            <Route path="/SignUp" component={Registration} exact />

            {/* <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}> */}
              <Route path="/browse-recipes" component={BrowseRecipes} exact />
            {/* </AppContext.Provider> */}
            
            <Route path="/MyMealShop" component={MyMealShop} exact />
            <Route path="/SuperMarketLogIn" component={SuperMarketLogIn} exact />
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