import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import Bill from '../DashBoard/Bill';
import HomeDashboard from '../DashBoard/home';
import Prescripe from './Prescription'
import Patient from './Patient'
import {BrowserRouter as Router, Switch ,Route, useRouteMatch } from 'react-router-dom';
import Appointment from './Appointment';
import Materials from '../DashBoard/materials';
import Addmaterial from '../DashBoard/addmaterial';
import Assistant from '../DashBoard/assistant'
import Setting from '../DashBoard/setting'

import Scan_labs from '../DashBoard/scan_labs';




const Dashboard = () => {
  const {url} = useRouteMatch()
  console.log(url)
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/dashboard/appointment" component={Appointment} />
                    <Route path="/dashboard/surgery" component={Surgery} />
                    <Route path="/dashboard/bill" component={Bill} />
                    <Route path="/dashboard/prescription" component={Prescripe} />
                    <Route path="/dashboard/patient" component={Patient} />
                    <Route path="/dashboard/materials" component={Materials}/>
                    <Route path="/dashboard/addmaterial" component={Addmaterial}/>
                    <Route path="/dashboard/scan_labs" component={Scan_labs}/>
                    <Route path="/dashboard/assistant" component={Assistant} />
                    <Route path="/dashboard/setting" component={Setting}/>
                    <Route path="/dashboard" exact component={HomeDashboard} />
                    
                  
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;