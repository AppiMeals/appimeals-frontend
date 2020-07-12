import React,  { Component }  from 'react';
import { Image } from 'react-bootstrap';
import Nichole from '../../Images/Nichole-head-shot-500x500.png';
import Jennifer from '../../Images/Jennifer-head-shot-810x810.png';
import "./FAQ.css";

class FAQ extends Component {
    
    render(){

        return (
            <>
                <h1>About Us</h1>

                <div className="container">

                    <div className="row">
                        <div className="col-3">
                            <Image className="image" src={Nichole}/> <br />
                            Nichole Spencer
                        </div>
                        <div className="col">
                        An enthusiastic graduate with a real skill for organisation, taking the leap 
                        towards technology. Experienced coordinator of eight years within the healthcare 
                        and charitable sectors, growing into leadership and management roles. 
                        Consistently recognised for project-management abilities and improving 
                        processes within my team, I take pride in creating a welcoming and 
                        supportive environment with my colleagues. Motivated to join a team where 
                        continued learning and creativity are prioritised.
                        </div>
                    </div>

<p>&nbsp;</p>

                    <div className="row">
                        <div className="col-3">
                        <Image className="image" src={Jennifer}/> <br />
                            Jennifer Calland
                        </div>
                        <div className="col">
                        I am a mum with a background in building web applications, e-commerce 
                        integrations, and business analysis gone fully fledged tech with 15 years 
                        of experience in software and retail industries. Before taking a career 
                        break to raise children, I developed and deployed web services to automate 
                        processes and later created and deployed a bespoke e-commerce website that 
                        linked into the store’s POS and automated back office picking and shipping 
                        processes. I enjoy challenges and making a huge impact and hope to continue 
                        doing so in future roles as a software engineer while moving into data science. 
                        </div>
                    </div>


                    <p>&nbsp;</p>

                    <div className="row">
                        <div className="col-3">
                            [photo]
                        </div>
                        <div className="col">
                            Personal Statement from CV
                        </div>
                    </div>

<p>&nbsp;</p>


                    <div className="row">
                        <div className="col-3">
                            [photo]
                        </div>
                        <div className="col">
                            Personal Statement from CV
                        </div>
                    </div>

                </div>


            </>
        )
    }
}

export default FAQ; 