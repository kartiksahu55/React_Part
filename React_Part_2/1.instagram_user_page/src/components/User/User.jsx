import React, { useState } from "react";
import style from "./User.module.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const User = () => {
  const [islogin, setIsLogin] = useState(false);
  return (
    <div>
      {islogin ? (
        <Login checkIsLogin={setIsLogin}></Login>
      ) : (
        <Signup checkIsLogin={setIsLogin}></Signup>
      )}
    </div>
  );
};

export default User;
