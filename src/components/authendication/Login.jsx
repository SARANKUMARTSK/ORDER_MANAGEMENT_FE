import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import toast from "react-hot-toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { API_URL } from "../../App";



function Login() {
  const navigate = useNavigate();

  let [user, setUser] = useState([]);
  let [type, setType] = useState(true);

  const handleType = () => {
    setType(!type);
  };

  let token = sessionStorage.getItem("token");

  let getUserData = async () => {
    try {
      let res = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    });
      let data = res.data.users;
      setUser(data);
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      if (formData.email && formData.password) {
        const res = await axios.post(`${API_URL}/user/login`, formData, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        
        if (res.status === 200) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("role", res.data.role);
          sessionStorage.setItem("userId", res.data.id);
          toast.success(res.message || "Login Successfull");
            navigate("/dashboard/home");
          
         
        } else {
          toast.error("You are not allowed");
        }
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      toast.error(error.res.data.message || error.message);
    }
  };

  return (
    <>
      <div id="login" className="login_page">
        <div className="image_container"></div>
        <div className="login_form">
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              autoComplete="username"
            />

            <br />
            <label htmlFor="password">Password : </label>
            <input
              type={type ? "password" : "text"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <div className="eye_icon" onClick={() => handleType()}>
              {type ? <VisibilityIcon /> : <VisibilityOffIcon />}
              {type ? "Show Password" : "Hide Password"}
            </div>

            <br />
            <button className="submit_button" type="submit">
              Sign in
            </button>
            <a href="" onClick={() => navigate("/forgot-password")}>
              <p>Forgot Password?</p>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
