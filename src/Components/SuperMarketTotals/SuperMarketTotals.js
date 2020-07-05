import React from 'react';
//import { Card, Button, ListGroup, Dropdown, Form } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';

import '../SuperMarketTotals/SuperMarketTotals.css';

//import Logo from '../../Images/logo5-200x200.png';
//import Image from 'react-bootstrap/Image';



//import { Link } from 'react-router-dom';



const SuperMarketTotals = () => {
    return (
        <>
            <div className="form-inline">
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Choose your SuperMarket </Form.Label>
                    <Form.Control as="select">
                        <option>Asda £££</option>
                        <option>Sainsburys £££</option>
                        <option>Tesco £££</option>
                        <option>Waitrose £££</option>
                        <option>Morrisons £££</option>
                    </Form.Control>
                </Form.Group>

               


            </div>

            <div>
            <Button className = "sendGrocer" variant="primary">Send to Grocer</Button>{' '}
            </div>

        </>
    )
};

export default SuperMarketTotals;