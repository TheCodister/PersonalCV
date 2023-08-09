import "./MyPro.css";
import { Link } from "react-router-dom";
const MyPro = () => {
  return (
    <div className="mypro">
      <h1>My Github:&nbsp;</h1>
      <Link to="https://github.com/TheCodister">
        <h1>https://github.com/TheCodister</h1>
      </Link>
    </div>
  );
};

export default MyPro;
