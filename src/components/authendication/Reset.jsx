import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import toast from "react-hot-toast";
import axios from "axios";
import { API_URL } from "../../App";
import { useNavigate } from "react-router-dom";

function Reset() {

  const navigate = useNavigate();

  let [type, setType] = useState(true);

  const handleType = () => {
    setType(!type);
  };


  const handleReset = async (e) => {
    e.preventDefault();
    try {
      let formData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
  

      if (formData.email && formData.password) {
        const response = await axios.put(
          `${API_URL}/user/reset-password`,
          formData
        );
        toast.success(response.data.message || "Success");
        navigate("/login");
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };
  

  return (
    <>
      <div id="login" className="login_page">
        <div className="image_container"></div>
        <div className="login_form">
          <div className="header">
            <h5>Reset Your Password Here...</h5>
          </div>
          <form onSubmit={handleReset}>
            <label htmlFor="email">
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input type="text" name="email" placeholder="Enter Your Email" />

            <br />
            <label htmlFor="password">New Pasword : </label>
            <input
              type={type ? "password" : "text"}
              name="password"
              placeholder="Type Your New Password"
            />
            <div className="eye_icon" onClick={() => handleType()}>
              {type ? <VisibilityIcon /> : <VisibilityOffIcon />}
              {type ? "Show Password" : "Hide Password"}
            </div>

            <br />
            <button className="submit_button" type="submit">
              Submit
            </button>
            <p></p>
            <h6>
              Remembered Your password?
              <a onClick={() => navigate("/login")} href="">
                Login Here!
              </a>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reset;
