import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import {
    CardDeck,
    Button,
    Form
} from 'react-bootstrap';

const BrowseRecipes = () => {


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    //Use Effect should update the with the 

    useEffect(() => {

        //GET RECIPES
        axios
            .get(`https://uuwrezvfy7.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes`)
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

    //Add Recipe to Fav's
    const addRecipe = (id) => {
        //Create recipe object where I want to save just the recipe Id against the user
        const newRecipe = {
            "recipe_id": id,
            "user_dbid": 2
        }

        axios
            .post('https://uuwrezvfy7.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes/', newRecipe)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error adding a task", error);
            });
    }


    return (
        <>
            <div className="main-section">

                <h1>Browse Recipes</h1>

                <form className="search-form">
                    <Form.Control
                        className="search-bar"
                        type="text"
                        onChange={updateSearch}
                        value={search}
                    />
                    <Button
                        className="search-button"
                        type="submit"
                        variant="primary"
                        onClick={getSearch}
                    >
                        Search
                    </Button>
                </form>

                <CardDeck className="recipe-container">
                    {recipes.map(recipe => (
                        <RecipeCard
                            addRecipe={addRecipe}
                            key={recipe.recipe.uri}
                            id={recipe.recipe.uri}
                            title={recipe.recipe.label}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            servings={recipe.recipe.yield}
                            cookingTime={recipe.recipe.totalTime}
                            url={recipe.recipe.url} />
                    ))}
                </CardDeck>

            </div>
        </>
    )
};

export default BrowseRecipes;
