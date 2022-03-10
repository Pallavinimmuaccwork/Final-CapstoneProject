import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navigationbar from './components/Navigationbar';
import { Route, Switch } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import RegistrationPage from './components/RegistrationPage';
import Samples from './components/Samples';
import EnterSample from './components/EnterSample';
// import { useEffect } from 'react';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Loginpage} />
      <ProtectedRoute exact path='/EnterSample' component={EnterSample} />
      <ProtectedRoute exact path='/Samples' component={Samples} />
      <ProtectedRoute exact path='/RegistrationPage' component={RegistrationPage} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </Switch>

  );
}

export default App;
