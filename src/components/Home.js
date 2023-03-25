import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { constant } from '../constants';



import { setProducts, setReccomendedProducts, setFruits, setVegetables, setFoodgrains } from "../redux/actions/actions";


function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [allProducts, setAllProducts] = useState(false);

  useEffect(() => {
    if (data.products.buttons.fruitsButton === true) {
      console.log("----------------------Reloaded------------------------------------------------------")
      setAllProducts(data.products.fruits)
    } else if(data.products.buttons.vegetablesButton === true){
      console.log("----------------------Reloaded------------------------------------------------------")
      setAllProducts(data.products.vegetables)
    }else if(data.products.buttons.foodgrainsButton === true){
      setAllProducts(data.products.foodgrains)
    }else {
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
      <div>

      </div>

      {
        allProducts.length > 0 ? allProducts.map((item, index) =>
          <div>
            <h1>{item.name}</h1>
          </div>
        ) : <h1>No products found</h1>
      }
    </div>
  )
}

export default Home
