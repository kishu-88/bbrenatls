import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Content from './componenets/Content';
import Vehicle from './componenets/Vehicles/Vehicles';
import Login from './componenets/Admin/Login/Login';
import Register from './componenets/Admin/Register/Register';


function App() {
  return (
    <div className="App container">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/vehicles" element={<Vehicle/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
