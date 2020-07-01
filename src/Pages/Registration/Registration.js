import React from 'react';
import Logo from '../../Images/logo5-200x200.png';
import MktgImage1 from '../../Images/1479225-556x370.jpg';
import MktgImage2 from '../../Images/1471493-556x370.jpg';
import './Registration.css';

import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

let dateString = "";
for (let i = 1; i < 32; i++){
    dateString += "<option>"+ i +"</option>\n";
}


const Registration = () => (





    <>
        <Container className="left">
            <Row>
                <Col>
                    <Image alt="AppiMeals Logo" className="miniLogo" src={Logo}  /> 
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    <h2>Sign Up!</h2> <br/>
                    <h2>Let's Create AppiMeals...</h2>
                </Col>
            </Row>
        </Container>

        <p>&nbsp;</p>




        <Container>
        <Form>
            <Row>
            
                <Col>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Control type="text" placeholder="First Name" /> 
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicSurname">
                    <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
            <Form.Group controlId="formBasicEmail">
                <Col>
                    <Form.Control type="email" placeholder="Email Address" /> 
                </Col>
            </Form.Group>
            </Row>

            <Row>
            <Form.Group controlId="formBasicMobile">
                <Col>
                    <Form.Control type="text" placeholder="Mobile Number" /> 
                </Col>
            </Form.Group>
            </Row>

            <Row>
            <Form.Group controlId="formBasicPassword">
                <Col>
                    <Form.Control type="password" placeholder="Password" /> 
                </Col>
            </Form.Group>
            </Row>
            
            <Row>
            <Form.Group controlId="formBasicDoB">
                <Col>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">dd</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            </Row>



            <Row>
                <Col>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                </Col>
            </Row>
        </Form>
        </Container>

    </>
);

export default Registration;