import { useState } from "react";
import BlogList from "./Bloglist";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [blogs, setBlogs] = useState([
    //usestate, blog here is a class
    {
      title: "About Me",
      body: "My name is Nguyen Ngoc Quang, and I am a 21-year-old student currently pursuing my studies in Computer Science at Ho Chi Minh University of Technology. As a dedicated and enthusiastic individual, I am passionate about the world of technology and aspire to become a skilled software engineer in the future.Being a student of Computer Science, I have always been fascinated by the endless possibilities that technology offers and its impact on our daily lives. Through my coursework, I have gained a strong foundation in programming languages, algorithms, and data structures, enabling me to develop efficient and innovative solutions to complex problems.",
      address: "./MyInformation",
      link: "Click to see my information",
      id: 1,
    },
    {
      title: "My Education",
      body: "My educational journey has been filled with growth and memorable experiences. It all began at Nguyen Thi Dinh Elementary School, where I took my first steps in reading and writing, building a strong foundation for the future. Moving on to Nguyen Huu Tho Secondary School, I discovered my passion for Badminton and cherished friendships, though I remained introverted. At Luong The Vinh High School, I matured, learning teamwork and undertaking projects that shaped my character. Finally, I achieved my dream of attending Ho Chi Minh University of Technology, where I faced challenges, grew resilient, and fell in love with my major. Each school has played a crucial role in my personal and academic development.",
      address: "./MyEducation",
      link: "Click to see my Education",
      id: 2,
    },
    {
      title: "My Project",
      body: "I am Quang of HCMUT",
      address: "./MyProject",
      link: "Click to see my project",
      id: 3,
    },
    {
      title: "My Hobby",
      body: "I am Quang of HCMUT",
      address: "./MyHobby",
      link: "Click to see my hobby",
      id: 4,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const button = [
    { label: "My Education", address: "./MyEducation" },
    { label: "My Project", address: "./MyProject" },
    { label: "My Hobby", address: "./MyHobby" },
  ];
  return (
    <div className="home">
      <div className="home-introduction">
        <div className="home-introduction-text">
          <h2>My journey can all be find right here, right now.</h2>
          <p>
            We all go through little to big step in our life, same for myself.
            This is a website I build to reflect all.
          </p>
          <div className="home-introduction-buttonplace">
            {button.map((button) => (
              <div className="home-introduction-button-content">
                <Link to={button.address} className="home-introduction-button">
                  <h3>{button.label}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <img
          className="home-introduction-pic"
          alt="profile"
          src="/Image/ProfilePic.jpeg"
        ></img>
      </div>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  ); //prop is for using outside component in this component
};
export default Home;
