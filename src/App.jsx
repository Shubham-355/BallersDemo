import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PhilanthropyPage from './Pages/PhilanthropyPage';
import InvestmentsPage from './Pages/InvestmentsPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/philanthropy" element={<PhilanthropyPage />} />
            <Route path="/investments" element={<InvestmentsPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;