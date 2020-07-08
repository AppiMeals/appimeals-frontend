import React, { useState } from 'react';
import { Card, Button, CardGroup, Dropdown } from 'react-bootstrap';
//import parse from 'html-react-parser';

import './RecipeCard.css';


const RecipeCard = (props) => {

    const [day, setDay] = useState('');

    const handleClick = () => {
        props.addRecipe(props.id);
    }

    const handleSelect = (e) => {
        setDay(e);
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

                        <Button onClick={handleClick} variant="primary">Add to myMeals</Button>
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Select Day
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Monday" >Monday</Dropdown.Item>
                                <Dropdown.Item eventKey="Tuesday" >Tuesday</Dropdown.Item>
                                <Dropdown.Item eventKey="Wednsday" >Wednsday</Dropdown.Item>
                                <Dropdown.Item eventKey="Thursday" >Thursday</Dropdown.Item>
                                <Dropdown.Item eventKey="Friday" >Friday</Dropdown.Item>
                                <Dropdown.Item eventKey="Saturday" >Saturday</Dropdown.Item>
                                <Dropdown.Item eventKey="Sunday" >Sunday</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </span>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )};

export default RecipeCard;
