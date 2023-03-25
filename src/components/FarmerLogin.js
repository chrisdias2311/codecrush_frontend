import React, { useState } from 'react'
import './FarmerLogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { constant } from '../constants';

function FarmerLogin() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        phone:'',
        password: '',

    });

    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }

    const goToSignup = (e) => {
        e.preventDefault();
        navigate('/signup')
    }


    const submitSignupForm = (e) => {
        e.preventDefault();



        if (formData.phone !== '' && formData.password !== '') {
            setLoader(true);

            const formdata = new FormData();
            formdata.append('phone', formData.phone);
            formdata.append('password', formData.password);

            axios.post(constant.URL+'/api/farmer/login', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    setLoader(false);
                    console.log(res)
                    
                    if(res.status===200){
                        alert("Logged in successfully");
                        localStorage.clear();
                        localStorage.setItem('farmer', JSON.stringify(res.data));
                    }
                })
                .catch(err => {
                    setLoader(false)
                    setError(true);
                    console.log(err)
                });
        } else {
            setError(true);
        }
    }



    return (
        <div className='userlogin'>
            <br></br>
            <br></br>

            <div className='userlogin_container'>

                {
                    loader ?
                        <LinearProgress /> : <></>
                }

                <br></br>

                <h1 class="tit">Login as Farmer</h1>
                <div className='ul_form_and_button'>
                    <form >

                        <div className='inputField'>
                            <TextField className='inputField' type='number' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone number*" variant="outlined" />
                        </div>
                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password*" variant="outlined" />
                        </div>
                        <br></br>
                        <br></br>
                    </form>
                    <Button variant="contained" onClick={submitSignupForm}>
                        Login
                    </Button>

                    <br></br>
                    <br></br>

                    {
                        success ? <Alert severity="success">Logged in Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered the correct details!</Alert> : <></>
                        )
                    }

                    <br></br>
                    


                </div>
            </div>
        </div>
    )
}

export default FarmerLogin
