
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom'
import Login from './component/Login/Login';
import Userdash from './component/Dashboard/UserDashboard/UserDashboard';
import Admindash from './component/Dashboard/AdminDashboard/AdminDashboard'

function App() {
  return (
    <Router>
    <div className="">
      <Routes>
          <Route element={<Login/>} path='/' exact />
          <Route element={<Userdash/>} path='/userdash'/>
          <Route element={<Admindash/>} path='/adminDash'/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
