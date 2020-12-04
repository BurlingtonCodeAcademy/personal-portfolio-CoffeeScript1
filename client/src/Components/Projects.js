//------Imports 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";


//----- Projects function 
function Projects(props) {
  return (
    <div id="projectsContainer">
      <div id="projectsMini">
        <h1 id="title"> My Projects On GitHub! </h1>
        <ul>
          <li>
            <a href = "https://github.com/BurlingtonCodeAcademy/tic-tac-toe-andrea-jonathan"></a>
          </li>
          <li><a href = "https://github.com/BurlingtonCodeAcademy/remock-CoffeeScript1"></a></li>
          <li>
            <a hef = "https://github.com/BurlingtonCodeAcademy/yelpington-CoffeeScript1"></a>
          </li>
          <li>
            <a href = "https://github.com/BurlingtonCodeAcademy/zorkington-matheus-andrea"></a>
          </li>
          <li>
            <a href = "https://github.com/BurlingtonCodeAcademy/react-chat-dakota-andrea"></a>
          </li>
        </ul>
      </div>
      <div id = "placeholderColumn"></div>
    </div>
  );
}

//----Exporting projects react component
export default Projects;
