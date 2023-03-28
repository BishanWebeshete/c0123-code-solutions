import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton text = "I" color='red'/>
        <CustomButton text="Know" color='green'/>
        <CustomButton text="React" color='lightBlue'/>
      </header>
    </div>
  );
}

export default App;
