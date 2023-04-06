import React from 'react'
import './InvalidFarmerCard.css';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import axios from 'axios';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function InvalidUserCard({ id, pid, email, firstname, lastname, phone, year, dept, div, idimage, verified }) {
    const dispatch = useDispatch();

    const register = (userId) => {
        axios.put(`https://uniexserver.onrender.com/api/user/validateuser/${userId}`, {
            validity: 'Yes'
        })
            .then(res => {
                alert("User Registered Successfully")
                // dispatch(registerUser(userId))
            })
            .catch(err => console.log(err));
    }

    const decline = (userId) => {
        axios.put(`https://uniexserver.onrender.com/api/user/declineuser/${userId}`, {
            validity: 'Decline'
        })
            .then(res => {
                alert("User Registration Declined")
                // dispatch(declineUser(userId))
            })
            .catch(err => console.log(err));
        // dispatch(declineUser(userId))
    }


    return (
        <div className='maincard'>
            <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={idimage}
                    title={firstname + " " + lastname}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <Typography gutterBottom variant="h6" component="div">
                            Name: {firstname} {lastname}
                        </Typography>
                        <Typography variant="body" color="text.secondary">
                            Phone: <strong>{phone}</strong>
                        </Typography>
                        {
                            (verified === 'yes') ? <h3 className='verified'>Verified</h3> : <h3 className='unverified'>Unverified</h3>
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className='controlButton' sx={{ margin: 1 }} variant="contained" onClick={() => register(id)}>Register</Button>
                    <Button className='controlButtons' sx={{ margin: 1 }} variant="contained" color='error' onClick={() => decline(id)}>Decline</Button>
                    <a className='link_tag' href={idimage} target="_blank" rel="noreferrer"> View </a>
                </CardActions>
            </Card>

        </div>



    )
}

export default InvalidUserCard
