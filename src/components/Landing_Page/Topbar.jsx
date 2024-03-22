import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoenixFramework,faExpeditedssl } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" topbar">
        <Container>
          <Navbar.Brand className="orderIcon">
            <FontAwesomeIcon className="icon" icon={faPhoenixFramework} />
            <h4>
              <span>O</span>rder<span>H</span>ub
            </h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav className="nav_heads">
              <Link to="about">Home</Link>
              <Link to="services">Services</Link>
              <Link to="plans">Plans</Link>
              <Link to="testimonials">Testimonials</Link>
              <Link to="contact">Contact</Link>
              <Link to="login" onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faExpeditedssl} />
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;
