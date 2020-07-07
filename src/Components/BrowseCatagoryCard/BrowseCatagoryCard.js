import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';
import '../BrowseCatagoryCard/BrowseCatagoryCard.css';

const BrowseCatagoryCard = () => {
    return (
        <>
            <CardGroup>

                <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Family Favourites</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
    </Card.Text>
                       
                    </Card.ImgOverlay>
                </Card>


                <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Healthy Meals</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
    </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>


                <Card className="bg-dark text-white">
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Vegetarian Dishes</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
    </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>

            </CardGroup>
            
        </>
    )
}

export default BrowseCatagoryCard; 