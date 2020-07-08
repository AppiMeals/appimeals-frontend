import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import '../BrowseCatagoryCard/BrowseCatagoryCard.css';

const BrowseCatagoryCard = () => {
    return (
        <>
            <CardDeck>
                <Card>
                    <Card.Body className="BrowseCatagoryCardBackground">
                        <Card.Title>Family Favourites</Card.Title>
                        <Card.Text>
                            Example text
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button className="BrowseMealsButton" variant="success" >Browse Recipes</Button>{' '}
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body className="BrowseCatagoryCardBackground">
                        <Card.Title>Vegetarian Dishes</Card.Title>
                        <Card.Text>
                            Example Text
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="BrowseMealsButton" variant="success">Browse Recipes</Button>{' '}
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body className="BrowseCatagoryCardBackground">
                        <Card.Title>Quick Meals</Card.Title>
                        <Card.Text>
                            Example Text
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button className="BrowseMealsButton" variant="success" >Browse Recipes</Button>{' '}
                    </Card.Footer>
                </Card>
            </CardDeck>

        </>
    )
}

export default BrowseCatagoryCard; 