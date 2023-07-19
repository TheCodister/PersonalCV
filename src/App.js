import { Home, NavBar, MyInfo, MyEdu,MyPro,MyHob,Footer} from './Components';
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
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}
export default App;
