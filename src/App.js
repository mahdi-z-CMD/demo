import Companypage from "./pages/Companyspage";
import {Route, Routes} from 'react-router-dom'
import Navbar from "./pages/Navbar";
import Home from './pages/Home'
import More from './pages/More'
import Login from './pages/Login'
import Search from "./pages/Search";
import Person from "./pages/Person";
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
    <div className="home">
      <Routes >
        <Route path="/demo" element={<Home></Home>}></Route>
        <Route path="/demo/more" element={<More></More>}></Route>
        <Route path="/demo/login" element={<Login></Login>}></Route>
        <Route path="/demo/search" element={<Search></Search>}></Route>
        <Route path='/demo/company/:companyid' element={<Companypage></Companypage>}></Route>
        <Route path='/demo/person/:personid' element={<Person></Person>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
