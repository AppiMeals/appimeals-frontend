import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../ShoppingBasket/ShoppingBasket.css';

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
