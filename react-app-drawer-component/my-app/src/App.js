import './App.css';
import AppDrawer from './AppDrawer'

const listItems = [
  {number:'001', name: 'Gear'},
  { number: '002', name: 'Rules'},
  { number: '003', name: 'Price' },
  { number: '004', name: 'Travel' },
  { number: '005', name: 'prospects' }
]

function App() {
  return (
    <AppDrawer listItems={listItems} />
  );
}

export default App;
