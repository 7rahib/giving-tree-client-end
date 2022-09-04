import { Route, Routes } from "react-router-dom";
import "./App.css";
import Donate from "./Pages/Donate/Donate";
import Home from "./Pages/Home/Home";
import IndividualRegister from "./Pages/Registration/IndividualRegister";
import Login from "./Pages/Registration/Login";
import OrgRegister from "./Pages/Registration/OrgRegister";
import Register from "./Pages/Registration/Register";
import VolunteerRegister from "./Pages/Registration/VolunteerRegister";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Volunteers from "./Pages/Volunteers/Volunteers";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/individualRegister" element={<IndividualRegister></IndividualRegister>}></Route>
        <Route path="/orgRegister" element={<OrgRegister></OrgRegister>}></Route>
        <Route path="/volunteerRegister" element={<VolunteerRegister></VolunteerRegister>}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/volunteers" element={<Volunteers></Volunteers>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
