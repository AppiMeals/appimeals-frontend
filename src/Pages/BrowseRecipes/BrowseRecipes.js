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

    //const API_KEY = "ee2a325e66bd44bd89f14ee9afb794dd";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    //Use Effect should update the with the 

    useEffect(() => {

        //GET RECIPES
        axios
            .get(`https://api.edamam.com/search?q=${query}&app_id=fce15b25&app_key=8b32dc22c438268e5fc874e29967d9fa&from=0&to=10&calories=591-722`)
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
