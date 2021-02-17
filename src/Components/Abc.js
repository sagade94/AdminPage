import './App.css';
import Login from './Component/Login';
import { SignUp } from './Component/SignUp';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import MyOrder from './Component/MyOrder';
import ContactUs from './Component/ContactUs';
import AddPizza from './Component/AddPizza'
function App() {
  return (
    <Provider store={store}>
    <div >
      <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/home' component={Home}/>
        <Route path='/myorder' component={MyOrder}></Route>
        <Route path='/aboutUs' component={AboutUs}></Route>
        <Route path='/contactUs' component={ContactUs}></Route>
        <Route path='/addPizza' component={AddPizza}></Route>
      </Switch>
      </Router>
    </div>
 
  </Provider>
    
  );
}

export default App;
