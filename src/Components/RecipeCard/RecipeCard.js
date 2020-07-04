import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Logo from '../../Images/logo5-200x200.png';



const RecipeCard = () => {
    return (
    <>
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>

                <Card.Link href="#">Card Link</Card.Link> 
                <br />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
    )};

export default RecipeCard;
