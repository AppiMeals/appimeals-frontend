import React, { Component, useState } from 'react';

import { CardDeck , Card} from 'react-bootstrap';

import './MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';


const MyMealChoices = () => {
    const [ingredients, setIngredients] = useState([
        { ingredientName: "tofu", price: 2, ingredientId: 1 },
        { ingredientName: "rice", price: 4, ingredientId: 21 }
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

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Price</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">inc VAT</Card.Subtitle>
                        <Card.Text>
                            
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>





            </div>
        </>
    )
};

export default MyMealChoices;