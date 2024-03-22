import React, { useEffect, useState } from "react";
import { API_URL } from "../../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddUser() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        role,
        phoneNumber,
        createdAt,
        password,
        address: {
          doorNumber,
          street,
          city,
          pincode,
        },
      };
      let response = await axios.post(`${API_URL}/user/signup`, data);
      toast.success(response.data.message || "Edited Successfully");
      navigate("/dashboard/users");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="edit_user">
        <div className="container-xl px-4 mt-4">
          <div className="row">
            <div className="col-xl-4">
             
              <div className="card mb-4 mb-xl-0">
                <div className="card-body text-center">
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-8">
             
              <div className="card mb-4">
                <div className="card-header">User Details</div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="name">
                        Username
                      </label>
                      <input
                        className="form-control"
                        id="inputUsername"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="row gx-3 mb-3">
                      
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="email">
                          Email :
                        </label>
                        <input
                          className="form-control"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                     
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="phoneNumber">
                          Phone Number :
                        </label>
                        <input
                          className="form-control"
                          name="phoneNumber"
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                   
                    <div className="row gx-3 mb-3">
                     
                      <div className="col-md-3">
                        <label className="small mb-1" htmlFor="role">
                          Role :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        />
                      </div>
                      <div className="col-md-5">
                        <label className="small mb-1" htmlFor="password">
                          New Password:
                        </label>
                        <input
                          type="text"
                          name="orderDate"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control "
                        />
                      </div>
                      
                      <div className="col-md-5">
                        <label className="small mb-1" htmlFor="createdAt">
                          Date Of Join :
                        </label>
                        <input
                          type="date"
                          name="orderDate"
                          value={createdAt}
                          onChange={(e) => setCreatedAt(e.target.value)}
                          className="form-control "
                        />
                      </div>
                    </div>
                    <h6>Address:</h6>
                    <div className="row gx-3 mb-3">
                      
                      <div className="col-md-3">
                        <label className="small mb-1" htmlFor="doorNumber">
                          Door No. :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="doorNumber"
                          value={doorNumber}
                          onChange={(e) => setDoorNumber(e.target.value)}
                        />
                      </div>
                      
                      <div className="col-md-9">
                        <label className="small mb-1" htmlFor="street">
                          Street :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="street"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                        />
                      </div>

                      <div className="col-md-5">
                        <label className="small mb-1" htmlFor="city">
                          City :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      
                      <div className="col-md-5">
                        <label className="small mb-1" htmlFor="pincode">
                          Pincode :
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </div>
                    </div>
                   
                    <button className="btn btn-primary" type="submit">
                      Add User
                    </button>{" "}
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate("/dashboard/users")}
                    >
                      {" "}
                      Go Back
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
