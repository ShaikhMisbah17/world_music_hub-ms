import React from "react";
import "./Footer.css";
import twitter from "../Assets/twitter.png";
import vector from "../Assets/vector.png";
import instagram from "../Assets/instagram.png";

const Footer = () => (
  <div className="footer">
    <div className="footer__contents">
      <h4 className="copyright-text">
        Copyright 2011-2020- all rights reserved
      </h4>
      <h4>Contact us</h4>
      <img src={twitter} />
      <img src={vector} />
      <img src={instagram} />
      <hr className="footer-hr"></hr>
      <h4>Privacy policy</h4>
      <hr className="footer-hr"></hr>
      <h4>Terms and conditions</h4>
    </div>
  </div>
);

export default Footer;
