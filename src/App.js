import logo from './logo.svg';
import './App.css';
import { STAFFS } from './data/staffs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <staffList staffs={STAFFS}></staffList>
    </div>
  );
}

export default App;
