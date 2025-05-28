import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminDashboard from './components/Admin/AdminDashboard';
import HRDashboard from './components/HR/HrDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import EventFlow from './Pages/EventFlow/EventFlow';

import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    try {
      const userString = localStorage.getItem("user");
      if (userString) {
        JSON.parse(userString);
      }
    } catch (error) {
      console.error("Corrupted user data in localStorage:", error);
      localStorage.removeItem("user");
    }
  }, []);

  return (
    <>
      <Router>
        <Header /> 
        <Routes>
          {/* Public routes, no protection */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/services/:serviceId/:eventId/flow" element={<EventFlow />} />
          
          {/* Protected routes with role requirements */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr/dashboard"
            element={
              <ProtectedRoute requiredRole="hr">
                <HRDashboard />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<div className="not-found">Page Not Found</div>} />
        </Routes>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;

