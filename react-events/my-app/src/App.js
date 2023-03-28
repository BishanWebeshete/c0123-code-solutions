import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton'

function App() {
  function handleCustomClick(text) {
    alert(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton text='Fancy' color='red' onCustomClick={handleCustomClick}/>
        <CustomButton text='Know' color='green' onCustomClick={handleCustomClick}/>
        <CustomButton text='React' color='lightblue' onCustomClick={handleCustomClick}/>
      </header>
    </div>
  );
}

export default App;
