import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API_URL } from "../../App";


function Forgot() {
  
  const handleMailer = async (e) => {
    e.preventDefault();

    try {
      let formData = {
        email: e.target.email.value,
        name: e.target.name.value,
      };
      
      if (formData.email && formData.name) {
        let res = await axios.put(`${API_URL}/user/reset-mailer`, formData);
        toast.success(res.data.message || "Mail sent successfully");
      } else {
        toast.error("Please fill all the fields");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div id="login" className="login_page">
        <div className="image_container"></div>
        <div className="login_form">
          <div className="header">
            <h1>Hello User </h1>
            <h5>Forgot your password?Don't worry!</h5>
          </div>
          <form onSubmit={handleMailer}>
            <label htmlFor="email">
              Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input type="text" name="email" placeholder="Enter Your Email" />

            <br />
            <label htmlFor="password">Name : </label>
            <input type="text" name="name" placeholder="Enter Your Name" />
            <br />

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

export default Forgot;
