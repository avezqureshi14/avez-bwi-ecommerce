import * as api from "../api";
import { FETCH_PRODUCTS } from "../constants/actionTypes";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const searchProducts = (query) =>{
  
}