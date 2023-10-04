import React, { useState } from "react";
import style from "./Signup.module.css";
import Button from "../../UI/Button/Button";

const Signup = ({ checkIsLogin }) => {
  const [form, setForm] = useState({
    mobileEmail: "",
    fullName: "",
    phoneUserEmail: "",
    password: "",
  });

  const signupFormHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={style.signupContainer}>
      <div>
        <img
          className={style.instaLogo}
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="Instagram"
          height="100px"
        />
      </div>
      <form className={style.signupForm}>
        <input
          type="text"
          placeholder="Mobile Number or Email"
          onChange={(e) => setForm({ ...form, mobileEmail: e.target.value })}
        />
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone number, username, or email"
          onChange={(e) => setForm({ ...form, phoneUserEmail: e.target.value })}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <Button onClickEvent={signupFormHandler} buttonText="Sign in"></Button>
      </form>
      <div className={style.loginLink}>
        <p>
          have an account?{" "}
          <span onClick={() => checkIsLogin(true)}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;