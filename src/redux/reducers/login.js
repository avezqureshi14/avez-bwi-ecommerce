import * as actionType from "../constants/actionTypes";

const login = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };

    case actionType.FETCH_USER:
      return action.payload;

    default:
      return state;
  }
};

export default login;
