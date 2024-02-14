import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "../constants/actionTypes";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item is already in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += 1;

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Item is not in the cart, add it with quantity 1
        const newCartItem = { ...action.payload, quantity: 1 };
        const updatedCartAdd = [...state.cart, newCartItem];

        localStorage.setItem("cart", JSON.stringify(updatedCartAdd));

        return {
          ...state,
          cart: updatedCartAdd,
        };
      }

    case REMOVE_FROM_CART:
      const updatedCartRemove = state.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartRemove));
      return {
        ...state,
        cart: updatedCartRemove,
      };

    case UPDATE_QUANTITY:
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartQuantity));
      return {
        ...state,
        cart: updatedCartQuantity,
      };

    default:
      return state;
  }
};

export default cart;
