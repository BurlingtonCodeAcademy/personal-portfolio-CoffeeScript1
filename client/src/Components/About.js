//----- Imports 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";


//----- About function 
function About(props) {
  return (
    <div id="aboutContainer">
      <div id="aboutMini">
        <p>
          Andrea Valdez is a Web Development Student living in Vermont.{" "}
          <br></br>
          Originally from Arequipa, Peru, Andrea is a lifelong student of many
          subjects, and more recently of Web Development. In 2020, you can find
          Andrea studying Javascript at BCA or working at the BTV airport as an
          airline gate agent.<br></br>
        </p>

        <p> </p>
      </div>
    </div>
  );
}


//---exporting component
export default About;
