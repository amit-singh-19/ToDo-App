import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Dashboard/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />
      </Routes>
    </>
  );
}
