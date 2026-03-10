import React, { useState } from "react";
import { loginUser } from "../../api/authApi";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await loginUser({email,password});

      localStorage.setItem("token",res.data.token);

      alert("Login successful");

      window.location.href = "/";
    }
    catch(err){
      alert("Login failed");
    }
  }

  return(
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Login;