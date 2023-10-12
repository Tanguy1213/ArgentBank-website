
import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios
      .post("http://localhost:3001/api/v1/user/login", credentials)
      .then((response) => {
        console.log("Réponse de l'API:", response.data.body.token);
        const token = response.data.body.token; // Extrayez le token de la réponse
        dispatch(loginSuccess(token));;
      })
      .catch((error) => {
        dispatch(loginFailure(error));
      });
  };
};

export const logoutUser = () => {
    return (dispatch) => {
      // Supprimez le token du local storage
      localStorage.removeItem("authToken");
      // Déconnectez l'utilisateur en effaçant le token du Redux
      dispatch(loginSuccess(null)); // Mettez à jour votre action de connexion avec null
    };
  };