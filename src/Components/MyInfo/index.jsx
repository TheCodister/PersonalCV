import "./MyInfo.css";
const MyInfo = () => {
    const content = [
        {title: 'Name: ', contents:'Nguyen Ngoc Quang.'},
        {title: 'Age: ', contents:'21.'},
        {title: 'Occupation: ', contents:'University student.'},
        {title: 'School: ', contents:'Ho Chi Minh University of Technology.'},
        {title: 'Major: ', contents:'Computer Science.'},
        {title: 'Skills: ', contents:'HTML, CSS, ReactJS, React Native, C++, Arduino.'},
        {title: 'Other skills: ', contents:'Microsoft Office(Basic level), English(Ietls 7.0), Sport(Badminton), Music.'},
    ]
    return ( 
        <div className="info">
            <img src="/Image/Profilepic.jpg" alt="propic" className="info-profile"></img>
            <div className="info-content">
                {
                   content.map((content) => (
                        <div className="info-content-text">
                            <h1>{content.title}{content.contents}</h1>
                        </div>
                   )) 
                }
            </div>
        </div>
    );
}
 
export default MyInfo;