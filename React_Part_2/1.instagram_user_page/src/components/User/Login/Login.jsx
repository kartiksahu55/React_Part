import React, { useState } from "react";
import style from "./Login.module.css";
import Button from "../../UI/Button/Button";

const Login = ({ checkIsLogin }) => {
  const [loginForm, setLoginForm] = useState({
    phoneUserEmail: "",
    password: "",
  });

  const loginFormHandler = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <div className={style.loginContainer}>
      <div>
        <img
          className={style.instaLogo}
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="Instagram"
        />
      </div>
      <form className={style.loginForm}>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          onChange={(e) =>
            setLoginForm({ ...loginForm, phoneUserEmail: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />
        <Button onClickEvent={loginFormHandler} buttonText="Sign in"></Button>
      </form>
      <div className={style.signUpLink}>
        <p>
          Don&#39;t have account?{" "}
          <span onClick={() => checkIsLogin(false)}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
