import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/Reset Password/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
