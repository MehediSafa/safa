import React from 'react'
import './footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/logo.png'

const Footers = () => {
  return (
    <section className='footer_main'>
        <Container>
        <div className="footer_body">
    <Row>
        <Col lg={6}>
            <div className="footer_left">
                <img className='footer_logo' src={logo} alt="" />
                <h2>We are always open to discuss your project and improve your online presence.</h2>
                <div className="contact">
                    <div className="email">
                        <h2>Email me at</h2>
                        <p>contact@website.com</p>
                    </div>
                    <div className="email">
                        <h2>Email me at</h2>
                        <p>contact@website.com</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col lg={6}>
        <div className="footer_right">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                </div>
        </Col>  
    </Row>
        </div>
        </Container>
    </section>
  )
}

export default Footers