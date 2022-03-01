import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import CreatePatient from '../DashBoard/createpatient';
import Bill from '../DashBoard/Bill';
import HomeDashboard from '../DashBoard/home';
import Prescripe from './Prescription'
import Patient from './Patient'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Appointment from './Appointment';
import Materials from '../DashBoard/materials';
import Addmaterial from '../DashBoard/addmaterial';
import Assistant from '../DashBoard/assistant'
import Setting from '../DashBoard/setting'

import Scan_labs from '../DashBoard/scan_labs';




const Dashboard = () => {
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/appointment" component={Appointment} />
                    <Route path="/surgery" component={Surgery} />
                    <Route path="/bill" component={Bill} />
                    <Route path="/prescription" component={Prescripe} />
                    <Route path="/patient" component={Patient} />
                    <Route path="/materials" component={Materials}/>
                    <Route path="/addmaterial" component={Addmaterial}/>
                    <Route path="/scan_labs" component={Scan_labs}/>

                    <Route path="/assistant" component={Assistant} />
                    <Route path="/dashbord/setting" component={Setting}/>
                    <Route path="/" component={HomeDashboard} />
                    
                  
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;