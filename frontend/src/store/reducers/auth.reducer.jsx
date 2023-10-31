import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_REMEMBER_ME,
} from "../actions/auth.action";

const tokenFromLocalStorage = localStorage.getItem("authToken");
const tokenFromSessionStorage = sessionStorage.getItem("authToken");

const initialState = {
  token: tokenFromLocalStorage || tokenFromSessionStorage || null, // Récupérez le token depuis le local storage ou le session storage
  loading: false,
  error: null,
  rememberMe: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, token: null, error: action.payload };
    case SET_REMEMBER_ME:
      return { ...state, rememberMe: action.payload };
    default:
      return state;
  }
}
