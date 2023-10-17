import axios from 'axios';
import { API_BASE_URL, PROFILE_ENDPOINT } from '../apiConfig';

export const START_EDITING = "START_EDITING";
export const STOP_EDITING = "STOP_EDITING";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const startEditing = () => ({ type: START_EDITING });
export const stopEditing = () => ({ type: STOP_EDITING });

export const updateProfileSuccess = (updatedProfile) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: updatedProfile,
});

export const updateProfileFailure = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const updateProfile = (newUserName) => {
    return (dispatch, getState) => {
      // Récupérez le jeton à partir du Redux Store
      const token = getState().authReducer.token;
      const data = {
        userName: newUserName,
      };
  
      axios
        .put(`${API_BASE_URL}${PROFILE_ENDPOINT}`, data, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        })
        .then((response) => {
          // Réponse réussie, dispatchez l'action de succès avec les données de profil mises à jour
          dispatch(updateProfileSuccess(response.data.body.userName));
        })
        .catch((error) => {
          // En cas d'échec de la requête, dispatchez l'action d'échec avec l'erreur
          dispatch(updateProfileFailure(error));
        });
    };
  };

