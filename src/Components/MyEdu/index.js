import "./MyEdu.css";
const MyEdu = () => {
    const eduInfo = [
        {title:'Elementary School',name:'Nguyen Thi Dinh Elementary school',imgsrc:'./Image/ElementarySchool.jpg', desciption:'My first school and it close to my home'},
        {title:'Secondary School',name:'Nguyen Huu Tho Secondary school',imgsrc:'./Image/SecondarySchool.jpg',desciption:'My second school, also close to my home'},
        {title:'High School',name:'Luong The Vinh High school',imgsrc:'./Image/HighSchool.jpg',desciption:'The school that define me and what I really want'},
        {title:'University',name:'Ho Chi Minh University of Technology',imgsrc:'./Image/University.jpg',desciption:'Just end my suffering...'},
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