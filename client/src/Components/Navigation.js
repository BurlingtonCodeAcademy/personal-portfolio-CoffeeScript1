//------- Imports 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

//----- Nav bar function 
function Navigation(props) {
  const [click, setClick] = useState(false);

  return (
    <nav className="navbar">
      <div id="navigationContainer">
        <Link to="/about"> About Me </Link>
        <Link to="/work"> Work </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/hobbies"> Hobbies </Link>
        <Link to="/contact"> Contact</Link>
      </div>
    </nav>
  );
}


//---- exporting component 
export default Navigation;


