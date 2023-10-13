import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import getProfileReducer from "./getProfile.reducer";

export default combineReducers({
    authReducer,
    getProfileReducer,
});