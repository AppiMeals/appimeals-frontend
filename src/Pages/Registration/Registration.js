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
            <Form.Row>
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
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="formBasicEmail">
                <Col>
                    <Form.Control type="email" placeholder="Email Address" /> 
                </Col>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group controlId="formBasicMobile">
                <Col>
                    <Form.Control type="text" placeholder="Mobile Number" /> 
                </Col>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Col>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" /> 
                </Form.Group>
                </Col>
            </Form.Row>
            
            <Form.Row>
                <Col>
                <Form.Group controlId="formBasicDay">
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="doBSelectDay"
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
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicMonth">
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="doBSelectMonth"
                        custom
                    >
                        <option value="0">mm</option>
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
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicYear">
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="doBSelectYear"
                        custom
                    >
                        <option value="0">yyyy</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                    </Form.Control>
                </Form.Group>
                </Col>
            </Form.Row>



            <Form.Row>
                <Col>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                </Col>
            </Form.Row>
        </Form>
        </Container>

    </>
);

export default Registration;