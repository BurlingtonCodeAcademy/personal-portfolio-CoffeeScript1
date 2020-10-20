import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Hobbies(props) {

    return (

        <div id='hobbiesContainer'>
            <ul>
                <li>I enjoy learning about blockchain technology and various other cyber security<br></br>
            topics. I started reading ??? Nation before starting the Bootcamp and can't wait to<br>
                    </br> finish it when I have some time.</li>
                <li>I enjoy playing the bass guitar.</li>
                <li>I enjoy cooking</li>
                <li>Some of my favorite shows are Black Mirror and Dark. I highly recommend them if you haven't seen them</li>

            </ul>

        </div>
    )

}

export default Hobbies; 