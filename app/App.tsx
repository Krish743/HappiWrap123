'use client'
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./components/firebase";
import AuthPage from "./AuthPage";
import GiftChatbot from "./components/giftchatbot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/giftchatbot" element={<GiftChatbot/>} />
        {/* Redirect any undefined route to login
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <ToastContainer />
    </Router>
  );
}