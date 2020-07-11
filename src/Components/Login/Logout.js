//import React from 'react';
import  { useHistory } from 'react-router-dom';

export default function LogOut() {
    const history = useHistory();
    sessionStorage.removeItem('AppiMealsAuthUser');
    console.log("Session Destroyed.");
    history.push("/");
    return null;
}