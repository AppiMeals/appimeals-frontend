import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';

import {
    CardDeck,
    Button,
    Form,
    Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch';

const BrowseRecipes = () => {


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState('balanced');
    const [warningTrigger, setWarningTrigger] = useState(false);

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
                    console.log(error.response.data)
                        
                })
    }, [query, diet]);
  

    
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
    const selectDiet = (dietChoice) => {
        setDiet(dietChoice);
    }

    //Add Recipe to DB
    const addRecipe = (id, day) => {


        //Finding the recipe that match the one we clicked on by id, where 'id' is clicked one
        const matchedRecipe = recipes.find(recipe => recipe.recipe.uri === id);

        //Create recipe object
        const newRecipe = {
            "recipe_uri": matchedRecipe.recipe.uri,
            "user_dbid": 2,
            "recipe_day": day,
            "recipe_title": matchedRecipe.recipe.label,
            "recipe_yield": matchedRecipe.recipe.yield,
            "recipe_image": matchedRecipe.recipe.image,
            "recipe_diet": matchedRecipe.recipe.dietLabels.toString(),
            "recipe_calories": Number.parseInt(matchedRecipe.recipe.calories).toString(),
            "recipe_ingredients": JSON.stringify(matchedRecipe.recipe.ingredients),
            "recipe_time": matchedRecipe.recipe.cookingTime || 0,
            "recipe_nutrients": JSON.stringify(matchedRecipe.recipe.totalNutrients),
            "recipe_url": matchedRecipe.recipe.url
        }


        axios
            .post('https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes', newRecipe)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error adding a recipe",error);

                if (error.response.data.error.code === 'ER_DUP_ENTRY') {
                    setWarningTrigger(true);
                }
            })
    }
      
    return (
        <>
            <div className="main-section">

                <h1>Browse Recipes</h1>
                
                <Alert className="alert-message" variant="danger"
                    show={warningTrigger}
                    onClose={() => setWarningTrigger(false)}
                    dismissible
                >
                    <Alert.Heading>Recipe Already Added</Alert.Heading>
                    <p>
                        You can find the recipe in your <Link to="/MyMealsHub">HuB</Link>
                    </p>
                </Alert>

                <ToggleSwitch selectDiet={selectDiet}/>


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
                            url={recipe.recipe.url}
                             />
                    ))}
                </CardDeck>
            </div>
        </>
    )
};

export default BrowseRecipes;
