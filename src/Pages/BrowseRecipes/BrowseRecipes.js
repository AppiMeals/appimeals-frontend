import React from 'react';

import '../BrowseRecipes/BrowseRecipes.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import { CardDeck } from 'react-bootstrap';

// import Image from 'react-bootstrap/Image';
// import {Container, Row, Col, Button} from 'react-bootstrap';

//import { Link } from 'react-router-dom';

const BrowseRecipes = () => {
    return (
    <>
    <div class="main__section">

        <h1>Browse Recipes</h1>

        <CardDeck>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        </CardDeck>
    </div>
    </>
    )};

export default BrowseRecipes;
