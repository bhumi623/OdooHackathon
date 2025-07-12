import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import React, { useState, useEffect } from "react";
import SignUpPage from "./pages/LoginPage/SignUpPage.jsx";
import PostForm from './pages/PostForm/PostForm.jsx'; 
import Home from './pages/Home/Home.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("user") === "true";
  });

  useEffect(() => {
    localStorage.setItem("user", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<PostForm />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;
