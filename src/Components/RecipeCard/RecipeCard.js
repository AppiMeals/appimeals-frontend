import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
//import parse from 'html-react-parser';

import './RecipeCard.css';


const RecipeCard = (props) => {
    return (
    <>  
    <CardGroup className="card-container">
        <Card className="text-center" >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <span>Calories: {Math.round(props.calories)}</span>
                    <br />
                    <span>Cooking Time: {props.cookingTime}min</span>
                    <br />
                    <span>Servings: {props.servings}</span>
                    <br />
                </Card.Text>

                <Card.Link href={props.url} target={"_blank"} >View Recipe</Card.Link>
                <br />
                <Button variant="primary">Add to myMeals</Button>
            </Card.Body>
        </Card>
        </CardGroup>
    </>
    )};

export default RecipeCard;
