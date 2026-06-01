import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async() => {

  if (!email || !password) {
    alert("Please enter email and password ❗");
    return;
  }


  try {
      await axios.post("https://gogrocer-backend.onrender.com/api/auth/signin", {
        email,
        password
      });
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful ✅");
      navigate("/");
    } catch (error) {
      alert("Invalid credentials ❌");
    }
  };

  // const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.email === email && user.password === password) {
//     localStorage.setItem("isLoggedIn", "true");
//     alert("Login successful ✅");
//     navigate("/");
//   } else {
//     alert("Invalid credentials ❌");
//   }
// };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

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

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/signup")} className="link">
        Don't have an account? Sign Up
      </p>
    </div>
  );
}

export default SignIn;