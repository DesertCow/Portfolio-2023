import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//* Font Import
// import "./fonts/Catamaran-Bold.ttf"

//* Page Import

import Home from './pages/Home';


//* Main App / Routing

export default function App() {

  require('./style.css')
  require('./reset.css')

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}