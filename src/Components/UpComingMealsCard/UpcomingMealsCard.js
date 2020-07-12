import React from 'react';
import { CardGroup, Card, Button, Image } from 'react-bootstrap';

import '../UpComingMealsCard/UpcomingMealsCard.css';

const MyUpcomingMealsCard = (props) => {


  const handleDeleteClick = () => {
    props.deleteRecipe(props.id);
}


  return (
    <>
      <header>
        <CardGroup className="card-group">
        <Card className="card-item">
            <Image className="card-image" src={props.image}  />
            <Button className="close-button" onClick={handleDeleteClick}>X</Button>
            <Card.Body className="card-body">
              <Card.Title>{props.day}</Card.Title>
              <Card.Text className="text-field">
                {props.title}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href={props.url} >View Full Recipe</Card.Link>
            </Card.Footer>
          </Card>

        </CardGroup>
      </header>
    </>
  )
}

export default MyUpcomingMealsCard; 