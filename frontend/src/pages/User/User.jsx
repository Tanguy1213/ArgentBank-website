import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, setRememberMe } from "../../store/actions/auth.action";
import { getProfile } from "../../store/actions/getProfile.action";
import { startEditing } from "../../store/actions/editProfile.action";

//COMPONENTS
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import EditForm from "../../components/EditForm/EditForm";

//STYLE
import "./User.scss";

function User() {
  const auth = useSelector((state) => state.authReducer);
  const userProfile = useSelector((state) => state.getProfileReducer);
  const isEditing = useSelector((state) => state.editProfileReducer.isEditing);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberMe) {
      dispatch(setRememberMe(true));
    }
    if (!auth.token && !localToken) {
      navigate("/");
      return;
    }

    if (!auth.profile && auth.token) {
      dispatch(getProfile(auth.token));
    }

    if (localToken) {
      dispatch(loginSuccess(localToken));
    }
  }, [auth.token, auth.profile, navigate, dispatch]);

  const handleEditClick = () => {
    dispatch(startEditing());
  };

  return (
    <div>
      <Header />
      <main className="main bg-dark user-container">
        {isEditing ? (
          // Affichez le formulaire d'édition
          <EditForm />
        ) : (
          <div className="header">
            <h1 className="title-user-page">
              Welcome back
              <br />
              {userProfile.firstName} {userProfile.lastName}
            </h1>
            <br />
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <Account
          accountTitle="Checking (x8349)"
          accountAmount="2,082.79"
          accountDesc="Available Balance"
        />
        <Account
          accountTitle="Savings (x6712)"
          accountAmount="10,928.42"
          accountDesc="Available Balance"
        />
        <Account
          accountTitle="Credit Card (x8349)"
          accountAmount="184.30"
          accountDesc="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
}

export default User;
