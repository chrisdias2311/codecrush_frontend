import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';



export default function Carouselcard(props) {
  return (
    <div>
    <Card className='h-100 border shadow' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.discription}
            </Card.Text>
            {/* <Button variant="primary">Buy now</Button> */}
        </Card.Body>
    </Card>
</div>
  )
}
