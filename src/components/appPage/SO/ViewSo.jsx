import React, { useEffect, useState } from "react";
import "../app.css";
import axios from "axios";
import { API_URL } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";

function ViewSo() {
  let token = sessionStorage.getItem("token");
  let navigate = useNavigate();
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [estimateDate, setEstimateDate] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [courierType, setCourierType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const formatDate = (dateString) => {
    return dateString ? new Date(dateString).toISOString().split("T")[0] : "";
  };
     
  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}/sales-order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      const data = response.data.order;
   

      setProductName(data.productName);
      setProductQty(data.productQty);
      setProductDescription(data.productDescription);
      setOrderDate(data.orderDate);
      setEstimateDate(estimateDate);
      setDeliveryStatus(data.deliveryStatus);
      setPaymentStatus(data.paymentStatus);
      setCourierType(data.courierType);
      setName(data.name);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
      setDoorNumber(data.address.doorNumber);
      setStreet(data.address.street);
      setCity(data.address.city);
      setPincode(data.address.pincode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBack = () => {
    navigate("/dashboard/sales-order");
  };

  return (
    <>
      <section className="editSection">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div>
              <div className="editHead">
                <h1 className="text-white mb-4">Sales Order to {name}</h1>
                <button onClick={() => handleBack()}>Back to Table</button>
              </div>
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <form>
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Product name :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <input
                          type="text"
                          name="productName"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Product Quantity :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <input
                          type="text"
                          name="productQty"
                          value={productQty}
                          onChange={(e) => setProductQty(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Description :</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea
                          className="form-control"
                          value={productDescription}
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
                          name="productDescription"
                          rows="3"
                          placeholder="Product Description..."
                        ></textarea>
                      </div>
                    </div>
                    <hr className="mx-n3" />

                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Order Date :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <input
                          type="date"
                          name="orderDate"
                          value={formatDate(orderDate)}
                          onChange={(e) => setOrderDate(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>

                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Order Date :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <input
                          type="date"
                          name="estimateDate"
                          value={formatDate(estimateDate)}
                          onChange={(e) => setEstimateDate(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>

                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Delivery Status :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <select
                          type="text"
                          name="deliveryStatus"
                          value={deliveryStatus}
                          onChange={(e) => setDeliveryStatus(e.target.value)}
                          className="form-control form-control-lg"
                        >
                          <option value="New Order">New Order</option>
                          <option value="Packed">Packed</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Returned">Returned</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Payment Status :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <select
                          type="text"
                          name="paymentStatus"
                          value={paymentStatus}
                          onChange={(e) => setPaymentStatus(e.target.value)}
                          className="form-control form-control-lg"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Paid">Paid</option>
                        </select>
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Courier Type :</h6>
                      </div>
                      <div className="col-md-5 pe-5">
                        <select
                          type="text"
                          name="courierType"
                          value={courierType}
                          onChange={(e) => setCourierType(e.target.value)}
                          className="form-control form-control-lg"
                        >
                          <option value="Standard">Standard</option>
                          <option value="Pririority">Pririority</option>
                          <option value="Express">Express</option>
                        </select>
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Customer Name :</h6>
                      </div>
                      <div className="col-md-7 pe-5">
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Email address : </h6>
                      </div>
                      <div className="col-md-7 pe-5">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-lg"
                          placeholder="example@example.com"
                        />
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Phone Number : </h6>
                      </div>
                      <div className="col-md-7 pe-5">
                        <input
                          type="text"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p></p>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Address : </h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          name="doorNumber"
                          value={doorNumber}
                          onChange={(e) => setDoorNumber(e.target.value)}
                          className="form-control col-md-4 form-control-lg"
                          placeholder="Door No."
                        />
                        &nbsp;
                        <input
                          type="text"
                          name="street"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          className="form-control col-md-9 form-control-lg"
                          placeholder="Street"
                        />
                        &nbsp;
                        <input
                          type="text"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control col-md-9 form-control-lg"
                          placeholder="City "
                        />
                        &nbsp;
                        <input
                          type="text"
                          name="pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="form-control col-md-5 form-control-lg"
                          placeholder="Pin Code"
                        />
                        &nbsp;
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewSo;
