import React from 'react';
import { CardGroup, Card, Button, Image } from 'react-bootstrap';


const MyUpcomingMealsCard = (props) => {
  return (
    <>
      <header>
        <CardGroup className="card-group">
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Monday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Image className="imageT" src={props.image}  />
            <Card.Body>
              <Card.Title>Tuesday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Wednesday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Thursday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Friday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Saturday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Sunday</Card.Title>
              <Card.Text>
                Some example text
      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">View Full Recipe</Button>
            </Card.Footer>
          </Card>

        </CardGroup>
      </header>
    </>
  )
}

export default MyUpcomingMealsCard; 