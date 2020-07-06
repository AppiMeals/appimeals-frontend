import React from 'react';
import { Card, Button } from 'react-bootstrap';
import parse from 'html-react-parser';



const RecipeCard = (props) => {
    return (
    <>
        <Card className="text-center" style={{ width: '20vw' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <span>Calories: {props.calories}</span>
                    <br />
                    <span>Cooking Time: {props.cookingTime}min</span>
                    <br />
                    <span>Servings: {props.servings}</span>
                    <br />
                    <span>{parse(props.summary)}</span>
                </Card.Text>

                <Card.Link href="#">Card Link</Card.Link>
                <br />
                <Button variant="primary">Add to myMeals</Button>
            </Card.Body>
        </Card>
    </>
    )};

export default RecipeCard;
