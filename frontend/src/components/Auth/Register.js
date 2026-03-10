import React,{useState} from "react";
import { registerUser } from "../../api/authApi";

const Register = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      await registerUser({name,email,password});
      alert("User registered");

      window.location.href="/login";
    }
    catch(err){
      alert("Error registering");
    }
  }

  return(
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

    </div>
  )
}

export default Register;