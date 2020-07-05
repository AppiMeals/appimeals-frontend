import React from 'react';
import { Card, Button } from 'react-bootstrap';


<<<<<<< HEAD

=======
>>>>>>> 62ea260a170d06b70424dc9743dd6cd8aff106f4
const RecipeCard = (props) => {
    return (
    <>
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
<<<<<<< HEAD
                <Card.Title>Card Title</Card.Title>
                <Card.Text> 
                  
=======
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.servings}
>>>>>>> 62ea260a170d06b70424dc9743dd6cd8aff106f4
                </Card.Text>

                <Card.Link href="#">Card Link</Card.Link>
                <br />
                <Button variant="primary">Add to myMeals</Button>
            </Card.Body>
        </Card>
    </>
    )};

export default RecipeCard;
