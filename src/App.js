import logo from './logo.svg';
import './App.css';
import Flags from './components/Flags';

function App() {
  const URL = "https://xcountries-backend.azurewebsites.net/all";

  return (
    <div className="App">
      <Flags url={URL}/>
    </div>
  );
}

export default App;
