import React from 'react'
import './howworkreusable.css'
import Card from 'react-bootstrap/Card';
import pointer1 from '../../assets/pointer1.png'


const Howworkresuable = ({title,para}) => {
  return (
    <Card className='item'>
      <Card.Img  src={pointer1} />
      <Card.Body>
        <Card.Title> <h2>{title}</h2> </Card.Title>
        <Card.Text>
           <p>{para}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
};

export default Howworkresuable;