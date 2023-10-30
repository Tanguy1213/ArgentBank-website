import React, { useState } from "react";

//STYLE
import "./EditForm.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  updateProfile,
  stopEditing,
} from "../../store/actions/editProfile.action";
import { getProfile } from "../../store/actions/getProfile.action";

function EditForm() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.getProfileReducer);
  const auth = useSelector((state) => state.authReducer);
  const [newUserName, setNewUserName] = useState(userProfile.userName || "");

  const handleSaveClick = () => {
    dispatch(updateProfile(newUserName));
    dispatch(getProfile(auth.token));
    dispatch(stopEditing());
  };

  const handleCancelClick = () => {
    dispatch(stopEditing());
  };

  return (
    <div className="form-container">
      <h2>Edit user infos</h2>
      <div className="edit-container">
        <label>
          <span>User Name :&nbsp;</span>
          <input
            type="text"
            placeholder="New user name"
            autoFocus
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </label>
        <label>
        <span>First Name :&nbsp;</span>
          <input type="text" placeholder={userProfile.firstName} disabled />
        </label>
        <label>
        <span>Last Name :&nbsp;</span>
          <input type="text" placeholder={userProfile.lastName} disabled />
        </label>
        <div className="form-button-container">
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
