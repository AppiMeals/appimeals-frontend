import React, { Component, useState } from 'react';
import Logo from '../../Images/logo5-200x200.png';


import '../MealChoices/MealChoices.css';

import {
    Card,
    Button,
    CardDeck,
    Container,
    Image
} from 'react-bootstrap';


function MealChoices(props) {
    const [text = props.servings, setText] = useState();

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

    return (
        <>

            <Card className="test" style={{ width: '70rem' }}>
                <Card.Header>Day<button className="delete__button" onClick={() => console.log(props.id)}>x</button></Card.Header>
                <Card.Body>
                    <Container>
                        <Image className="imageT" src={props.image} roundedCircle />
                    </Container>
                    <Container>
                        <Card.Title>{props.title}</Card.Title>
                        <button onClick={handleTextChange}> +</button>
                        {text}
                        <button onClick={handleMinusChange}>-</button>
                        <br />
                        <Card.Text>Servings</Card.Text>
                        <span> (Adjusts weight of ingredients required for servings)</span>
                        <Card.Text>
                            <span>Calories: {Math.round((props.calories / props.servings) * text)}</span>
                            <br />
                            <br />
                            <span>Ingredients (Original Servings:{props.servings})</span>
                            <br />
                            {props.ingredient.map(ingredient => (<li>{ingredient.text} Weight:{Math.round((ingredient.weight / props.servings) * text)}g
                            </li>)
                            )}
                        </Card.Text>
                    </Container>

                </Card.Body>
            </Card>



        </>
    );
}

export default MealChoices;
