import React from 'react';
//import { CardDeck} from 'react-bootstrap';


import '../MyMealShop/MyMealShop.css';
import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';
import SuperMarketTotals from '../../Components/SuperMarketTotals/SuperMarketTotals';
//import Logo from '../../Images/logo5-200x200.png';
//import Image from 'react-bootstrap/Image';



//import { Link } from 'react-router-dom';


const MyMealShop = () => {
    return (
        <> 
            <div className="main__section__MyMealShop container">
            <h1>My Meal Shop</h1>
            <div class="row">
            <div class="box1 col-6">
            <ShoppingBasket/>
            </div>
            <div class="box2 col-6">
            <SuperMarketTotals/>
            </div>
            </div>
    
            </div>
        </>
    )
};

export default MyMealShop;