import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//* Font Import
// import "./fonts/Catamaran-Bold.ttf"

//* Page Import

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/DeveloperPortfolio'



//* Main App / Routing

export default function App() {

  require('./style.css')
  require('./reset.css')

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DevPortfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}