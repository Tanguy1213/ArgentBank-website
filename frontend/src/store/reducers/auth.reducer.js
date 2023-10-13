import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_REMEMBER_ME,
} from "../actions/auth.action";

const initialState = {
  token: null,
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
