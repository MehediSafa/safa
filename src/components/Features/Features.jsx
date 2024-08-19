import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './features.css'
import FeaturesReusable from '../reusable/FeaturesReusable'
import featureimg1 from '../../assets/feature1.png'

const Features = () => {
  return (
    <section className='features_main'>
        
            <Container>
         <Row>
            <Col lg = {{span:6,offset:3}}>
            <div className="features_header">
                <h2>Features</h2>
                <h3>
                Design that solves problems, one product at a time
                </h3>
            </div>
            </Col>
         </Row>
                
               <Row>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
                <Col lg={4}>
                <FeaturesReusable img={featureimg1} title = "Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                </Col>
               </Row>
            </Container>
        
    </section>
  )
}

export default Features