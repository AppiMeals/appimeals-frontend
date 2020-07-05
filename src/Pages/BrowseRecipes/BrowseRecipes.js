import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { CardDeck } from 'react-bootstrap';

// import Image from 'react-bootstrap/Image';
// import {Container, Row, Col, Button} from 'react-bootstrap';

//import { Link } from 'react-router-dom';

const BrowseRecipes = () => {

    const API_KEY = "5059b8d98fa64de5b6da983974896a37";

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        //GET
        axios
            .get(`https://api.spoonacular.com/recipes/random?number=2&tags=vegetarian,dessert&apiKey=${API_KEY}`)
            .then(

                response => {
                    setRecipes(response.data.recipes)
                }
            )
            .catch(
                (error) => {
                    console.log('Error fetching data', error)
                }
            )
    }, []);


    return (
    <>
    <div className="main__section">

        <h1>Browse Recipes</h1>

        <CardDeck>
            {recipes.map(recipe => (
              <RecipeCard 
              key={recipe.title}
              title={recipe.title} 
              image={recipe.image} 
              text={recipe.servings}/>  
            ))}
        </CardDeck>
    </div>
    </>
    )};

export default BrowseRecipes;
