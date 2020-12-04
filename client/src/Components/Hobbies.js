//-----Imports ------
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

//------ Hobbies component function
function Hobbies(props) {
  return (
    <div id="hobbiesContainer">
      <div id="hobbiesMini">
        <h2>Hobbies</h2>
        <p>
          <div className="cyberSecurityImage">
            <img />
          </div>
          <br />
          In my spare time I enjoy learning about AI, cyber security ect in
          non-technical ways since I didn't have the tools until this course.
          That was part of the motivation for wanting to learn how to write
          software. I started reading Dragnet Nation before starting the
          Bootcamp and can't wait to finish it upon graduation when I have a
          little more time.
        </p>

        <div>
          <p>
            <div className="cyberSecurityImage">
              <img />
            </div>
            <br />
            Pre-pandemic, I enjoyed playing Field Hockey when I was able to find
            a team. I also enjoy playing the bass guitar and cooking. I guess
            also baking....
          </p>
        </div>

        <p>
          <div className="cyberSecurityImage">
            <img />
          </div>
          <br />
          My passions are Music foreign languages, Psychology, Astrology - the
          real kind, not the newspaper horoscope kind. I am a lifelong student
          of life.
          <br />
          Some of my favorite shows are Black Mirror and Dark. I highly
          recommend them if you haven't seen them yet :D
        </p>
        <p>
          Some random things I enjoy that clearly don't fit into any of the
          above categories:
          <ul>
            <li>
              The Facebook groups: "This Cat is Chonky" and " This Cat Is
              Grompy"
            </li>
            <li>Listening to a lot of music</li>
            <li>Movies</li>
            <li>Fall in Vermmont</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

//---- Exporting hobbies component
export default Hobbies;
