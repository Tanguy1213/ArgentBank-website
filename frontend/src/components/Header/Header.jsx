import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { logoutUser } from "../../actions/auth.action"; // Importez votre action de déconnexion
import "./Header.scss";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };



  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
        </NavLink>
        <div>
        {auth.token ? ( // Affiche le bouton "Sign Out" uniquement si l'utilisateur est connecté
            <NavLink className="main-nav-item" onClick={handleSignOut} to="/sign-in">
              <i className="fa fa-user-circle"></i>{" "}
              {"Sign Out"}
            </NavLink>  
          ) : (
            <NavLink className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>{" "}
              {"Sign In"}
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
