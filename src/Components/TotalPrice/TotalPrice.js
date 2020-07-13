import React from 'react';
import { Card } from 'react-bootstrap';
import '../TotalPrice/TotalPrice.css';

function TotalPrice(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Total Price</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">inc VAT</Card.Subtitle>
                    <Card.Text>
                      

                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default TotalPrice;
