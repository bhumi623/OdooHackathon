import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn  }) => {
  const navigate = useNavigate();
    const handleLogout = () => {
    setIsLoggedIn(false);             
    localStorage.removeItem("user");  
    navigate("/");                    
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/" className={styles.siteName}>MySite</Link>
      </div>

      <div>
        {!isLoggedIn ? (
          <Link to="/login" className={styles.loginBtn}>Login</Link>
        ) : (
          <>
            <button className={styles.notificationBtn}>🔔</button>
            <button className={styles.profileBtn}>👤</button>
            <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
