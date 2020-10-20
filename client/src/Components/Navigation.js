import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navigation (props) {
    const [click, setClick] = useState (false);

    return (
        <nav className = 'navbar'>
        <div id = 'navigationContainer'> 
        <Link to = '/about'> About Me </Link>
        <Link to = '/work'> Work </Link>
        <Link to = '/projects'> Projects </Link>
        <Link to = '/hobbies'> Hobbies  </Link>
        <Link to = '/contact'> Contact</Link>
        </div>
        </nav>
    )

}

export default Navigation; 

//// in projects list all my projects with links to github repos. 
// in about me add a picture and bio
// work history related to web development 
/// in contact might want to put in forms without functionality for now...
///