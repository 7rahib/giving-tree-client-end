import { Route, Routes } from "react-router-dom";
import "./App.css";
import Donate from "./Pages/Donate/Donate";
import Emergency from "./Pages/Emergency/Emergency";
import Fundraiser from "./Pages/Fundaraiser/Fundraiser";
import Home from "./Pages/Home/Home";
import Organizations from "./Pages/Organizations/Organizations";
import Orphanage from "./Pages/Orphanage/Orphanage";
import IndividualRegister from "./Pages/Registration/IndividualRegister";
import Login from "./Pages/Registration/Login";
import OrgProfile from "./Pages/Registration/OrgProfile";
import OrgRegister from "./Pages/Registration/OrgRegister";
import Register from "./Pages/Registration/Register";
import VolunteerProfile from "./Pages/Registration/VolunteerProfile";
import VolunteerRegister from "./Pages/Registration/VolunteerRegister";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import SponsorChild from "./Pages/SponsorChild/SponsorChild";
import TribalMerch from "./Pages/TribalMerch/TribalMerch";
import Volunteers from "./Pages/Volunteers/Volunteers";
import Zakat from "./Pages/Zakat/Zakat";

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
        <Route path="/orgProfile" element={<OrgProfile></OrgProfile>}></Route>
        <Route path="/orgProfile" element={<OrgProfile></OrgProfile>}></Route>
        <Route path="/volunteerProfile" element={<VolunteerProfile></VolunteerProfile>}></Route>
        <Route path="/volunteerRegister" element={<VolunteerRegister></VolunteerRegister>}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/fundraiser" element={<Fundraiser />}></Route>
        <Route path="/zakats" element={<Zakat />}></Route>
        <Route path="/sponsorChild" element={<SponsorChild />}></Route>
        <Route path="/tribalMerch" element={<TribalMerch />}></Route>
        <Route path="/orphanage" element={<Orphanage />}></Route>
        <Route path="/volunteers" element={<Volunteers></Volunteers>}></Route>
        <Route path="/organizations" element={<Organizations></Organizations>}></Route>
        <Route path="/emergency" element={<Emergency></Emergency>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
