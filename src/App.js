
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import OtpValidation from './components/OtpValidation';
import Login from './components/Login';
import FarmerSignup from './components/FarmerSignup';
import FarmerLogin from './components/FarmerLogin';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Home /></>}></Route>
          <Route path='/signup' element={<><Signup /></>}></Route>
          <Route path='/validateotp/:id' element={<><OtpValidation /></>}></Route>
          <Route path='/login' element={<><Login /></>}></Route>
          <Route path='/farmersignup' element={<><FarmerSignup /></>}></Route>
          <Route path='/farmerlogin' element={<><FarmerLogin /></>}></Route>


          <Route path='/addproduct' element={<><AddProduct /></>}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
