import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import SignUp from './Pages/signup';
import Login from './Pages/login';
import Dashboard from './Pages/DashBoard/Dashboard'
import { Provider } from 'react-redux';
import store from './store';
import Activate from './Containers/Activate';
import ResetPassword from './Containers/ResetPassword';
import ResetPasswordConfirm from './Containers/ResetPasswordConfirm';
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route exact path='/reset-password' component={ResetPassword} />
            <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
            <Route exact path='/activate/:uid/:token' component={Activate} />
          </Switch>
        </Router>
      </Provider>

    </>
  );
}

export default App;
