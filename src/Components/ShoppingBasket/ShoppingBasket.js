import React, { Component, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
//import Logo from '../../Images/logo5-200x200.png';

import '../ShoppingBasket/ShoppingBasket.css';

import MealChoices from '../../Components/MealChoices/MealChoices';




const ShoppingBasket = (props) => {
    const [name, setName] = useState("");
    return (
        <>
        <div className = "form-inline recipeBaskett">
        <Card style={{ width: '30rem' }}>
                <Card.Header className = "headerName">Recipe Name</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{props.name}
                        <Button className = "delete__button" variant="secondary">X</Button>
                    </ListGroup.Item>
                    
    
                </ListGroup>
            </Card>

        </div>
            
        </>
    )
};

export default ShoppingBasket;
