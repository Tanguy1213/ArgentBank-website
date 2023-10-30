import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import { logoutUser } from "../../store/actions/auth.action"; // Importez votre action de déconnexion
import { stopEditing } from "../../store/actions/editProfile.action";
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const userProfile = useSelector((state) => state.getProfileReducer);

  const handleSignOut = () => {
    dispatch(logoutUser());
    dispatch(stopEditing());
  };

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
