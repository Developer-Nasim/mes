import logo from './logo.png'; 
import './App.css';
import Profile from './component/profile/index';
import Header from './component/header'; 

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile /> 
    </div>
  );
}

export default App;
