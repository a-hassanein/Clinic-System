import './App.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
          <>
         <Router>
            <Routes>
              <Route path="/" element={<NavBar />} />
            </Routes>
         </Router> 
          </>
  );
}

export default App;
