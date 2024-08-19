import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './featureReusable.css'

const FeaturesReusable = ({title,para,img}) => {
  return (
    <div className="item">
 <Card >
    <Card.Img src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {para}
      </Card.Text>
    
    </Card.Body>
  </Card>
    </div>
   
  )
}

export default FeaturesReusable