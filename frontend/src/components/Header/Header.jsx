import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import './Header.scss'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const isUserPage = location.pathname === '/user';

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
        {isLoggedIn ? (
          <button className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-user-circle"></i>
          </button>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> {isUserPage ? 'Sign Out' : 'Sign In'}
          </NavLink>
        )}
      </div>
    </nav>
    </header>
  );
}

export default Header;