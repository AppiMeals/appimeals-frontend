import React,  { Component }  from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
// OUR TEAM!!!  =D
import Nichole from '../../Images/Nichole-head-shot-500x500.png';
import Jennifer from '../../Images/Jennifer-head-shot-810x810.png';
import Illiyan from '../../Images/Illiyan-head-shot-540x540.png';
import Shobir from '../../Images/Shobir-head-shot-441x441.png';

import "./FAQ.css";

class FAQ extends Component {
    
    render(){

        return (
            <>
                <h1>About Us</h1>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Image className="image" src={Nichole}/> <br />
                            Nichole Spencer
                        </Col>
                        <Col sm={8}>
                            An enthusiastic graduate with a real skill for organisation, taking the leap 
                            towards technology. Experienced coordinator of eight years within the healthcare 
                            and charitable sectors, growing into leadership and management roles. 
                            Consistently recognised for project-management abilities and improving 
                            processes within my team, I take pride in creating a welcoming and 
                            supportive environment with my colleagues. Motivated to join a team where 
                            continued learning and creativity are prioritised.
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            &nbsp;
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Image className="image" src={Jennifer}/> <br />
                            Jennifer Calland
                        </Col>
                        <Col sm={8}>
                            I am a mum with a background in building web applications, e-commerce 
                            integrations, and business analysis gone fully fledged tech with 15 years 
                            of experience in software and retail industries. Before taking a career 
                            break to raise children, I developed and deployed web services to automate 
                            processes and later created and deployed a bespoke e-commerce website that 
                            linked into the store’s POS and automated back office picking and shipping 
                            processes. I enjoy challenges and making a huge impact and hope to continue 
                            doing so in future roles as a software engineer while moving into data science. 
                        </Col>
                        </Row>
                    <Row>
                        <Col sm={12}>
                            &nbsp;
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Image className="image" src={Illiyan}/> <br />
                            Illiyan Dimitrov
                        </Col>
                        <Col sm={8}>
                            Self driven, friendly individual with big ambitions to build a solid career into Software 
                            Development. Completed the Tech Returners program "Your Journey Into Tech" recently. By doing 
                            so I built rock-hard foundations in the Web Development processes. Worked as Process Engineer 
                            in the past. This involved me collaborating with developers, joining their catch ups, sprint 
                            planning and retrospectives. Discussing the projects technical aspects and finding the optimal 
                            business satisfactory solutions we can build in the frames provided.
                       </Col>
                       </Row>
                    <Row>
                        <Col sm={12}>
                            &nbsp;
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Image className="image" src={Shobir}/> <br />
                            Shobir Chowdhery
                        </Col>
                        <Col sm={8}>
                            Experienced analyst within analytical, software, data and finance roles. Looking to transfer 
                            skill set of problem solving, data, communication, project management and teamwork into a Software 
                            developer career. Motivated and driven to expand experience and knowledge in this field. Currently 
                            project leading data migration and providing project support within a software-based project team, 
                            collaborating with developers and key stakeholders within management.
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default FAQ; 