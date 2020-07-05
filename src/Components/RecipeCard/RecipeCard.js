import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = (props) => {
    return (
    <>
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>

                <Card.Title>Card Title</Card.Title>
                <Card.Text> 
                  

                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.servings}

                </Card.Text>

                <Card.Link href="#">Card Link</Card.Link>
                <br />
                <Button variant="primary">Add to myMeals</Button>
            </Card.Body>
        </Card>
    </>
    )};

export default RecipeCard;
