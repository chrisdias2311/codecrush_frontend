
import "../components/UpdateTrans.css";
import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouseCircleCheck, faTruckFast} from "@fortawesome/free-solid-svg-icons";




function UpdateTrans() {
    return (
        <div className="container">
            <div id='update-card' class="card">
                <div class="card-header fw-bold fs-1">
                    Order Details
                </div>
                <div class="card-body py-3">
                    <h4 class="card-title py-2 ">Order ID: </h4>
                    <h4 class="card-title py-2">Buyer Name: </h4>
                    <h4 class="card-title py-2">Buyer Contact: </h4>
                    <h4 class="card-title py-2">Seller Name: </h4>
                    <h4 class="card-title py-2">Seller Contact: </h4>

                    <button type="button" class=" py-3 btn btn-primary m-3 btn-lg"><FontAwesomeIcon className="mx-2" icon={faTruckFast} size="lg" />Out for Delivery</button>
                    <button type="button" class="py-3 btn btn-success m-3 btn-lg"><FontAwesomeIcon className="mx-2" icon={faHouseCircleCheck} size="lg" />Delivered</button>
                    
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default UpdateTrans