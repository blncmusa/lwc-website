import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import Dashboard from './pages/admin-dashboard/Dashboard';
import Header from './components/Header';
import "./index.css";

function AppContent() {
  const location = useLocation();

  // Hide Header for admin and dashboard routes
  const shouldShowHeader = !location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen w-[100%]">
      {shouldShowHeader && <Header />}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          
          {/* Admin and Dashboard routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
