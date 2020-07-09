import React, { Component, useState } from 'react';

import { CardDeck , Card} from 'react-bootstrap';

import './MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';
import TotalPrice from '../../Components/TotalPrice/TotalPrice';

import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';


const MyMealChoices = (props) => {
    const [recipes, setRecipes] = useState([]);


    return (
        <>
            <div className="main__section__MyMealChoices container">
                <h1>My Meal Choices</h1>
                {ingredients.map(ing => {
                    return <MealChoices
                        key={ing.ingredientId}
                        id={ing.ingredientId}
                        name={ing.ingredientName}
                        price={ing.price} />
                })}
                

                <TotalPrice/>
            </div>
        </>
    )
};

export default MyMealChoices;