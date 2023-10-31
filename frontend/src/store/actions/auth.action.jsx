import axios from "axios";
import { API_BASE_URL, LOGIN_ENDPOINT } from '../apiConfig';
import { resetProfile } from "./getProfile.action";


export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const SET_REMEMBER_ME = "SET_REMEMBER_ME";

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

export const setRememberMe = (value) => {
  return { type: SET_REMEMBER_ME, payload: value };
}

export const loginUser = (credentials, rememberMe) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
    .post(`${API_BASE_URL}${LOGIN_ENDPOINT}`, credentials)
      .then((response) => {
        const token = response.data.body.token;
        dispatch(loginSuccess(token));
        if (rememberMe) {
          // Stockez le token dans le localStorage si Remember Me est coché
          localStorage.setItem("authToken", token);
        } else {
          // Stockez le token dans le sessionStorage si Remember Me n'est pas coché
          sessionStorage.setItem("authToken", token);
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(resetProfile());
    dispatch(loginSuccess(null)); 
    dispatch(setRememberMe(false));
    // Suppression du token dans le local storage et le session storage
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    
  };
};
