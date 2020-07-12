import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import MyMap from '../../Images/myMap.jpg';
import "./Blog.css";


class ContactUs extends Component {
    
    render(){

        return (
            <>
                <h1>Contact Us</h1>

                <div className="container">
                    <div>
                        appiMeals <br/>
                        Technology House <br/>
                        Manchester  <br/>
                        M2 5RT
                    </div>
                    <div>
                        0161 234 5000
                    </div>
                    <div>
                        <a href="/">hello@appimeals.co.uk</a>
                    </div>
                    <div>
                        Map with Driving Directions
                        <Image src={MyMap}/>
                    </div>


                </div>
                
                </>
        )
    }
}

export default ContactUs; 