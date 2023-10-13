import axios from 'axios';
import { API_BASE_URL, PROFILE_ENDPOINT } from '../apiConfig';

export const GET_PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "PROFILE_FAILURE";
export const RESET_PROFILE = "RESET_PROFILE";

export const getProfileSuccess = (userName, firstName, lastName, email, error) => {
    return { type: GET_PROFILE_SUCCESS, payload: { userName, firstName, lastName, email }, error };
  };

export const getProfileFailure = (error) => {
  return { type: GET_PROFILE_FAILURE, payload: error };
};

export const resetProfile = () => {
    return { type: RESET_PROFILE };
  };

export const getProfile = (token) => {
  return (dispatch) => {
    dispatch(getProfileSuccess());
    axios
  .post(`${API_BASE_URL}${PROFILE_ENDPOINT}`, null, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
  .then((response) => {
  const { userName, firstName, lastName, email } = response.data.body;
  dispatch(getProfileSuccess(userName, firstName, lastName, email));
})
  .catch((error) => {
    dispatch(getProfileFailure(error));
  });
  };
};
