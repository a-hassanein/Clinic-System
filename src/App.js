import './App.css';
//import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import SignUp from './Pages/signup';
import Login from './Pages/login';
import Dashboard from './Pages/DashBoard/Dashboard'
// import Addmaterial from './Pages/DashBoard/addmaterial'
// import Updatematerial from './Pages/DashBoard/updatematerial'
function App() {
  return (
          <>
          <Router>
            
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/signup" component={SignUp} exact/>
                <Route path="/dashboard" component={Dashboard} exact/>
                <Route path="/dashboard/:id" component={Dashboard} />
                {/* <Route path="/updatematerial" component={Updatematerial} exact/> */}
            </Switch>
          </Router>

          </>
  );
}

export default App;
