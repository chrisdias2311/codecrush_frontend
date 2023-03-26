
import "../components/UpdateTrans.css";
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { constant } from "../constants";




function UpdateTrans() {
    const params = useParams()
    const [transaction, setTransaction] = useState([]);


    const updateOne = () => {
        const formdata = new FormData();
        formdata.append('id', params.id);
        axios.post(constant.PRODUCTION + '/api/transaction/updateone', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200){
                    alert("Order updated successfully")
                }
                axios.post(constant.PRODUCTION + '/api/transaction/gettransaction', formdata, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => {
                        
                        console.log(res)
                        setTransaction(res.data)
                    })
                    .catch(err =>
                        console.log("This is the error", err),
                    );
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }

    const updateTwo = () => {
        const formdata = new FormData();
        formdata.append('id', params.id);
        axios.post(constant.PRODUCTION + '/api/transaction/updatetwo', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200){
                    alert("Order updated successfully")
                }
                axios.post(constant.PRODUCTION + '/api/transaction/gettransaction', formdata, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(res => {
                        console.log(res)
                        setTransaction(res.data)
                    })
                    .catch(err =>
                        console.log("This is the error", err),
                    );
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }

    useEffect(() => {
        console.log('Id: ', params.id)

        const formdata = new FormData();
        formdata.append('id', params.id);

        axios.post(constant.PRODUCTION + '/api/transaction/gettransaction', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                setTransaction(res.data)
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }, [])


    return (
        <div className="container">
            <div id='update-card' class="card">
                <div class="card-header fw-bold fs-1">
                    Order Details
                </div>
                <div class="card-body py-3">
                    <h4 class="card-title py-2 ">Order ID: <strong>{transaction._id}</strong></h4>
                    <h4 class="card-title py-2">Buyer Name: {transaction.buyerName}</h4>
                    <h4 class="card-title py-2">Buyer Contact: {transaction.buyerPhone}</h4>
                    <h4 class="card-title py-2">Seller Name: {transaction.ownerName}</h4>
                    <h4 class="card-title py-2">Seller Contact: {transaction.ownerPhone} </h4>

                    {
                        (transaction.status === 'Ordered' || transaction.status === 'Out for delivery') ?
                            <>
                                {
                                    transaction.status === 'Ordered' ?
                                        <button type="button" onClick={updateOne} class=" py-3 btn btn-primary m-3 btn-lg"><FontAwesomeIcon className="mx-2" icon={faTruckFast} size="lg" />Out for Delivery</button>
                                        :
                                        <button type="button" onClick={updateTwo} class="py-3 btn btn-success m-3 btn-lg"><FontAwesomeIcon className="mx-2" icon={faHouseCircleCheck} size="lg" />Delivered</button>
                                }

                            </>
                            :
                            <>
                                <br></br>
                                <h2 style={{ color: 'green' }}>Ordered delivered successfully!</h2>
                            </>
                    }

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default UpdateTrans