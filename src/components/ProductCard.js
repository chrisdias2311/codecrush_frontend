import React from 'react'
import './ProductCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css'
import { constant } from '../constants';


function ProductCard({ id, ownerId, name, description, category, price, image, link, date }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notification, setNotification] = useState(false);
  const [userValidity, setUserValidity] = useState('');


  const viewProductDetails = (id, category) => {
    navigate('/productdetails/' + id)
    const formdata = new FormData();
    formdata.append('id', JSON.parse(localStorage.getItem('user'))._id)
    formdata.append('category', category);

    axios.post(constant.URL + '/api/user/productclick', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("Resp: ", res);
      })
      .catch(err => {
        alert(err.response.data)
      });
  }


  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     setUserValidity(JSON.parse(localStorage.getItem('user')).validity)
  //   }
  // }, [])

  // onClick={() => viewProductDetails(id)}
  return (
    <div className="product" onClick={() => viewProductDetails(id, category)} >
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          sx={{ marginTop: 0 }}
          image={image}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.slice(0, 50) + "...."}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Description: </strong>{description.slice(0, 50) + "...."}
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary">
            <strong>Category: </strong> {category}
          </Typography>
          <br></br>
          <Typography component="div">
            Price: ${price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard
