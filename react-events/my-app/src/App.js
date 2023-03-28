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
        <CustomButton text='I' color='red' onCustomClick='I am red'/>
        <CustomButton text='Know' color='green' onCustomClick='I am green'/>
        <CustomButton text='React' color='lightblue' onCustomClick='I am lightblue'/>
      </header>
    </div>
  );
}

export default App;
