// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './components/Loader';
import Navigation from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Howitworks from './pages/Howitworks';
import Pricing from './pages/Pricing';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Loginsignup from './pages/Loginsignup';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';
import IndexPage from './pages/booking/Index';
import AvailablePage from './pages/booking/Available';
import BookingPage from './pages/booking/Booking';
import PaymentSuccess from './components/PaymentSuccess';
import NavigationPage from './components/NavigationPage';
import MyProfile from './pages/MyProfile';

// Admin
import AdminLogin from '../../admin/AdminLogin';
import Dashboard from '../../admin/Dashboard';
import Bookings from '../../admin/Booking';


const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  const isAdminRoute = location.pathname.startsWith('/admin');

  if (loading) return <Loader />;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} style={{ zIndex: 99999 }} />
      {!isAdminRoute && <Navigation />}
      
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<Howitworks key={location.pathname} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<Aboutus key={location.pathname} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authpage" element={<Loginsignup />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/available1" element={<AvailablePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/navigate/:bookingId" element={<NavigationPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/profile" element={<MyProfile />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/bookings" element={<Bookings />} />
        </Routes>
  

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
