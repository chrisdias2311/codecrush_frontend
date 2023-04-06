import React, { useState } from 'react'
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { constant, constants } from '../constants';

import LinearProgress from '@mui/material/LinearProgress';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        location:'',
    });
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    const handleLocationChange = (event) => {
        setFormData({ ...formData, location: event.target.value });
    }



    const submitSignupForm = (e) => {
        if (formData.email !== '' && formData.firstName !== '' && formData.lastName !== '' && formData.password !== '' && formData.location !== '') {
            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('email', formData.email);
            formdata.append('firstname', formData.firstName);
            formdata.append('lastname', formData.lastName);
            formdata.append('password', formData.password);
            formdata.append('location', formData.location);

            axios.post(constant.URL + '/api/user/register', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    setLoader(false)
                    if (res.status === 200) {
                        localStorage.clear();
                        localStorage.setItem('user', JSON.stringify(res.data));

                        const verifyemail = JSON.parse(localStorage.getItem('user')).email
                        formdata.append('verifyEmail', verifyemail);


                        axios.post(constant.URL+'/api/user/getuser', formdata, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(res => {
                                console.log(res);
                                if(res.status===200){
                                    localStorage.clear();
                                    localStorage.setItem('user', JSON.stringify(res.data));
                                    navigate('/validateotp/' + res.data._id)
                                }else{
                                    alert(res.data)
                                }
                            })
                            .catch(err => {
                                setError(true)
                                alert(err.response.data)
                            });


                    } else {
                        alert(res.data)
                    }
                    console.log("Reso: ", res);
                })
                .catch(err => {
                    setError(true)
                    alert(err.response.data)
                });
        } else {
            setError(true)
        }
    }

    return (
        <div className='signup'>

            <div className='signup_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Sign-up</h1>

                <div className='sp_form_and_button'>
                    <form >

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleEmailChange} label="Email*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.firstName} onChange={handleFirstNameChange} label="Firstname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.lastName} onChange={handleLastNameChange} label="Lastname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField fullWidth  className='inputField' id="outlined-basic" value={formData.location} onChange={handleLocationChange} label="Enter location*" variant="outlined" />
                        </div>
                    </form>


                    {
                        success ? <Alert severity="success">Logged in Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered the correct details & ID card format is jpeg/png, or maybe account already exists</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={submitSignupForm}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
