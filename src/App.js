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
import AddTribalMerch from "./Pages/Dashboard/AddTribalMerch";
import AllTribalMerch from "./Pages/Dashboard/AllTribalMerch";
import TribalMerchDescription from "./Pages/TribalMerch/TribalMerchDescription";
import PaymentOrder from "./Pages/TribalMerch/Order/PaymentOrder";
import AllTribalMerchOrders from "./Pages/Dashboard/AllTribalMerchOrders";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/individualRegister" element={<IndividualRegister />}></Route>
          <Route path="/orgRegister" element={<OrgRegister />}></Route>
          <Route path="/orgProfile" element={<OrgProfile />}></Route>
          <Route path="/orgProfile" element={<OrgProfile />}></Route>
          <Route path="/volunteerProfile" element={<VolunteerProfile />}></Route>
          <Route path="/volunteerRegister" element={<VolunteerRegister />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/allrunningreliefs" element={<AllRunningReliefs />}></Route>
          <Route path="/fundraiser" element={<Fundraiser />}></Route>
          <Route path="/zakats" element={<Zakat />}></Route>
          <Route path="/sponsorChild" element={<SponsorChild />}></Route>
          <Route path="/tribalMerch" element={<TribalMerch />}></Route>
          <Route path="/orphanage" element={<Orphanage />}></Route>
          <Route path="/emergency" element={<Emergency />}></Route>
          <Route path="/tribalmerchdescription/:id" element={<TribalMerchDescription />}></Route>
          <Route path="/emergencydetails/:id" element={<EmergencyDetails />}></Route>
          <Route path="/payment/:id" element={<Payment />}></Route>
          <Route path="/paymentorder/:id" element={<PaymentOrder />}></Route>
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
            <Route path='/dashboard/addtribalmerch' element={<AddTribalMerch />} />
            <Route path='/dashboard/alltribalmerch' element={<AllTribalMerch />} />
            <Route path='/dashboard/alltribalmerchorders' element={<AllTribalMerchOrders />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
}

export default App;
