import React from 'react'
import './projects.css'
import { Col, Container, Row } from 'react-bootstrap'
import projectImg from '../../assets/projectimg.png'
import projectImg2 from '../../assets/projectimg2.png'
import projectImg3 from '../../assets/projectimg3.png'
const Projects = () => {
  return (
    <section className='project_main'>
        <Container>

        <Row>
            <Col lg = {5}>
            <div className="project_left">

            <h2>View our projects</h2>
            </div>
           
            </Col>
            <Col lg={{span:3 , offset:4}}>
            <div className="project_right">

            <p>View More</p>
            </div>
            </Col>

        </Row>
        <div className="project_body">
            <Row>
                <Col lg = {8}>
                <img src={projectImg} alt="" /> 
                </Col>
                <Col lg = {4}>
                <div className="project_body_right">
                <img src={projectImg2} alt="" className='top'/>
                <img src={projectImg3} alt="" />
                </div>
                </Col>
                
                
            </Row>
        </div>
        </Container>
    </section>
  )
}

export default Projects