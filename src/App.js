import logo from './logo.png';
import './App.css';
import Profile from './component/profile/index';
import Header from './component/header';
import AuthPoc from "./component/AuthPoc";


function App() {
    return (
        <div className="App">
            <Header logo={logo}/>
            <AuthPoc/>
            <Profile/>
        </div>
    );
}

export default App;
