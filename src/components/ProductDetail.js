import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ProductDetail() {
    return (
        <>

{/* <!-- single product --> */}
	<div className="single-product ">
		<div className="container">
			<div className="row">
				<div className="col-md-5 border shadow">
					<div className="single-product-img">
						<img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/" alt=""/>
                        {/* Image Here */}
					</div>
				</div>
				<div className="col-md-7">
					<div className="single-product-content">
						<p className="fw-bold fs-3 my-3">Green apples have polyphenols</p>
                        <span className="text-muted d-flex justify-content-start my-2">Per Kg</span>
						<p className="d-flex fw-bold fs-5 justify-content-start"> $50</p>
						<p className="deatiltext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
						<div className="single-product-form">
							<form>
								<input className="qnty d-flex" type="number" placeholder="0"/>
							</form>
							{/* <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a> */}
							<button type="button" className="d-flex btn btn-success mt-3 justify-content-start"><FontAwesomeIcon className='mt-1 pe-2' icon={faCartShopping} />Add to cart</button>
                            <p className="d-flex justify-content-start my-3 fw-bold"><strong className='text-muted'>Categories: </strong>Fruits, Organic</p>
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


            


        </>
    )
}

export default ProductDetail;