import React from 'react';
//import { Card, Button, ListGroup, Form, Col } from 'react-bootstrap';
import { Button, Form, Col } from 'react-bootstrap';
import '../SuperMarketLogInPayment/SuperMarketLogInPayment.css';
import { Link } from 'react-router-dom';


const SuperMarketLogInPayment = () => {
    return (
        <>

            <h2>Total Payment £20.50</h2>
            <Form className="paymentForm">

                <Form.Row >
                    <Form.Group as={Col} controlId="formGridCardDetails">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Card Number" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCardName">
                        <Form.Label>Card Name</Form.Label>
                        <Form.Control placeholder="Card Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCardCVS">
                        <Form.Label>CSV</Form.Label>
                        <Form.Control placeholder="CSV" />
                    </Form.Group>
                </Form.Row>



                <Form.Row>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>County/State</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPostCode">
                        <Form.Label>Post Code</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

            

                <Button variant="primary" type="submit">
                    Submit
                    </Button>

                    <Link to={"/MyMealShop"}> <Button> Cancel</Button></Link>
            </Form>

        </>
    )
};

export default SuperMarketLogInPayment;