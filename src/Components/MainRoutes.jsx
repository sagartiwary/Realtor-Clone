import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { User } from "../Pages/User";
import { Offer } from "../Pages/Offer";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </div>
  );
};
