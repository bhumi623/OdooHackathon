import { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLogin && <input type="text" placeholder="Username" className={styles.input} required />}
        <input type="email" placeholder="Email" className={styles.input} required />
        <input type="password" placeholder="Password" className={styles.input} required />

        <button type="submit" className={styles.button}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className={styles.toggle}>
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default AuthForm;

