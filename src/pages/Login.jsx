import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  
  };
  const onSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
    <form onSubmit={{onSubmit}}>
     Login
      <input data-cy="login-email" onChange={handleOnChange}  name="email" type="email" placeholder="Enter Email" />
      <input data-cy="login-password" onChange={handleOnChange}  name="password" type="password" placeholder="Enter Password" />
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
