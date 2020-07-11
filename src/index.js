import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


let authUser = "";


if (JSON.parse(sessionStorage.getItem('AppiMealsAuthUser') === null)){
  //const user =  JSON.parse(sessionStorage.getItem('AppiMealsAuthUser'));
  authUser = null;
}
else {
  console.log("AppiMealsAuthUser " + Object.values(JSON.parse(sessionStorage.getItem('AppiMealsAuthUser'))));
  authUser = 1;
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
