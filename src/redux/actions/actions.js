import { ActionTypes } from "../constants/actionTypes"

export const setProducts = (products) => ({
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
});
export const setReccomendedProducts = (reccomended_products) => ({
    type: ActionTypes.SET_RECCOMENDED_PRODUCTS,
    payload: reccomended_products,
});
export const setFruits = () => ({
    type: ActionTypes.SET_FRUITS,
});
export const setVegetables = () => ({
    type: ActionTypes.SET_VEGETABLES,
});
export const setFoodgrains = () => ({
    type: ActionTypes.SET_FOODGRAINS,
});


export const setFruitsButton = () => ({
    type: ActionTypes.SET_FRUITS_BUTTON
})
export const setVegetablesButton = () => ({
    type: ActionTypes.SET_VEGETABLES_BUTTON
})
export const setFoodgrainsButton = () => ({
    type: ActionTypes.SET_FOODGRAINS_BUTTON
})
export const clearFilters = () => ({
    type: ActionTypes.CLEAR_FILTERS
})



export const setStationery = () => ({
    type: ActionTypes.SET_STATIONERY,
});

export const removeFilter = () => ({
    type: ActionTypes.REMOVE_FILTER
})