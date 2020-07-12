import React, { useState } from 'react';

import '../MealChoices/MealChoices.css';

import {
    Card,
    Button,
    Container,
    Image,
    Accordion
} from 'react-bootstrap';


function MealChoices(props) {
    const [text = props.servings, setText] = useState();

    const add = (num) => {
        return parseFloat(num + 1);
    }

    const minus = (num) => {
        if (num === 1) {
            return 1
        } else {
            return parseFloat(num - 1);
        };
    }

    const handleTextChange = () => {
        setText(add(parseFloat(text)));
    }

    const handleMinusChange = () => {
        setText(minus(parseFloat(text)))
    }

    let nutFat = Object.values(props.nutrients.FAT);

    let nutChol = Object.values(props.nutrients.CHOLE);
 
    let nutSugar = Object.values(props.nutrients.SUGAR);
  
    let nutCarbs = Object.values(props.nutrients.CHOCDF);

    let nutFiber = Object.values(props.nutrients.FIBTG);
   
    let nutProtein = Object.values(props.nutrients.PROCNT);


    const handleDeleteClick = () => {
        props.deleteRecipe(props.id);
    }
   
    return (
        <>

            <Card className="mealChoicesCard" xs={2} md={4} lg={6}>
                <Card.Header>{props.day}<button className="delete__button" onClick={handleDeleteClick}>x</button></Card.Header>
                <Card.Body>
                
                        <Image className="recipeImage" src={props.image} roundedCircle />
             

                        <Card.Title>{props.title}</Card.Title>
           
                        <button onClick={handleTextChange}>+</button>
                        {parseFloat(text)}
                        <button onClick={handleMinusChange}>-</button>
                        <br />
                        
                        <Card.Text>Servings</Card.Text>
                        <Card.Text>(Adjusts weight of ingredients required for servings)</Card.Text>
                        <Card.Text>
                            <span>Calories: {parseFloat(Math.round((props.calories/props.servings) * text))}</span>
                            <br />
                            <br />
                            <span>Ingredients (Original Servings:{props.servings})</span>
                            <br />
                            {props.ingredients.map(ingredient => (<li>{ingredient.text} Weight:{parseFloat(Math.round((ingredient.weight / props.servings) * text))}g
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
                                    {nutFat[1]} {(Math.round((nutFat[2]/props.servings)*text))}{nutFat[0]} 
                                    <br/>
                                    {nutChol[1]} {(Math.round((nutChol[2]/props.servings)*text))}{nutChol[0]} 
                                    <br/>
                                    {nutCarbs[1]} {Math.round((nutCarbs[2]/props.servings)*text)}{nutCarbs[0]}
                                    <br/>
                                    {nutFiber[1]} {Math.round((nutFiber[2]/props.servings)*text)}{nutFiber[0]}  
                                    <br/>
                                    {nutProtein[1]} {Math.round((nutProtein[2]/props.servings)*text)}{nutProtein[0]} 
                                    <br/>
                                    {nutSugar[1]} {Math.round((nutSugar[2]/props.servings)*text)}{nutSugar[0]} 
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
