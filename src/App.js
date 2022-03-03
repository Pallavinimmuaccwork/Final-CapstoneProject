
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, Switch } from 'react-router-dom'
import Loginpage from './components/Loginpage';
import RegistrationPage from './components/RegistrationPage';
import Samples from './components/Samples';
import EnterSample from './components/EnterSample';



function App() {
  return (
    < >
      <Navigationbar />

      <Switch>
        <Route path='/Samples' component={Samples} />
        <Route path='/EnterSample' component={EnterSample} />
        <Route path='/Loginpage' component={Loginpage} />
        <Route path='/RegistrationPage' component={RegistrationPage} />
      </Switch>
      
    </>
  );
}

export default App;
