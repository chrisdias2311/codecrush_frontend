import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carouselcard from './Carouselcard';


function ProductDetail() {

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

    const producData = [
        {
            id: 1,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Vegetable",
            price: "$20",
            discription: "Some text About Vegetable here...."

        },

        {
            id: 2,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Fruits",
            price: "$30",
            discription: "Some text About Vegetable here...."

        },

        {
            id: 3,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Seeds",
            price: "$40",
            discription: "Some text About Vegetable here...."

        },

        {
            id: 4,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Farms",
            price: "$50",
            discription: "Some text About Vegetable here...."

        },

        {
            id: 5,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Farms",
            price: "$50",
            discription: "Some text About Vegetable here...."

        },

        {
            id: 6,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Farms",
            price: "$50",
            discription: "Some text About Vegetable here...."

        },


        {
            id: 7,
            imageurl: "https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/",
            name: "Farms",
            price: "$50",
            discription: "Some text About Vegetable here...."

        }


    ]


    const product = producData.map(item => (
        <Carouselcard name={item.name} url={item.imageurl} price={item.price} discription={item.discription} />

    ))


    return (
        <>

            {/* <!-- single product --> */}
            <div className="single-product ">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-5  border shadow">
                            <div className="single-product-img">
                                <img src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/" alt="" />
                                {/* Image Here */}
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content ms-3">
                                <p className="fw-bold fs-3 my-3">Green apples have polyphenols</p>
                                <span className="text-muted d-flex justify-content-start my-2">Per Kg</span>
                                <p className="d-flex fw-bold fs-5 justify-content-start"> $50</p>
                                <p className="deatiltext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                                <div className="single-product-form">
                                    <form>
                                        <input className="qnty d-flex" type="number" placeholder="0" />
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


            {/* <div className='row my-3'>

                <div className='recomended'>

                    <Carousel className='carousel-inner'>
                        <Carousel.Item className='carousel-item'>

                            <div class="card">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#!" class="btn btn-primary">Button</a>
                                </div>
                            </div>


                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>


                            <div class="card">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#!" class="btn btn-primary">Button</a>
                                </div>
                            </div>



                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='carousel-item'>



                            <div class="card">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#!" class="btn btn-primary">Button</a>
                                </div>
                            </div>



                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>








                </div>


            </div> */}

            <div className='row my-3 mx-5'>

                <Carousel responsive={responsive}>

                    {product}

                </Carousel>;



            </div>












        </>
    )
}





export default ProductDetail;

