import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';

function App() {
  return (
    <div className="App">
        <h1>My Hobby: Sampling</h1>
        <HobbyIntroduction />
        <MyProjects />
    </div>
  );
}

export default App;
