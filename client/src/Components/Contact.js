import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Contact(props) {
  return (
    <div id="contactContainer">
      <div id="contactMini">
        <h1 id="title"> Contact Me</h1>
        <a href="mailto:andrea.vld.zrc@gmail.com">Email</a>
        <a href="pending-link">LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
