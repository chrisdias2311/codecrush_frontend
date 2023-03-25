import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    allProducts: [],
    reccomended: [],

    fruits: [],
    vegetables: [],
    foodgrains: [],
    stationery: [],


    buttons: {
        filterButton: false,

        fruitsButton: false,
        vegetablesButton: false,
        foodgrainsButton: false,
        reccomendedButton: false,
    }
}


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("Called from products reducer")
            return { ...state, allProducts: payload };
        case ActionTypes.SET_RECCOMENDED_PRODUCTS:
            return { ...state, reccomended: payload };
        case ActionTypes.SET_FRUITS:
            return { ...state, fruits: state.allProducts.filter((item) => item.category === "Fruits") };
        case ActionTypes.SET_VEGETABLES:
            return { ...state, vegetables: state.allProducts.filter((item) => item.category === "Vegetables") };
        case ActionTypes.SET_FOODGRAINS:
            return { ...state, foodgrains: state.allProducts.filter((item) => item.category === "Foodgrains") };


        case ActionTypes.SET_FRUITS_BUTTON:
            return {
                ...state, buttons: {
                    ...state.buttons,
                    fruitsButton: true,
                    vegetablesButton: false,
                    foodgrainsButton: false,
                    reccomendedButton: false,
                }
            };
        case ActionTypes.SET_VEGETABLES_BUTTON:
            return {
                ...state, buttons: {
                    ...state.buttons,
                    fruitsButton: false,
                    vegetablesButton: true,
                    foodgrainsButton: false,
                    reccomendedButton: false,
                }
            };
        case ActionTypes.SET_FOODGRAINS_BUTTON:
            return {
                ...state, buttons: {
                    ...state.buttons,
                    fruitsButton: false,
                    vegetablesButton: false,
                    foodgrainsButton: true,
                    reccomendedButton: false,
                }
            };


        case ActionTypes.SET_STATIONERY:
            return { ...state, stationery: state.allProducts.filter((item) => item.category === "Stationery and Equipments"), buttons: { ...state.buttons, filterButton: true } };
        case ActionTypes.REMOVE_FILTER:
            return { ...state, buttons: { ...state.buttons, filterButton: false } };
        default:
            return state;
    }
}