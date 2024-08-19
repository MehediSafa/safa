import React from 'react'
import './banner.css'
import {Container, Row,Col,Card} from 'react-bootstrap'
import bannerImg from '../../assets/bannerimg.png'

const Banner = () => {
  return (
    <section className='home_banner'>
       <Container>
        <div className="banner_main">
        <Row>

        <Col lg={6}>
            <div className="banner_left">
        <Card className='item' >
         <Card.Body>
        <Card.Title> <h2 className='banner_left_h'>Building stellar websites for early startups</h2>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3></Card.Subtitle>
        <div className="card_links">

        <Card.Link href="#"><a href="">View our work</a></Card.Link>

        <Card.Link href="#"><a href="">View Pricing </a></Card.Link>
        </div>
    </Card.Body>
    
    </Card>
</div>

</Col>
<Col lg={6}>
<div className="banner_right">
    <img src={bannerImg} alt="" />
</div>
</Col>
</Row>
        </div>
        
       </Container>
    </section>
  )
}

export default Banner