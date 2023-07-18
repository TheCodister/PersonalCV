import "./MyHob.css";
import {GiShuttlecock,GiCubeforce} from 'react-icons/gi';
import {FaGuitar} from 'react-icons/fa';
import {PiMagnifyingGlassBold} from 'react-icons/pi';
const MyHob = () => {
    const hobInfo = [
        {icon:GiShuttlecock,name:'Badminton',imgsrc:'./Image/ElementarySchool.jpg', desciption:'Playing badminton has become a significant part of my life. I dedicate myself to this sport, devoting a considerable amount of time each week to training and playing. Three times a week, I step onto the badminton court, ready to challenge myself and push my limits. Through rigorous practice sessions and competitive matches, I continuously strive to improve my skills and technique. Badminton has not only become a physical activity for me but also a passion that fuels my determination.'},
        {icon:FaGuitar,name:'Playing Guitar',imgsrc:'./Image/SecondarySchool.jpg',desciption:'Playing the guitar is my ultimate passion. Among the array of musical instruments I adore, the guitar holds a special place in my heart alongside the piano, ukulele, and drums. Its versatility and soulful sound captivate me, drawing me in to explore various genres of music. Every day, I eagerly pick up my guitar and let my fingers dance across the strings, immersing myself in the melodies and rhythms that resonate with my soul. Through dedicated practice, I strive to master different techniques and refine my skills across a wide range of musical styles.'},
        {icon:GiCubeforce,name:'Solving Rubik Cube',imgsrc:'./Image/HighSchool.jpg',desciption:'Solving the Rubiks Cube was a long-standing hobby of mine. With countless hours of practice, I honed my skills to the point where I could solve it in 15 seconds or less. The satisfaction of unraveling its intricate patterns and achieving a solved state was immensely rewarding. However, as time passed, my interests shifted, and I no longer find myself reaching for the Rubiks Cube as often. Nevertheless, the memories of the challenges I conquered and the joy it brought me will always remain cherished.'},
        {icon:PiMagnifyingGlassBold,name:'Research new technology',imgsrc:'./Image/University.jpg',desciption:'YouTube serves as my go-to platform for exploring the latest advancements in technology. With each visit, I find myself diving into a world of knowledge, uncovering new insights about topics like React, my major, and cutting-edge devices such as laptops, smartphones, and tablets. The wealth of information at my fingertips fuels my curiosity and keeps me updated on the ever-evolving landscape of technology. Through YouTube, I stay connected to the latest trends, ensuring that I am well-informed and ready to embrace the future of innovation.'},
    ]
    return ( 
        <div className="hob">
            <div className="hob-content">
                {
                    hobInfo.map((hobInfo) =>(
                        <div className="hob-content-box">
                            <div className="hob-content-box-title">
                                <hobInfo.icon className="hob-content-box-icon"/>
                                <h2>{hobInfo.name}</h2>
                            </div>
                            <div className="hob-content-box-des">
                                <p>{hobInfo.desciption}</p>
                                <img src={hobInfo.imgsrc} alt="schoolpic" className="hob-content-pic"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default MyHob;