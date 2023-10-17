import { START_EDITING, STOP_EDITING, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from "../actions/editProfile.action";

const initialState = {
  isEditing: false,
  updatedProfile: null,
  error: null,
};

export default function editProfileReducer(state = initialState, action) {
  switch (action.type) {
    case START_EDITING:
      return { ...state, isEditing: true };
    case STOP_EDITING:
      return { ...state, isEditing: false };
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          updatedProfile: action.payload,
          error: null,
        };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}