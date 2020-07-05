import React from 'react';
import { CardDeck } from 'react-bootstrap';

import './MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';







const MyMealChoices = () => {

   
    return (
        <>
            <div className="main__section__MyMealChoices container">
                <h1>My Meal Choices</h1>
                <MealChoices/>
         



            </div>
        </>
    )
};

export default MyMealChoices;