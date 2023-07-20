import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import {FaArrowRight} from 'react-icons/fa'
import "./Home.css"
import { Link } from "react-router-dom";
const Home =() => {
    const [blogs, setBlogs] = useState([ //usestate, blog here is a class
        {title: 'About Me', body: 'My name is Nguyen Ngoc Quang, and I am a 21-year-old student currently pursuing my studies in Computer Science at Ho Chi Minh University of Technology. As a dedicated and enthusiastic individual, I am passionate about the world of technology and aspire to become a skilled software engineer in the future.',address: './MyInformation', link: 'Click to see my information', id: 1},
        {title: 'My Education', body: 'Currently an OISP Computer Science student of Ho Chi Minh University of Technology(HCMUT) also known as Bach Khoa, I formally study at Luong The Vinh High School District 1.', link: 'Click to see my education',address: './MyEducation', id: 2},
        {title: 'My Project', body: 'I am Quang of HCMUT',address: './MyProject', link: 'Click to see my project', id: 3},
        {title: 'My Hobby', body: 'I am Quang of HCMUT',address: './MyHobby', link: 'Click to see my hobby', id: 4}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
    const button = [
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
                    <div className="home-introduction-buttonplace">
                        {button.map((button) => (
                        <div className="home-introduction-button-content">
                            <Link to={button.address} className="home-introduction-button">
                                <FaArrowRight className="home-introduction-button-icon"/>
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