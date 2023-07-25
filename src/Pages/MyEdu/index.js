import "./MyEdu.css";
const MyEdu = () => {
    const eduInfo = [
        {title:'University',name:'Ho Chi Minh University of Technology',imgsrc:'./Image/University.jpg',desciption:'HCMUT (Bach Khoa University) was my dream university in high school. Though skeptical due to its rigorous reputation, I enrolled and faced the pressure of demanding studies, even failing some subjects. But with time, I learned to manage my life and time effectively. Gradually, I developed a deeper love for my major, overcoming moments of discouragement. HCMUT has taught me resilience and the value of perseverance, shaping me into a better individual ready to face life challenges with determination.'},
        {title:'High School',name:'Luong The Vinh High school',imgsrc:'./Image/HighSchool.jpg',desciption:'Luong The Vinh High School holds my most cherished memories of my teen years. It was a place of growth and learning, where I discovered the value of teamwork and took part in meaningful projects. The school gave me lifelong friends with whom I still share wonderful moments. It is where I learned to love, not only my studies but also the experiences that shaped my future. I am forever grateful for the beautiful memories created during my time at Luong The Vinh High School.'},
        {title:'Secondary School',name:'Nguyen Huu Tho Secondary school',imgsrc:'./Image/SecondarySchool.jpg',desciption:'My secondary school period is probably one of my favorite time. Though I was introverted and did not make many friends, it was a time of growth and discovery. I found solace in Badminton, which became my favorite sport. The school proximity to my home made it a comforting place to explore new interests and hobbies. Looking back, I cherish the memories and the experiences that shaped who I am today.'},
        {title:'Elementary School',name:'Nguyen Thi Dinh Elementary school',imgsrc:'./Image/ElementarySchool.jpg', desciption:'Nguyen Thi Dinh Elementary School holds a special place in my heart as it is located close to my home. It is here that I embarked on my educational journey, learning to read and write for the first time. The school nurturing environment and dedicated teachers have provided a solid foundation for my academic growth. Fond memories of my early years at Nguyen Thi Dinh fill me with gratitude for the opportunities it has bestowed upon me.'},
        
    ]
    return ( 
        <div className="edu">
            <div className="edu-content">
                {
                    eduInfo.map((eduInfo) =>(
                        <div className="edu-content-box">
                            <div className="edu-content-box-title">
                                <h1>{eduInfo.title}</h1>
                                <h2>{eduInfo.name}</h2>
                            </div>
                            <div className="edu-content-box-des">
                                <p>{eduInfo.desciption}</p>
                                <img src={eduInfo.imgsrc} alt="schoolpic" className="edu-content-pic"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default MyEdu;