import React, { Component, useState } from 'react';
import Logo from '../../Images/logo5-200x200.png';


import '../MealChoices/MealChoices.css';

import {
    Card,
    Button,
    CardDeck,
    Container,
    Image,
    Accordion
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

    let nutFat = Object.values(props.nutrients.FAT);
    let secondArr = nutFat[1].toFixed(2);
    let nutChol = Object.values(props.nutrients.CHOLE);
    let secondArrChol = nutChol[1].toFixed(2);
    let nutSugar = Object.values(props.nutrients.SUGAR);
    let secondArrSugar = nutSugar[1].toFixed(2);
    let nutCarbs = Object.values(props.nutrients.CHOCDF);
    let secondArrCarbs = nutCarbs[1].toFixed(2);
    let nutFiber = Object.values(props.nutrients.FIBTG);
    let secondArrFiber = nutFiber[1].toFixed(2);
    let nutProtein = Object.values(props.nutrients.PROCNT);
    let secondArrProtein = nutProtein[1].toFixed(2);

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

                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me for Nutritonal stuff!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Per Original Serving: {props.servings}:
                                    <br />
                                    {nutFat[0]} {secondArr}{nutFat[2]}
                                    <br />
                                    {nutChol[0]} {secondArrChol}{nutChol[2]}
                                    <br />
                                    {nutSugar[0]} {secondArrSugar}{nutSugar[2]}
                                    <br />
                                    {nutCarbs[0]} {secondArrCarbs}{nutCarbs[2]}
                                    <br />
                                    {nutFiber[0]} {secondArrFiber}{nutFiber[2]}
                                    <br />
                                    {nutProtein[0]} {secondArrProtein}{nutProtein[2]}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </Card.Body>
            </Card>



        </>
    );
}

export default MealChoices;
