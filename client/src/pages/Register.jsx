import React, { useState } from "react";

import Axios from "axios";
import Header from "./fragments/Header";
import { Navigate } from "react-router-dom";
function Register() {
  const [data, setData] = useState(null);
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("e.target.name: "+e.target.name)
    console.log("e.target.value: "+e.target.value)
    setRegisterUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const register = () => {
    console.log(registerUser);
    Axios({
      method: "POST",
      data: {
        username: registerUser.username,
        password: registerUser.password,
      },
      withCredentials: true,
      url: "http://localhost:8080/register",
    }).then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  return (
    <div className="App">
      <Header />
      <div>
        <h1>Register</h1>
        <input placeholder="username" name="username" onChange={handleChange} />
        <input placeholder="password" name="password" onChange={handleChange} />
        <button onClick={register}>Submit</button>
      </div>
      {data ? <Navigate to="/" replace={true} /> : null}
    </div>
  );
}

export default Register;