import React, { Component}  from 'react';
import {Nav} from 'react-bootstrap';
import "./Blog.css";

class Blog extends Component {
    
    render(){

        return (
            <>
                <h1>Blog</h1>

                <div className="container">

                <div className="row">
                        <div className="col-12">
                            <h2>Up-Coming Features!</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Date
                        </div>
                        <div className="col-2">
                            9th July, 2020
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            By
                        </div>
                        <div className="col-2">
                            <a href="/">Shobir</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <p>We are pleased to present to you our Product Map.  Our team has been working very hard for the past couple of weeks.  
                        While wrangling the in’s and out’s of React, we each have learned so much and look forward to adding these features in future:</p>

                        <ul>
                            <li>This</li> 
                            <li>This</li> 
                            <li>And That</li> 
                        </ul>
                            
                        <p>We are ever so grateful to our growing appiMeals family and look forward to announcing these features in the near future.  
                            As always, you can <a href="/ContactUs">contact us</a> if you have any questions or need some customer support.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-12">
                            <h2>New API Partner</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Date
                        </div>
                        <div className="col-2">
                            7th July, 2020
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            By
                        </div>
                        <div className="col-2">
                            <a href="/">Illiyan</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <p>While we enjoyed learning so much about external APIs with Spoonacular, we have decided 
                            to switch our recipe API provider to <a href="https://www.edamam.com/">Edamam</a>!
                            </p>

                        <p>Sign In and check out all of the new delicious recipes that we now have on offer!  
                        AppiMeals customers who have orders pending recipes Spoonacular’s can be assured that information 
                        is still retained in your customer account.  Please bear with us during this switch over and do 
                        not hesitate to contact our customer support team, using the Contact Us link below.</p>
                        
                    </div>
                </div> */}
            </>
        )
    }
}

export default Blog; 