import React from 'react'
import './Test.css';
import { useEffect } from 'react';
import axios from 'axios';
import { constant } from '../constants';
import { useState } from 'react';



function FarmerBoard() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const formdata = new FormData();
        formdata.append('id', JSON.parse(localStorage.getItem('farmer'))._id);

        axios.post(constant.URL + '/api/transaction/getmytransactions', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res);
                setTransactions(res.data);
            })
            .catch(err => {
                console.log("Frontend err: ", err)
            });

    }, [])

    return (
        <div class="container-xl">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-4">
                                <h2 className='fw-bold'>Order <b>Details</b></h2>
                            </div>

                        </div>
                    </div>

                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Product Name</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                transactions.length > 0 ? transactions.map((item, index) =>
                                    <tr>
                                        <td><a>{item._id}</a></td>
                                        <td>{item.productName}</td>
                                        <td>{item.orderDate}</td>
                                        <td><span class="status text-success">&bull;</span>{item.status}</td>
                                    </tr>
                                ) : <h1>No products found</h1>
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </div>



    )
}

export default FarmerBoard;