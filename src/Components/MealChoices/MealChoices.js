import React, { Component, useState } from 'react';
import { Card, Button, CardDeck, CardGroup } from 'react-bootstrap';
import Logo from '../../Images/logo5-200x200.png';


import '../MealChoices/MealChoices.css';


const MealChoices = (props) => {
    const [text = 1, setText] = useState();

  
    const add = (num) => {
        return num + 1;
    }
    const minus = (num) => {
        if (num === 1) {
            return 1
        } else {
            return num - 1;
        };
    }



    const handleTextChange = () => {
        setText(add(text));
    }
    const handleMinusChange = () => {
        setText(minus(text))
    }

   

    // let weight = props.weight;
    // let newWeight = weight.map(ingredient => (<li>{ingredient.weight}</li>))
   
    return (
        <>
                <Card className="text-center" >
                    <Card.Header>Day</Card.Header>

                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <span>Calories: {Math.round(props.calories/props.servings)*text}</span>
                            <br />
                         
                            <br />
                      
                  
                            <span>ingredients:</span>
                            <br />
                            {props.weight.map(ingredient => (<li>{ingredient.text} weight:{(ingredient.weight/props.servings)*text}g

                            </li>)
                            )}
                        </Card.Text> <button onClick={handleTextChange}> +</button>
                        {text}
                        <button onClick={handleMinusChange}>-</button>
                        <br/>
                        <button className= "delete__button" onClick={() =>console.log(props.id)}>x</button>
                        <Card.Text>Servings</Card.Text>
                      



                    </Card.Body>
                </Card>
        </>
    );
}

export default MealChoices;
