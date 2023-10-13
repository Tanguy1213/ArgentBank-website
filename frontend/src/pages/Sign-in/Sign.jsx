import Header from "../../components/Header/Header";
import "./Sign.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setRememberMe } from "../../store/actions/auth.action"; // action loginUser
import { useNavigate } from "react-router-dom";

function Sign() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  const handleRememberMeChange = (e) => {
    const { checked } = e.target;
    setCredentials({ ...credentials, rememberMe: checked });
    dispatch(setRememberMe(checked));
  };
  
  useEffect(() => {
    if (auth.token) {
      navigate("/user");
    }
    if (auth.token && credentials.rememberMe) {
      localStorage.setItem("authToken", auth.token); // Stockez le token dans le local storage si "Remember Me" est cochée
    }
  }, [auth.token,navigate, credentials.rememberMe]);

  return (
    <div>
      <Header />
      <main className="main bg-dark sign-in-container">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin} >
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                autoComplete="on"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                autoComplete="off"
                required
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={credentials.rememberMe} // Liez la case à cocher à l'état de rememberMe
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>

          {auth.loading && <p>Logging in...</p>}
          {auth.error && <p>Error: {"E-mail or password incorrect"}</p>}
        </section>
      </main>
    </div>
  );
}

export default Sign;
