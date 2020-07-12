import React from 'react';
import { Card, CardGroup, Dropdown } from 'react-bootstrap';
//import parse from 'html-react-parser';

import './RecipeCard.css';


const RecipeCard = (props) => {

    // const handleClick = () => {
    //     props.addRecipe(props.id);
    // }

    const handleSelect = (event) => {
        props.addRecipe(props.id, event);
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
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Select Day
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="Monday">Monday</Dropdown.Item>
                                <Dropdown.Item eventKey="Tuesday">Tuesday</Dropdown.Item>
                                <Dropdown.Item eventKey="Wednesday">Wednesday</Dropdown.Item>
                                <Dropdown.Item eventKey="Thursday">Thursday</Dropdown.Item>
                                <Dropdown.Item eventKey="Friday">Friday</Dropdown.Item>
                                <Dropdown.Item eventKey="Saturday">Saturday</Dropdown.Item>
                                <Dropdown.Item eventKey="Sunday">Sunday</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )};

export default RecipeCard;
