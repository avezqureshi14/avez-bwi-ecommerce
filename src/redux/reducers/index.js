import {combineReducers} from 'redux'
import products from './products';
import login from './login'
import cart from './cart'
const rootReducer = combineReducers({
    products,
    login,
    cart
});

export default rootReducer;