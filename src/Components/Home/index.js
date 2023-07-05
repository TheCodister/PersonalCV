import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import {AiOutlineArrowRight} from 'react-icons/ai'
import "./Home.css"
import { Link } from "react-router-dom";
const Home =() => {
    const [blogs, setBlogs] = useState([ //usestate, blog here is a class
        {title: 'About Me', body: 'Hi, I am Nguyen Ngoc Quang and I am currently a student of HCMUT. This is a blog about myself that I made out of ReactJS. I hope that through this blog, you will get to know more about me.',address: './MyInformation', link: 'Click to see my information', id: 1},
        {title: 'My Education', body: 'https://github.com/TheCodister', link: 'Click to see my education',address: './MyEducation', id: 2},
        {title: 'My Project', body: 'I am Quang of HCMUT',address: './MyProject', link: 'Click to see my project', id: 3},
        {title: 'My Hobby', body: 'I am Quang of HCMUT',address: './MyHobby', link: 'Click to see my hobby', id: 4}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    const button = [
        {label: 'About Me', address:'./MyInformation'},
        {label: 'My Education', address:'./MyEducation'},
        {label: 'My Project', address:'./MyProject'},
        {label: 'My Hobby', address:'./MyHobby'},
    ]
    return(
        <div className="home">
            <div className="home-introduction">
                <div className="home-introduction-text">
                    <h2>My journey can all be find right here, right now.</h2>
                    <p>We all go through little to big step in our life, same for myself. This is a website I build to reflect all.</p>
                    <div className="home-introduction-button">
                        {button.map((button) => (
                        <div className="home-introduction-button-content">
                            <Link to={button.address}>
                                <AiOutlineArrowRight className="home-introduction-button-icon"/>
                                <h3>{button.label}</h3>
                            </Link>
                        </div>
                        ))}
                    </div>    
                </div>
            <img className="home-introduction-pic" alt="profile" src="/Image/ProfilePic.jpeg"></img>
            </div>
                <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );    //prop is for using outside component in this component
}
export default Home; 