import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { constant } from '../constants';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carouselcard from './Carouselcard';


function ProductDetail() {
	const data = useSelector((state) => state);
	const [productData, setProductData] = useState([])

	const params = useParams();
	const [selectedproduct, setSelectedProduct] = useState([])

	useEffect(() => {
		console.log('Id: ', params.id)
		// setProductData(data.products.allProducts)

		const formdata = new FormData();
		formdata.append('id', params.id);

		axios.post(constant.URL + '/api/product/getproductdetails', formdata, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				console.log(res)
				setSelectedProduct(res.data)
				if(res.data.category==='Fruits'){
					setProductData(data.products.fruits)
				}else if(res.data.category==='Vegetables'){
					setProductData(data.products.vegetables)
				}else{
					setProductData(data.products.foodgrains)
				}
				
			})
			.catch(err =>
				console.log("This is the error", err),
			);
	}, [])

	const buyProduct = (ownerId, id) => {

		console.log(ownerId);
		console.log(id)

		const formdata = new FormData();
		formdata.append('id', id);
		formdata.append('ownerId', ownerId);
		formdata.append('name', JSON.parse(localStorage.getItem('user')).firstname + ' ' + JSON.parse(localStorage.getItem('user')).lastname);
		formdata.append('phone', '9820223032');
		formdata.append('location', JSON.parse(localStorage.getItem('user')).location);

		axios.post(constant.URL+'/api/transaction/createtransaction', formdata, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				
				console.log(res)
				
				if(res.status===200){
					alert("Product Brought successfully!");
				}
			})
			.catch(err => {
				
				console.log(err)
			});
	}

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1024 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1024, min: 800 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 800, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const product = productData.map(item => (
		<Carouselcard name={item.name} url={item.productImage} price={item.price} discription={item.description} />

	))


	return (
		<>

			{/* <!-- single product --> */}
			<div className="single-product ">
				<div className="container ">
					<div className="row">
						<div className="col-md-5  border shadow">
							<div className="single-product-img">
								<img src={selectedproduct.productImage} alt="" />
								{/* Image Here */}
							</div>
						</div>
						<div className="col-md-7">
							<div className="single-product-content ms-3">
								<p className="fw-bold fs-3 my-3">{selectedproduct.name}</p>
								<span className="text-muted d-flex justify-content-start my-2">Per Kg</span>
								<p className="d-flex fw-bold fs-5 justify-content-start"> $ {selectedproduct.price}</p>
								<p className="deatiltext">{selectedproduct.description}</p>
								<p className="d-flex justify-content-start my-3 fw-bold"><strong className='text-muted'>Category: </strong>{selectedproduct.category}</p>
								<div className="single-product-form">
									<form>
										<input className="qnty d-flex" type="number" placeholder="0" />
									</form>
									{/* <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a> */}
									<button type="button" onClick={() => buyProduct(selectedproduct.ownerId, selectedproduct._id)} className="d-flex btn btn-success mt-3 justify-content-start"><FontAwesomeIcon className='mt-1 pe-2' icon={faCartShopping} />Buy Now</button>
								</div>



							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end single product --> */}

			<div id='relate' class="row mt-5">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">
						<h3 className='fw-bold'><span class="orange-text fw-bold">Related</span> Products</h3>
						<p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>


			<div className='row my-3 mx-5'>

				<Carousel responsive={responsive}>

					{product}

				</Carousel>;
			</div>

		</>
	)
}





export default ProductDetail;

