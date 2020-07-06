import React, { Component, useState } from 'react';

import { CardDeck , Card} from 'react-bootstrap';

import './MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';
import TotalPrice from '../../Components/TotalPrice/TotalPrice';


const MyMealChoices = (props) => {
    const [ingredients, setIngredients] = useState([
        { ingredientName: "tofu", price: 2, ingredientId: 1 },
        { ingredientName: "rice", price: 4, ingredientId: 21 },
        { ingredientName: "Food", price: 14, ingredientId: 21 }
    ]);

    const [recipeMenu, setRecipe] = useState([
        {
            recipeName: "tofu fritter",
            ingredients: { ingredientName: "tofu", ingredientId: 100 }
        }
    ])

  


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