import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ setIsLoggedIn }) => {
 

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    localStorage.setItem("username", form.username);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.tileGrid}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.tile}></div>
        ))}
      </div> */}

      <div className={styles.loginBox}>
        <h2>Create Account</h2>
        <p>Sign up to get started</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className={styles.footerText}>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
