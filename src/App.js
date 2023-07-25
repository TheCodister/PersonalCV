import {NavBar,Footer} from './Components';
import {Home, MyInfo, MyEdu,MyPro,MyHob,Comment} from './Pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/MyInformation" element= {<MyInfo />} /> 
          <Route path="/MyEducation" element= {<MyEdu />} /> 
          <Route path="/MyProject" element= {<MyPro />} /> 
          <Route path="/MyHobby" element= {<MyHob />} /> 
          <Route path="/Comment" element= {<Comment />} /> 
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;
