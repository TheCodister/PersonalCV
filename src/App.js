import { Home, NavBar, MyInfo, MyEdu} from './Components';
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
        </Routes>
      </div>
    </div>
    </Router>
  );
}
export default App;
