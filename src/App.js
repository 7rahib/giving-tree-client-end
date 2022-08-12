import { Route, Routes } from 'react-router-dom';
import './App.css';
import Donate from './Pages/Donate/Donate';
import FundRaiser from './Pages/FundRaiser/FundRaiser';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/donate' element={<Donate />}></Route>
        <Route path='/fundraiser' element={<FundRaiser />}></Route>
      </Routes >
    </div>
  );
}

export default App;
