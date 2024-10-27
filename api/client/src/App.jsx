import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import ChargingPage from './pages/charging';
import DischargingPage from './pages/discharging';
import Chatbot from './pages/chatbot';
import WalletPage from './pages/wallet';
import ConfirmDischargePage from './pages/confirmDischarge';
import ConfirmCharging from './pages/ConfirmCharging';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/charging' element={<ChargingPage />} />
        <Route path='/discharging' element={<DischargingPage />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/confirmDischarge' element={<ConfirmDischargePage />} />
        <Route path='/confirmCharge' element={<ConfirmCharging />} />


        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
