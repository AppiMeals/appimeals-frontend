import React from 'react';
import {  Form, Button, Col} from 'react-bootstrap';

import '../SuperMarketLogIn/SuperMarketLogIn.css';

import SuperMarketLogInPayment from '../../Components/SuperMarketLogInPayment/SuperMarketLogInPayment';





const SuperMarketLogIn = () => {
    return (
        <>
            <div className="main__section__SuperMarketLogIn container">
                <h1>Make your Payment </h1>
                <SuperMarketLogInPayment/>
               


            </div>
        </>
    )
};

export default SuperMarketLogIn;