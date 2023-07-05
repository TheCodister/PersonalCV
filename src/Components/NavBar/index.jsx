import './NavBar.css';
import { useState } from 'react';
import { FaBloggerB } from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const NavBar = () => {
    let [user, setUser] = useState(0);
    const handleClick = () => {
        setUser(++user);
    }
    return(  
        <nav className="navbar">
            <FaBloggerB className='navbar-icon'/>
            <h1>The Quang Blog</h1>
            <div className="links">
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/MyInformation"><h3>About Me</h3></Link>
                <Link to="/MyEducation"><h3>My Education</h3></Link>
                <h3>My Project</h3>
                <h3>My Hobby</h3>
                <h3>Comment</h3>
            </div>
            {/*
            <div className='User-access'>
                <p>Number of people that access the web: {user}</p>
                <button onClick={handleClick}>Increase the user</button>
                <button onClick={handleClick2}>Reset user</button> 
            </div>
            */}
        </nav>
    );
}
 
export default NavBar;