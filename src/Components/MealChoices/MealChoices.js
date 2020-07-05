import React, { Component, useState } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import Logo from '../../Images/logo5-200x200.png';


import '../MealChoices/MealChoices.css';


function MealChoices(props) {
    const [text = 1, setText] = useState();

    const add = (num) => {
        return num + 1;
    }

    const handleTextChange = () => {
        setText(add(text));
    }

    const handleMinusChange = () => {
        setText(minus(text))
    }

    const minus = (num) => {
        if (num === 1) {
            return 1
        } else {
            return num - 1;
        }
    }

    return (
        <>
        
                <Card>
                    <Card.Body>
                        <Card.Title>Monday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Tueday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Wednesday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Thursday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Friday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Saturday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Sunday
                        </Card.Title>
                        <Card.Text> Recipe
                        <button onClick={handleTextChange}> +</button>
                         {text}
                        <button onClick={handleMinusChange}>-</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
           
        </>
    )
};

export default MealChoices;
