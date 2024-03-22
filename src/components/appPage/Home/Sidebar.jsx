import React from "react";
import "./Dashboard.css";
import "../app.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
import { faCartFlatbedSuitcase,faPowerOff } from "@fortawesome/free-solid-svg-icons";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    
  const navigate = useNavigate();
 

  const handleLogout = () => {
    navigate("/home");
    sessionStorage.clear();
    toast.success("Logot Successfull");
  };

  return (
    <>
      
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
       
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon icon={faPhoenixFramework} />
          </div>
          <div className="sidebar-brand-text mx-3 dashboard_brand_name">
            <span>O</span>rder<span>H</span>ub
          </div>
        </a>
        
        <hr className="sidebar-divider my-0" />

       
        <li className="nav-item active">
          <a className="nav-link" onClick={() => navigate("home")}>
            <DashboardCustomizeIcon />
            &nbsp; <span>Dashboard</span>
          </a>
        </li>

     
        <hr className="sidebar-divider" />

        
        <div className="sidebar-heading">ORDERS</div>

        
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate("purchase-order")}>
            <ShoppingCartIcon />
            &nbsp; <span>Purchase Orders</span>
          </a>
        </li>

       
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            onClick={() => navigate("sales-order")}
          >
            <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
            &nbsp; <span>Sales Orders</span>
          </a>
        </li>

        {sessionStorage.getItem("role") === "admin" ? (
          <hr className="sidebar-divider" />
        ) : (
          <></>
        )}
        {sessionStorage.getItem("role") === "admin" ? (
          <div className="sidebar-heading">ADMIN</div>
        ) : (
          <></>
        )}
        {sessionStorage.getItem("role") === "admin" ? (
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              onClick={() => navigate("actions-sales-order")}
            >
              <AppRegistrationIcon />
              &nbsp;&nbsp; <span>Manage - SO</span>
            </a>
          </li>
        ) : (
          <></>
        )}
        {sessionStorage.getItem("role") === "admin" ? (
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => navigate("actions-purchase-order")}
            >
              <AppRegistrationIcon />
              &nbsp; &nbsp;<span>Manage - PO</span>
            </a>
          </li>
        ) : (
          <></>
        )}
        {sessionStorage.getItem("role") === "admin" ? (
          <li className="nav-item">
            <a className="nav-link collapsed" onClick={() => navigate("users")}>
              <GroupAddIcon />
              &nbsp;&nbsp; <span>Manage Users</span>
            </a>
          </li>
        ) : (
          <></>
        )}

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">SERVICES</div>

        

       
        <li className="nav-item">
          <a className="nav-link collapsed" onClick={() => navigate("support")}>
            <ContactSupportIcon />
            &nbsp; <span>Support</span>
          </a>
        </li>

        
        <hr className="sidebar-divider" />

    
        <div className="sidebar-heading logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} />
          &nbsp; LOG-OUT
        </div>
      </ul>
    
    </>
  );
}

export default Sidebar;
