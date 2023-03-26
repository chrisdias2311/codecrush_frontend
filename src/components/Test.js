// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
// <title>Bootstrap Order Details Table with Search Filter</title>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
// <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
// <scrip src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

import './Test.css';
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Test() {
  return (
    <div>
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
                        <th>Customer</th>
                        <th>Location</th>
                        <th>Order Date</th>						
                        <th>Status</th>						
                        <th>Net Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="#"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Michael Holz</a></td>
                        <td>London</td>
                        <td>Jun 15, 2017</td>                        
                        <td><span class="status text-success">&bull;</span> Delivered</td>
                        <td>$254</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="#"><img src="https://www.tutorialrepublic.com/examples/images/avatar/1.jpg" class="avatar" alt="Avatar"/> Paula Wilson</a></td>
                        <td>Madrid</td>                       
                        <td>Jun 21, 2017</td>
                        <td><span class="status text-info">&bull;</span> Shipped</td>
                        <td>$1,260</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><a href="#"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Antonio Moreno</a></td>
                        <td>Berlin</td>
                        <td>Jul 04, 2017</td>
                        <td><span class="status text-danger">&bull;</span> Cancelled</td>
                        <td>$350</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>                        
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="#"><img src="https://www.tutorialrepublic.com/examples/images/avatar/1.jpg" class="avatar" alt="Avatar"/> Mary Saveley</a></td>
                        <td>New York</td>
                        <td>Jul 16, 2017</td>						
                        <td><span class="status text-warning">&bull;</span> Pending</td>
                        <td>$1,572</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td><a href="#"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Martin Sommer</a></td>
                        <td>Paris</td>
                        <td>Aug 04, 2017</td>
                        <td><span class="status text-success">&bull;</span> Delivered</td>
                        <td>$580</td>
                        <td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>        
</div>     

        



    </div>
  )
}

export default Test;



