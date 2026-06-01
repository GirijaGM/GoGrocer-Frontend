import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleRegister = async() => {

  if (!name || !email || !password) {
    alert("All fields are required ❗");
    return;
  }


await axios.post("https://gogrocer-backend.onrender.com/api/auth/signup", {    //backend
    name,
    email,
    password
  });


  // const user = { name, email, password };
  // localStorage.setItem("user", JSON.stringify(user));     these lines are frond-end after back-end connect no need these localstorage

  alert("Registered successfully ✅");
  navigate("/signin");
};


  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p onClick={() => navigate("/signin")} className="link">
        Already have an account? Sign In
      </p>
    </div>
  );
}

export default SignUp;