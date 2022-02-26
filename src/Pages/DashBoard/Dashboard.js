import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import CreatePatient from '../DashBoard/createpatient';
import Bill from '../DashBoard/Bill';
import Prescripe from './Prescription'
import Patient from './Patient'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Materials from '../DashBoard/materials';
import Addmaterial from '../DashBoard/addmaterial';





const Dashboard = () => {
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/surgery" component={Surgery} />
                    <Route path="/bill" component={Bill} />
                    <Route path="/prescription" component={Prescripe} />
                    <Route path="/patient" component={Patient} />
                    <Route path="/materials" component={Materials}/>
                    <Route path="/addmaterial" component={Addmaterial}/>
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;