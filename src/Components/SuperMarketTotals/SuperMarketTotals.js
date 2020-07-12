import React from 'react';
//import { Card, Button, ListGroup, Dropdown, Form } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';

import '../SuperMarketTotals/SuperMarketTotals.css';

import { Link } from 'react-router-dom';

const SuperMarketTotals = (props) => {
    




    return (
        <>
            <div className="form-inline">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Choose your SuperMarket </Form.Label>
                    <Form.Control as="select">
                        <option>Asda £25.60</option>
                        <option>Sainsburys £21.20</option>
                        <option>Tesco £20.50</option>
                        <option>Waitrose £26.90</option>
                        <option>Morrisons £23.50</option>
                    </Form.Control>
                    <Link to={"/SuperMarketLogIn"}><Button>Send To Grocer</Button></Link>
                </Form.Group>
            </div>
            <div>
           
            </div>

        </>
    )
};

export default SuperMarketTotals;