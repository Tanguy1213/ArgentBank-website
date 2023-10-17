import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import getProfileReducer from "./getProfile.reducer";
import editProfileReducer from "./editProfile.reducer";

export default combineReducers({
    authReducer,
    getProfileReducer,
    editProfileReducer,
});