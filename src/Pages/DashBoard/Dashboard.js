import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import Bill from '../DashBoard/Bill';
import Prescripe from './Prescription'
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Appointment from './Appointment';
import Materials from '../DashBoard/materials';





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

                    <Route path="/materials" component={Materials}/>
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;