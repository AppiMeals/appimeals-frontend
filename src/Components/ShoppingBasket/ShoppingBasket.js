import React, { Component, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
//import Logo from '../../Images/logo5-200x200.png';

import '../ShoppingBasket/ShoppingBasket.css';

import MealChoices from '../../Components/MealChoices/MealChoices';




const ShoppingBasket = (props) => {
  
    return (
        <>
        <div className = "form-inline recipeBaskett">
  
               
                <ListGroup variant="flush">
                    <ListGroup.Item>
                
                    {props.ingredients.map(ingredient => (<li>{ingredient.text}
                            </li>)
                            )}
                      
                    </ListGroup.Item>
                    
    
                </ListGroup>
           

        </div>
            
        </>
    )
};

export default ShoppingBasket;
