import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/header';
import Contact from './Pages/ContactUs';


function App() {
  return (
          <>
         <Router>
           <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About />} />
            </Routes>
         </Router> 
          </>
  );
}

export default App;
