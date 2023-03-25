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

import { constant } from '../constants';

import LinearProgress from '@mui/material/LinearProgress';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        image: '',
    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }

    const handleIdImageChange = async (event) => {
        setFormData({ ...formData, image: event.target.files[0] });

        imageData.append('file', formData.image);
        console.log(formData.image.name);
        setImageUpload(true);
    }



    const submitSignupForm = (e) => {
        if (formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.password !== '' && formData.image !== '') {
            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('firstname', formData.firstName);
            formdata.append('lastname', formData.lastName);
            formdata.append('phone', formData.phone);
            formdata.append('password', formData.password);
            formdata.append('file', formData.image);

            axios.post(constant.URL + '/api/farmer/register', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    setLoader(false);
                    console.log(res);
                    if (res.status === 200) {
                        localStorage.clear();
                        localStorage.setItem('farmer', JSON.stringify(res.data));
                        alert("Account created successfuly!")

                        formdata.append('farmerPhone', JSON.parse(localStorage.getItem('farmer')).phone);
                        axios.post(constant.URL + '/api/farmer/getfarmer', formdata, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(res => {
                                localStorage.clear();
                                localStorage.setItem('farmer', JSON.stringify(res.data));
                                console.log(res);
                            })
                            .catch(err => {
                                setError(true)
                                alert(err.response.data)
                            });
                    }

                })
                .catch(err => {
                    setLoader(false);
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
                <br></br>
                <h1>Sign-up as Farmer</h1>

                <div className='sp_form_and_button'>
                    <form >
                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no*" variant="outlined" />
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

                        <h6>Upload valid GOVT Identity card*</h6>
                        <Button variant="contained" value={formData.image} component="label" onChange={handleIdImageChange}>
                            Upload
                            <input hidden type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleIdImageChange}>
                            <input hidden type="file" />
                            <PhotoCamera />
                        </IconButton>

                        <br></br>
                        <br></br>

                        {
                            imageUpload ?
                                <Alert severity="success">{formData.image.name}</Alert>
                                :
                                <div></div>
                        }
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
