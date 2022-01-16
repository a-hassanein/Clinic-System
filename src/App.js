import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/header';


function App() {
  return (
          <>
         <Router>
           <NavBar />
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
         </Router> 
          </>
  );
}

export default App;
