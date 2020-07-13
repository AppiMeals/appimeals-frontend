import React, { useState } from 'react';
import '../MealChoices/MealChoices.css';

import { Card, Button, Image, Accordion } from 'react-bootstrap';

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
            <Card className="mealChoicesCard" >
                <Card.Header><h5>{props.day}</h5>
                    <Button size="sm" className="delete__button" onClick={handleDeleteClick}>X</Button>
                </Card.Header>

                <Card.Body className = "Cardbody">

                    <Image className="recipeImage" src={props.image} responsive />
                   
                    <Card.Title>{props.title}</Card.Title>
                
                    <Button className = "servingsComp" size="sm" onClick={handleTextChange}> + </Button>{' '}
                    {parseFloat( text )}{' '}
                    <Button size="sm" onClick={handleMinusChange}> - </Button>{' '}
                    <Card.Text className = "servingsComp">Servings</Card.Text>
                    <Card.Text className = "adjustHeading">(Adjusts weight of ingredients required for servings)</Card.Text>
                    <Card.Text>
                        <h6>Ingredients (Original Servings:{props.servings})</h6>
                        <ol className = "ingredientList">
                         {props.ingredients.map(ingredient => (<li>{ingredient.text}<br/> Weight: {parseFloat(Math.round((ingredient.weight / props.servings) * text))}g
                        </li>)
                        )}
                        </ol>
                    </Card.Text>

                    <Accordion>
                        <Card>
                            <Card.Header className = "nutritionToggle">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                                    Nutritional Content
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className = "nutritionalInfo">
                                <span>Calories {parseFloat(Math.round((props.calories / props.servings) * text))}</span>
                                    <br />
                                    {nutFat[1]} {(Math.round((nutFat[2] / props.servings) * text))}{nutFat[0]}
                                    <br />
                                    {nutChol[1]} {(Math.round((nutChol[2] / props.servings) * text))}{nutChol[0]}
                                    <br />
                                    {nutCarbs[1]} {Math.round((nutCarbs[2] / props.servings) * text)}{nutCarbs[0]}
                                    <br />
                                    {nutFiber[1]} {Math.round((nutFiber[2] / props.servings) * text)}{nutFiber[0]}
                                    <br />
                                    {nutProtein[1]} {Math.round((nutProtein[2] / props.servings) * text)}{nutProtein[0]}
                                    <br />
                                    {nutSugar[1]} {Math.round((nutSugar[2] / props.servings) * text)}{nutSugar[0]}
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
