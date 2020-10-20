import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer (props) {

    return (
        <nav className = 'navbar'>
        <div id = 'footerContainer'> 
        <Link to = '/about'> About Me </Link>
        <Link to = '/work'> Work </Link>
        <Link to = '/projects'> Projects </Link>
        <Link to = '/hobbies'> Hobbies  </Link>
        <Link to = '/contact'> Contact</Link>
        </div>
        </nav>
    )

}

export default Footer; 