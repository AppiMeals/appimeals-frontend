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
    //Update the string in the search bar onChange
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    //Get the value of the search bar and pass it to the query
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    // function deleteMeal (id) {
    // const deleteMeals = recipes.filter(recipe => recipe.id !== id);
    // setRecipes(deleteMeals);
    // }



    return (
        <>
            <div className="main__section__MyMealChoices">
                <h1>My Meal Choices</h1>

                <Card className="meals">
                    {recipes.map(recipe => (
                        <MealChoices
                            key={recipe.recipe.uri}
                            id={recipe.recipe.uri}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            servings={recipe.recipe.yield}
                            cookingTime={recipe.recipe.totalTime}
                            url={recipe.recipe.url}
                            // deleteRecipe = {deleteMeal}
                            ingredient={recipe.recipe.ingredients}
                            nutrients={recipe.recipe.totalNutrients} />
                    ))}
                </Card>






            </div>
        </>
    )
};

export default MyMealChoices;