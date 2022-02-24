import './App.css';
//import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
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
            
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/dashboard" component={Dashboard} exact/>
            </Switch>
          </Router>

          </>
  );
}

export default App;
