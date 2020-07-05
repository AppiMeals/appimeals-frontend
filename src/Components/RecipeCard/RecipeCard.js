import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Logo from '../../Images/logo5-200x200.png';



const RecipeCard = (props) => {
    return (
    <>
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text> 
                  
                </Card.Text>

                <Card.Link href="#">Card Link</Card.Link> 
                <br />
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
    )};

export default RecipeCard;
