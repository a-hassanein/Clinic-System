import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/header';
import Contact from './Pages/ContactUs';
import SignUp from './Pages/signup';
import Login from './Pages/login';
import Packages from "./Components/Packages";
import Services from './Pages/Services';

function App() {
  return (
          <>
         <Router>
           <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
         </Router> 
          </>
  );
}

export default App;
