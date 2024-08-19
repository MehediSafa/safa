import React from 'react'
import './howwork.css'
import { Col, Container, Row, Card } from 'react-bootstrap'

import Howworkresuable from '../reusable/Howworkresuable'

const Howwork = () => {
    return (
        <section className='howwork_main'>
            <Container>
                <Row>
                    <Col lg={4}>

                        <div className="howwork_left">
                            <Card className='item'>
                                <Card.Body>
                                    <Card.Title> <h2>How we work</h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..</h3>
                                    </Card.Text>
                                    <Card.Link href="#"> <a href="">Get in touch with us</a></Card.Link>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col lg={{ span: 6, offset: 2 }}>
                    <div className="howwork_right">
                    <Row>
                        
                        <Col lg={6}>
                        
                        <Howworkresuable title = "Strategy" para = "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                        </Col>
                        <Col lg={6}>
                        <Howworkresuable title ="Wireframing" para = "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                        </Col>
                        <Col lg={6}>
                        <Howworkresuable title="Design" para = "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                        </Col>
                        <Col lg={6}>
                        <Howworkresuable title="Development" para = "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                        </Col>
                    </Row>
                    </div>
                  
                        
                    </Col>


                </Row>
            </Container>
        </section>
    )
}

export default Howwork