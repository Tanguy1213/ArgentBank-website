import React,{ useEffect }from "react";
import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import "./Header.scss";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loginSuccess } from "../../store/actions/auth.action";
import { getProfile } from "../../store/actions/getProfile.action";
import { stopEditing } from "../../store/actions/editProfile.action";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const userProfile = useSelector((state) => state.getProfileReducer);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logoutUser());
    dispatch(stopEditing());
  };

  useEffect(() => {
    const localToken = localStorage.getItem("authToken");

    if (!auth.token && localToken) {
      // Restauration du token depuis le local storage dans le Redux Store
      dispatch(loginSuccess(localToken));
    }

    if (!auth.profile && auth.token) {
      dispatch(getProfile(auth.token));
    }
  }, [auth.token, auth.profile, navigate, dispatch]);

  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/" >
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
        </NavLink>
        {auth.token ? ( // Affiche le bouton "Sign Out" uniquement si l'utilisateur est connecté
          <div className="connected-container">
            <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userProfile.userName}
            </NavLink>
            <NavLink className="main-nav-item" onClick={handleSignOut} to="/">
              <i className="fa fa-sign-out"></i>
              {"Sign Out"}
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> {"Sign In"}
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
