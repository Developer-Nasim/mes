import logo from './logo.png';
import './App.css';
import Profile from './component/profile/index';
import Header from './component/header';
import AuthPoc from "./component/AuthPoc";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
    return (
        <Router>
        {/* <Header logo={logo}/> */}
        <div>   
            <Switch>
                <Route path="/login"><AuthPoc /></Route>
                <Route exact path="/"><Profile /></Route> 
            </Switch>
        </div>
      </Router> 
    );
}

export default App;
