import React from "react";
import Home from "./home/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
export default function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Course /> : <Navigate to="/signup" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}
