import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import {
    CardColumns,
    InputGroup,
    Button,
    FormControl
} from 'react-bootstrap';

const BrowseRecipes = () => {

    const API_KEY = "ee2a325e66bd44bd89f14ee9afb794dd";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    //Use Effect should update the with the 

    useEffect(() => {

        //GET RECIPES
        axios
            .get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&fillIngredients=true&number=10&apiKey=${API_KEY}`)
            .then(

                response => {
                    setRecipes(response.data.results)
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
    }

    return (
        <>
            <div className="main__section">

                <h1>Browse Recipes</h1>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipe"
                        aria-label="Search"
                        aria-describedby="recipe-seach-bar"
                        onChange={updateSearch}
                        value={search}
                    />
                    <Button 
                    type="submit"
                    variant="outline-secondary" 
                    onClick={getSearch}
                    as={InputGroup.Append}
                    >
                        Search
                    </Button>
                </InputGroup>

                <CardColumns className="card__container">
                    {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        calories={recipe.calories}
                        servings={recipe.servings}
                        cookingTime={recipe.readyInMinutes}
                        summary={recipe.summary} />
                    ))}
                </CardColumns>
            </div>
        </>
    )
};

export default BrowseRecipes;
