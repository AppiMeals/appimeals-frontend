import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import {
    CardDeck,
    Button,
    Form,
    Dropdown,
} from 'react-bootstrap';

const BrowseRecipes = () => {


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState('balanced');

    //Use Effect should update the with the 

    useEffect(() => {
        //GET RECIPES
        axios
            .get(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes`,
            {
                params: {
                    input: query,
                    dietInput: diet
                }
            })
            .then(response => {
                    setRecipes(response.data.hits)
                })
            .catch(
                (error) => {
                    console.log('Error fetching data', error)
                })
    }, [diet, query]);
  

    
    //Update the string in the search bar onChange
    const updateSearch = (event) => {
        setSearch(event.target.value);
    }

    //Get the value of the search bar and pass it to the query
    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);
        setSearch('');
    }

    //Take the diet label and pass it to the recipes
    const selectDiet = (event) => {
        setDiet(event);
    }

    //Add Recipe to DB
    const addRecipe = (id, day) => {


        //Finding the recipe that match the one we clicked on by id, where 'id' is clicked one
        const matchedRecipe = recipes.find(recipe => recipe.recipe.uri === id);

        console.log(matchedRecipe);

        //Create recipe object
        const newRecipe = {
            "recipe_uri": matchedRecipe.recipe.uri,
            "user_dbid": 2,
            "recipe_day": day,
            "recipe_favourite": 0,
            "recipe_title": matchedRecipe.recipe.label,
            "recipe_yield": matchedRecipe.recipe.yield,
            "recipe_image": matchedRecipe.recipe.image,
            "recipe_diet": matchedRecipe.recipe.dietLabels.toString(),
            "recipe_calories": matchedRecipe.recipe.calories,
            //"recipe_ingredients": matchedRecipe.recipe.ingredients,
            "recipe_time": matchedRecipe.recipe.cookingTime || 0,
            //"recipe_nutrients": matchedRecipe.recipe.totalNutrients,
            "recipe_url": matchedRecipe.recipe.url
        }


        console.log(newRecipe);

        axios
            .post('https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes', newRecipe)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error adding a task", error);
            })
    }


    return (
        <>
            <div className="main-section">

                <h1>Browse Recipes</h1>

                <Dropdown onSelect={selectDiet}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {diet}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="balanced" >Balanced</Dropdown.Item>
                        <Dropdown.Item eventKey="high-protein" >High-Protein</Dropdown.Item>
                        <Dropdown.Item eventKey="high-fiber" >High-Fiber</Dropdown.Item>
                        <Dropdown.Item eventKey="low-fat" >Low-Fat</Dropdown.Item>
                        <Dropdown.Item eventKey="low-carb" >Low-Carb</Dropdown.Item>
                        <Dropdown.Item eventKey="low-sodium" >Low-Sodium</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

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
                            diet={recipe.recipe.dietLabels}
                            url={recipe.recipe.url}
                            ingredients={recipe.recipe.ingredients}
                            nutrients={recipe.recipe.nutrients}
                            />
                    ))}
                </CardDeck>
            </div>
        </>
    )
};

export default BrowseRecipes;
