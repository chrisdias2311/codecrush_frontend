import React from 'react'
import InvalidUserCard from './InvalidFarmerCard';
import { useEffect } from 'react';
import { constant } from '../constants';
import axios from 'axios';
import { useState } from 'react';

function ValidateUser() {
    const [farmers, setFarmers] = useState([]);
    
    useEffect(() => {
        axios.get(constant.URL+"/api/farmer/invalidfarmers")
            .then((response) => {
                console.log(response);
                setFarmers(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>.</h1>
            <h1>Validate Farmers</h1>
            <div className="main">
                {
                    farmers.length > 0 ? farmers.map((item, index) =>
                        <InvalidUserCard
                            id={item._id}
                            firstname={item.firstname}
                            lastname={item.lastname}
                            phone={item.phone}
                            idimage={item.IdImage}
                            verified={item.verified}
                        />
                    ) : <h1>No users found</h1>
                }
            </div>
        </div>
    )
}

export default ValidateUser;
