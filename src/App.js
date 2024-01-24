import logo from './logo.svg';
import './App.css';
import { STAFFS } from './data/staffs';
import StaffList from './component/staffList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <strong>Staff Management Application</strong>
      </header>

      <body>
        <StaffList staffs={STAFFS}></StaffList>
      </body>
    </div>
  );
}

export default App;
