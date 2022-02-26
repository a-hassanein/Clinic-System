import Header from './header'
import Sidebar from '../DashBoard/Sidebar'
import SignUp from '../signup';
import Home from '../../Components/Home';
import Surgery from '../DashBoard/surgery';
import Bill from '../DashBoard/Bill';
import HomeDashboard from '../DashBoard/home';
import {BrowserRouter as Router, Switch ,Route } from 'react-router-dom';





const Dashboard = () => {
  return (
    <>
            <Router> 
            <Sidebar/>
                <Switch>
                    <Route path="/surgery" component={Surgery} />
                    <Route path="/bill" component={Bill} />
                    <Route path="/home" component={HomeDashboard} />
                </Switch>
            </Router>
    
 
    </>
  );
};

export default Dashboard;