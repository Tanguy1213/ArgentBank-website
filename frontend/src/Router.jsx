import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './main.scss'

//Pages
import Home from "./pages/Home/Home"
import SignIn from "./pages/Sign-in/Sign";
import User from "./pages/User/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;