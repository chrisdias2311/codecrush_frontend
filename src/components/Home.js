import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { constant } from '../constants';
import Carousel from 'react-bootstrap/Carousel';

import ProductCard from './ProductCard';

import Pic1 from '../Images/picveg1.jpg'
import Pic2 from '../Images/picveg2.jpg'
import Pic3 from '../Images/picveg3.jpg'

import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { setFruitsButton, setVegetablesButton, setFoodgrainsButton, clearFilters } from '../redux/actions/actions';



import { setProducts, setReccomendedProducts, setFruits, setVegetables, setFoodgrains } from "../redux/actions/actions";


function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [allProducts, setAllProducts] = useState(false);

  const [search, setSearch] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  const handleSearch = (e) => {
    setTextSearch(e.target.value)
    if (data.products.buttons.allProducts === true) {
      // dispatch(searchAllProducts(e.target.value))
    } else if (data.products.buttons.stationery) {
      // dispatch(searchStationery(e.target.value))
    } else if (data.products.buttons.notes) {
      // dispatch(searchNotes(e.target.value))
    } else if (data.products.buttons.previouspapers) {
      // dispatch(searchPreviousPapers(e.target.value))
    } else if (data.products.buttons.enotes) {
      // dispatch(searchEnotes(e.target.value))
    }
    setSearch(data.products.searchproducts)
  }

  const filterFruits = () => {
    dispatch(setFruitsButton())
  }
  const filterVegetables = () => {
    dispatch(setVegetablesButton())
  }
  const filterFoodGrains = () => {
    dispatch(setFoodgrainsButton())
  }
  const clearAllFilters = () => {
    dispatch(clearFilters())
  }

  useEffect(() => {
    if (data.products.buttons.fruitsButton === true) {
      console.log("----------------------Reloaded------------------------------------------------------")
      setAllProducts(data.products.fruits)
    } else if (data.products.buttons.vegetablesButton === true) {
      console.log("----------------------Reloaded------------------------------------------------------")
      setAllProducts(data.products.vegetables)
    } else if (data.products.buttons.foodgrainsButton === true) {
      setAllProducts(data.products.foodgrains)
    }else if (data.products.buttons.search === true) {
      setAllProducts(data.products.searchproducts)
    }  else if (data.products.reccomended.length !== 0) {
      setAllProducts(data.products.reccomended)
    } else if (data.products.allProducts.length !== 0) {
      setAllProducts(data.products.allProducts)
    } else {
      if (localStorage.getItem('user')) {
        const formdata = new FormData();
        formdata.append('id', JSON.parse(localStorage.getItem('user'))._id);
        axios.post(constant.URL + '/api/product/getproducts', formdata, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            console.log(res)
            if (res.data.reccomended.length !== 0) {
              setAllProducts(res.data.reccomended);
            } else {
              setAllProducts(res.data.allproducts);
            }
            dispatch(setProducts(res.data.allproducts));
            dispatch(setReccomendedProducts(res.data.reccomended))
            dispatch(setFruits())
            dispatch(setVegetables())
            dispatch(setFoodgrains())
          })
          .catch(err => {
            console.log("Frontend err: ", err)
          });
      } else {
        axios.get(constant.URL + '/api/product/allproducts')
          .then((res) => {
            console.log(res)
            setAllProducts(res.data)
            dispatch(setProducts(res.data));
            dispatch(setFruits())
            dispatch(setVegetables())
            dispatch(setFoodgrains())
          })
          .catch(err => {
            console.log("Frontend err: ", err)
          });
      }



    }
  }, [data.products.buttons]);

  console.log("This is the state:", data);



  return (
    <div>
      <br></br> <br></br>
      <div>
        <Carousel fade>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={Pic1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Fresh Fruits</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Pic2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Fresh Vegetables</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Pic3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Premium Quality Foodgrains</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className='products_page'>
        <div className='filters_column'>
          <br></br>
          <h6>Filter by category</h6>
          <div className='buttons_grp'>
            <Button onClick={filterFruits} sx={{ ':hover': { bgcolor: '#242734', color: 'white' }, bgcolor: '#155b8a', margin: '10px' }} variant="contained">Fruits</Button>

            <Button onClick={filterVegetables} sx={{ ':hover': { bgcolor: '#242734', color: 'white' }, bgcolor: '#155b8a', margin: '10px' }} variant="contained">Vegetables</Button>

            <Button onClick={filterFoodGrains} sx={{ ':hover': { bgcolor: '#242734', color: 'white' }, bgcolor: '#155b8a', margin: '10px' }} variant="contained">Food Grains</Button>

            <Button onClick={clearAllFilters} sx={{ ':hover': { bgcolor: '#242734', color: 'white' }, bgcolor: '#155b8a', margin: '10px' }} variant="contained">Clear Filters</Button>
          </div>

        </div>
        <div className='products_column'>
          <br></br>
          <h5>Reccomended for you..</h5>

          <div className='products'>
            {
              allProducts.length > 0 ? allProducts.map((item, index) =>
                <div>
                  <ProductCard
                    id={item._id}
                    ownerId={item.ownerId}
                    name={item.name}
                    description={item.description}
                    category={item.category}
                    price={item.price}
                    image={item.productImage}
                    link={item.link}
                    date={item.sellingDate}
                  />
                </div>
              ) : <h1>No products found</h1>
            }
          </div>
        </div>



      </div>


    </div>
  )
}

export default Home
