import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {faInstagramSquare,faPhoenixFramework} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,faTwitter,faYoutube,faGithub,faTeamspeak} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <div id="contact" className="footer_page">
        <div className="footer_about">
          <div className="orderIcon_footer">
            <FontAwesomeIcon className="icon_footer" icon={faPhoenixFramework}/>
            <h4 style={{ display: "inline" }}>
              <span>O</span>rder<span>H</span>ub
            </h4>
          </div>
          <div className="footer_adress">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp;&nbsp;&nbsp;No.24/1 Masaniamman Temple Street
            </p>
            <p>Anaimalai (Tk), Coimbatore(Dist) , TamilNadu</p>
            <p>642104. </p>
          </div>
        </div>
        <div className="footer_about2">
          <h3>IMPORTANT LINKS</h3>
          <br />
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
            <li>Refund Policy</li>
            <li>Delivery Policy</li>
          </ul>
        </div>
        <div className="footer_about3">
          <h3>CONTACT US</h3>
          <h6>
            <FontAwesomeIcon icon={faTeamspeak} />
            &nbsp;8675750594
          </h6>
          <h6>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;sarankumartsk@gmail.com
          </h6>
          <div className="footer_flex_icons">
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/saran-kumar-17563a250/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a style={{ color: "white" }} href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a style={{ color: "white" }} href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              style={{ color: "white" }}
              href="https://github.com/SARANKUMARTSK"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/_charan_tsk_/"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer_copyRights">
        <div className="copy">
          <FontAwesomeIcon icon={faCopyright} /> {`${year} All Rights Reserved`}
        </div>
      </div>
    </>
  );
}

export default Footer;
