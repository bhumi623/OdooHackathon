import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import React, { useState, useEffect } from "react";
import SignUpPage from "./pages/LoginPage/SignUpPage.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // 🔐 Optional: persist login
    return localStorage.getItem("user") === "true";
  });

  useEffect(() => {
    localStorage.setItem("user", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/"/>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
