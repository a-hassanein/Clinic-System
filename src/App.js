import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Contact from './Pages/ContactUs';
import SignUp from './Pages/signup';
import Login from './Pages/login';
import Packages from "./Pages/Packages";
import Services from './Pages/Services';
import Footer from './Components/footer';
import Header from './Pages/DashBoard/header'
import Dashboard from './Pages/DashBoard/Dashboard'

function App() {
  return (
          <>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/packages" element={<Packages />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
          </>
  );
}

export default App;
