import React from 'react'
import './userform.css'
import { Col, Container, Row,Form ,Button} from 'react-bootstrap'
import userphoto from '../../assets/userform.png'


const UserForm = () => {
  return (
    
    <section className='userForm_main'>
        <Container>
            <div className="userFormBody">
                <Row>
                    <Col lg={6}>
                        <div className="image">
                            <img src={userphoto} alt="" />
                            <div className="writings">
                                <h2>
                                Building stellar websites for early startups
                                </h2>
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim. </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg= {6}>
                        <div className="userFormRight">
                       <h2>Send inquiry</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                       <div className="userInp">
                       <form action="">
                                <input type="text" placeholder='Your Name' />
                                <input type="text" placeholder='Email' />
                                <input className='last' type="text" placeholder='Paste your Figma design URL' />
                              <div className="inquiry">
                              <a href="">Send an Inquiry</a>
                                </div>  
                             
                            </form>
                       </div>
                          
        
        
                        </div>
    
                    </Col>
                </Row>
            </div>
        </Container>

    </section>
  )
}

export default UserForm