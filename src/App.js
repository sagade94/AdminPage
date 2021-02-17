import './App.css';
//import Abc from './Components/Abc';
import Employee from './Components/Employee';
import { Header } from './Components/Header';
import OrganizationalUnit from './Components/OrganizationalUnit';
import Role from './Components/Role';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/employee' component={Employee}/>
        <Route path='/role' component={Role}/>
        <Route path='/Organization' component={OrganizationalUnit}/>

      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
