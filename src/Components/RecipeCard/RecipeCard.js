import React from 'react';
import { Card, Button, CardGroup, Dropdown } from 'react-bootstrap';
//import parse from 'html-react-parser';

import './RecipeCard.css';


const RecipeCard = (props) => {

    const handleRecipeAddClick = () => {
        props.addRecipe(props.id);
    }

    return (
        <>
            <CardGroup className="card-container">
                <Card className="text-center" >
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <span>Calories: {Math.round(props.calories)}</span>
                            <br />
                            <span>Cooking Time: {props.cookingTime}min</span>
                            <br />
                            <span>Servings: {props.servings}</span>
                            <br />
                        </Card.Text>

                        <Card.Link href={props.url} target={"_blank"} >View Recipe</Card.Link>
                        <br />
                        <span className="button-group">
                        <Button onClick={handleRecipeAddClick} variant="primary">Add to myMeals</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Select Day
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Wednsday</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Friday</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Saturday</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">Sunday</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </span>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )};

export default RecipeCard;
