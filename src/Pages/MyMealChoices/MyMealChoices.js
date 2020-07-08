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
    Form
} from 'react-bootstrap';




const MyMealChoices = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
   

    //Use Effect should update the with the 

    useEffect(() => {

        //GET RECIPES
        axios
            .get(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes`)
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

    function deleteMeal (id) {
        const deleteMeals = recipes.filter(recipe => recipe.id !== id);
        setRecipes(deleteMeals);
    }
   
    return (
        <>
            <div className="main__section__MyMealChoices container">
                <h1>My Meal Choices</h1>
         


                <CardDeck className="recipe-container">
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
                            deleteRecipe = {deleteMeal}
                            weight={recipe.recipe.ingredients}/>
                            
                    ))}
                

                   
                </CardDeck>


                
         
                    
          
            </div>
        </>
    )
};

export default MyMealChoices;