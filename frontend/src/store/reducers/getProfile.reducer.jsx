import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  RESET_PROFILE,
} from "../actions/getProfile.action";

const initialState = {
  userName: null,
  firstName: null,
  lastName: null,
  email: null,
  error: null,
};

export default function getProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      const { userName, firstName, lastName, email, error } = action.payload;
      return {
        ...state,
        userName,
        firstName,
        lastName,
        email,
        error,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        userName: null,
        firstName: null,
        lastName: null,
        email: null,
        error: action.payload,
      };
    case RESET_PROFILE:
      return {
        ...state,
        userName: null,
        firstName: null,
        lastName: null,
        email: null,
        error: null,
      };
    default:
      return state;
  }
}
