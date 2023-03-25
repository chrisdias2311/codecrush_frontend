import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { constant } from '../constants';

function Login() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });

    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const handleUserNameChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
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



        if (formData.email !== '' && formData.password !== '') {
            setLoader(true);


            const formdata = new FormData();
            formdata.append('email', formData.email);
            formdata.append('password', formData.password);


            axios.post(constant.URL+'/api/user/login', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    setLoader(false);
                    console.log(res)

                    if(res.status===200){
                        localStorage.clear();
                        localStorage.setItem('user', JSON.stringify(res.data));
                        alert("Logged in successfully!")
                        setSuccess(false)
                        navigate('/')
                    }else{
                        alert(res.data)
                    }
                })
                .catch(err => {
                    setLoader(false);
                    setError(true);
                    console.log("Frontend err: ",err)
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

                <h1 class="tit">Login as User</h1>
                <div className='ul_form_and_button'>
                    <form >

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleUserNameChange} label="Email" variant="outlined" />
                        </div>
                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
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

                    <Typography sx={{ fontSize: '20px' }} color="text.secondary">
                        Don't have an account ?
                    </Typography>
                    <Button onClick={goToSignup} size="small">Go to signup</Button>


                </div>
            </div>
        </div>
    )
}

export default Login
