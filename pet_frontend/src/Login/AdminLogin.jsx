import React, { useState } from "react";
import axios from "axios";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Basic validation
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    // Default admin credentials
    const defaultAdminUsername = "admin";
    const defaultAdminPassword = "admin123";

    if (username !== defaultAdminUsername || password !== defaultAdminPassword) {
      setError("Invalid username or password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/admin-login", {
        name: username,
        password: password,
      });

      if (response && response.data) {
        alert("Admin Login successful", response.data);
        navigate("/admin-dashboard");
      } else {
        console.error("Admin sign-in failed: No response data");
        setError("Admin sign-in failed: No response data");
      }
    } catch (error) {
      console.error(
        "Admin sign-in failed",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Hello Admin</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <EmailTwoToneIcon />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <LockOpenTwoToneIcon />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="center" style={{ textAlign: "center", marginTop: "20px" }}>
        {/* <p>
          Don't have an account?<a href="/admin/register">Register</a>
        </p> */}
      </div>
      <div className="submit-container" style={{ marginTop: "10px" }}>
        <div className="submit" onClick={handleSignIn}>
          LOGIN
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
