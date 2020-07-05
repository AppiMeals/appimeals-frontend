import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
//import Logo from '../../Images/logo5-200x200.png';

import '../ShoppingBasket/ShoppingBasket.css';




const ShoppingBasket = () => {
    return (
        <>
        <div className = "form-inline recipeBaskett">
        <Card style={{ width: '30rem' }}>
                <Card.Header className = "headerName">Recipe Name</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Ingredient1 & Ingredient price
                        <Button className = "delete__button" variant="secondary">X</Button>
                    </ListGroup.Item>
                    
    
                </ListGroup>
            </Card>

        </div>
            
        </>
    )
};

export default ShoppingBasket;
