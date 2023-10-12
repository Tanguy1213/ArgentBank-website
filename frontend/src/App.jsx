import React, { useEffect } from "react";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./actions/auth.action";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Récupérez le token depuis le local storage
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      // Mettez à jour le state Redux avec le token
      dispatch(loginSuccess(storedToken));
    }
  }, [dispatch]);
  return <Router />;
}

export default App;
