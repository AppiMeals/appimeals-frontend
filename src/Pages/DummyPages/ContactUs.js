import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import MyMap from '../../Images/myMap.jpg';
import "./ContactUs.css";


class ContactUs extends Component {
    
    render(){

        return (
            <>
                <h1>Contact Us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="address">
                                appiMeals <br/>
                                Technology House <br/>
                                Manchester  <br/>
                                M2 5RT
                            </div>
                        <p>&nbsp;</p>
                            <div className="address">
                                0161 234 5000
                            </div>
                        <p>&nbsp;</p>
                            <div className="address">
                                <div className="row">
                                    Email us at: <a href="/">hello@appimeals.co.uk</a> or complete the form below...<br/>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        Your email address:
                                    </div>
                                    <div className="col">
                                        <input type="email"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        Subject: 
                                    </div>
                                    <div className="col">
                                        <select name="emailSubject">
                                            <option value="">Please select...</option>
                                            <option value="volvo">Login Issue</option>
                                            <option value="saab">Question about a Recipe</option>
                                            <option value="fiat">Media Enquiry</option>
                                            <option value="audi">Other (please specify in text)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        Subject (<i>if Other</i>):
                                    </div>
                                    <div className="col">
                                        <input type="text"></input>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                    <textarea className="contact-us-text" defaultValue="Type your question here.  We aim to answer emails with the same 
                                        business day." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            Find us here!
                            <Image className="image" src={MyMap}/>
                        </div>
                    </div>
                </div>
                </>
        )
    }
}

export default ContactUs; 