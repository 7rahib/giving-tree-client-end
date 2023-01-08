import { Route, Routes } from "react-router-dom";
import "./App.css";
import Donate from "./Pages/Donate/Donate";
import Emergency from "./Pages/Emergency/Emergency";
import Fundraiser from "./Pages/Fundaraiser/Fundraiser";
import Home from "./Pages/Home/Home";
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
import Zakat from "./Pages/Zakat/Zakat";
import AllEmergencyReliefs from './Pages/Dashboard/AllEmergencyReliefs';
import Dashboard from './Pages/Dashboard/Dashboard';
import PersonalReliefs from './Pages/Dashboard/PersonalReliefs';
import AddEmergencyRelief from './Pages/Dashboard/AddEmergencyRelief';
import RequiredAuth from './Pages/Registration/RequiredAuth';
import AllRunningReliefs from "./Pages/Emergency/RunningReliefs/AllRunningReliefs";
import Organization from "./Pages/Dashboard/Organization/Organization";
import Volunteer from "./Pages/Dashboard/Volunteer/Volunteer";
import EmergencyDetails from "./Pages/Emergency/EmergencyDetails";
import AllUsers from "./Pages/Dashboard/Users/AllUsers";
import Payment from "./Pages/Payment/Payment";
import AllDonations from "./Pages/Dashboard/Donations/AllDonations";
import PersonalDonations from "./Pages/Dashboard/Donations/PersonalDonations";
import UpazillaDonations from "./Pages/Dashboard/UpazillaDonations/UpazillaDonations";

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
        <Route path="/allrunningreliefs" element={<AllRunningReliefs />}></Route>
        <Route path="/fundraiser" element={<Fundraiser />}></Route>
        <Route path="/zakats" element={<Zakat />}></Route>
        <Route path="/sponsorChild" element={<SponsorChild />}></Route>
        <Route path="/tribalMerch" element={<TribalMerch />}></Route>
        <Route path="/orphanage" element={<Orphanage />}></Route>
        <Route path="/emergency" element={<Emergency></Emergency>}></Route>
        <Route path="/emergencydetails/:id" element={<EmergencyDetails></EmergencyDetails>}></Route>
        <Route path="/payment/:id" element={<Payment></Payment>}></Route>
        <Route path='/dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>}>
          <Route index element={<PersonalReliefs />} />
          <Route path='/dashboard/allemergenciesreliefs' element={<AllEmergencyReliefs />} />
          <Route path='/dashboard/alldonations' element={<AllDonations />} />
          <Route path='/dashboard/personalDonations' element={<PersonalDonations />} />
          <Route path='/dashboard/addemergencyrelief' element={<AddEmergencyRelief />} />
          <Route path='/dashboard/organizations' element={<Organization />} />
          <Route path='/dashboard/volunteers' element={<Volunteer />} />
          <Route path='/dashboard/users' element={<AllUsers />} />
          <Route path='/dashboard/upazilladonations' element={<UpazillaDonations />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
