import React from 'react'
import './Test.css';

function FarmerBoard() {
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
                                <th>Sr</th>
                                <th>Order Id</th>
                                <th>Product Name</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><a href="#">Michael Holz</a></td>
                                <td>London</td>
                                <td>Jun 15, 2017</td>
                                <td><span class="status text-success">&bull;</span> Delivered</td>
                                <td>₹ 254</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="#"> Paula Wilson</a></td>
                                <td>Madrid</td>
                                <td>Jun 21, 2017</td>
                                <td><span class="status text-info">&bull;</span> Shipped</td>
                                <td>₹ 1,260</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td><a href="#">Antonio Moreno</a></td>
                                <td>Berlin</td>
                                <td>Jul 04, 2017</td>
                                <td><span class="status text-danger">&bull;</span> Cancelled</td>
                                <td>₹ 350</td>

                            </tr>
                            <tr>
                                <td>4</td>
                                <td><a href="#"> Mary Saveley</a></td>
                                <td>New York</td>
                                <td>Jul 16, 2017</td>
                                <td><span class="status text-warning">&bull;</span> Pending</td>
                                <td>₹ 1,572</td>

                            </tr>
                            <tr>
                                <td>5</td>
                                <td><a href="#">Martin Sommer</a></td>
                                <td>Paris</td>
                                <td>Aug 04, 2017</td>
                                <td><span class="status text-success">&bull;</span> Delivered</td>
                                <td>₹ 580</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>



    )
}

export default FarmerBoard;