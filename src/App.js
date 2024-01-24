import logo from './logo.svg';
import './App.css';
import { STAFFS } from './data/staffs';
import StaffList from './component/staffList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StaffList staffs={STAFFS}></StaffList>
      </header>
    </div>
  );
}

export default App;