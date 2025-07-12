import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed In! 🎉");
    setIsLoggedIn(true); // ✅ update login state
    navigate("/");        // ✅ go back to Home
    setForm({ email: "", password: "" });
  };

  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.tileGrid}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.tile}></div>
        ))}
      </div> */}

      <div className={styles.loginBox}>
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button type="submit">Sign In</button>
        </form>
        <p className={styles.footerText}>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

