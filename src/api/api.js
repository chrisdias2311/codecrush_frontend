import axios from "axios";
import { setProducts } from "../redux/actions/actions";

export const getAllProducts = () => {
    return (dispatch) => {
        axios
            .get("https://uniexserver.onrender.com/api/products/allproducts")
            .then((response) => {
                console.log(response.data);
                dispatch(setProducts(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};