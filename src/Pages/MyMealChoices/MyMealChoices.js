import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';
import TotalPrice from '../../Components/TotalPrice/TotalPrice';
import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';

import {
    CardDeck,
    Button,
    Card,
    Form,
    Accordion
} from 'react-bootstrap';


const MyMealChoices = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    //Use Effect should update the with the 
    useEffect(() => {
        //GET RECIPES
        axios
            .get(`https://api.edamam.com/search?q=chicken&app_id=7accd594&app_key=2195a4b3a84812fdec32734983392e27&from=0&to=3&calories=591-1000`)
            .then(
                response => {
                    setRecipes(response.data.hits)
                }
            )
            .catch(
                (error) => {
                    console.log('Error fetching data', error)
                }
            )
    }, [query]);



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


                <TotalPrice />
            </div>
        </>
    )
};

export default MyMealChoices;