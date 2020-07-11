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
    // let secondArr = nutFat[1].toFixed(2);
    let nutChol = Object.values(props.nutrients.CHOLE);
    // let secondArrChol = nutChol[1].toFixed(2);
    let nutSugar = Object.values(props.nutrients.SUGAR);
    // let secondArrSugar = nutSugar[1].toFixed(2);
    let nutCarbs = Object.values(props.nutrients.CHOCDF);
    // let secondArrCarbs = nutCarbs[1].toFixed(2);
    let nutFiber = Object.values(props.nutrients.FIBTG);
    // let secondArrFiber = nutFiber[1].toFixed(2);
    let nutProtein = Object.values(props.nutrients.PROCNT);
    // let secondArrProtein = nutProtein[1].toFixed(2);



    const handleDeleteClick = () => {
        props.deleteRecipe(props.id);
    }
   
    return (
        <>

            <Card className="mealChoicesCard" xs={2} md={4} lg={6}>
                <Card.Header>{props.day}<button className="delete__button" onClick={handleDeleteClick}>x</button></Card.Header>
                <Card.Body>
                    <Container>
                        <Image className="recipeImage" src={props.image} roundedCircle />
                    </Container>

                        <Card.Title>{props.title}</Card.Title>
           
                        <button onClick={handleTextChange}>+</button>
                        {text}
                        <button onClick={handleMinusChange}>-</button>
                        <br />
                        
                        <Card.Text>Servings</Card.Text>
                        <Card.Text>(Adjusts weight of ingredients required for servings)</Card.Text>
                        <Card.Text>
                            <span>Calories: {Math.round((props.calories / props.servings) * text)}</span>
                            <br />
                            <br />
                            <span>Ingredients (Original Servings:{props.servings})</span>
                            <br />
                            {props.ingredients.map(ingredient => (<li>{ingredient.text} Weight:{Math.round((ingredient.weight / props.servings) * text)}g
                            </li>)
                            )}
                        </Card.Text>
                   

                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Nutritional Content
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Per Original Serving: {props.servings}:
                                    
                                    <br />
                                    {nutFat[1]}{nutFat[2]}{nutFat[0]} 
                                 
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
