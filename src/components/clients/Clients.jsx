import React from 'react'
import './clients.css'
import client from '../../assets/client.png'

import { Col, Container, Row } from 'react-bootstrap'
const Clients = () => {
  return (
    <section className='clients_main'>
   <Container>
        <Row>
            <Col lg={4}>
            <div className="clients_left">
                <h2>What our clients say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>
            </Col >

            <Col lg={8}>
            <div className="clients_right">
                <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                <div className="clients_right_bottom">
                    <div className="image">
                        <img src={client} alt="" />
                    </div>
                    <div className="names">
                        <h2>Jenny Wilson</h2>
                        <h3>Vice President</h3>
                    </div>
                </div>
            </div>
            </Col>
        </Row>
   </Container>
    </section>
  )
}

export default Clients