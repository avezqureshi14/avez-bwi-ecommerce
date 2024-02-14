import { FETCH_USER, LOGIN } from "../constants/actionTypes";

import * as api from "../api/index";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
  } catch (error) {
    console.log(error);
  }
};


export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUser();
    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

