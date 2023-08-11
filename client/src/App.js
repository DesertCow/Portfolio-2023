
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//* Page Import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/DeveloperPortfolio'
import PhotoGallery from './pages/MediaPages/PhotoGallery';
import VideoGallery from './pages/MediaPages/VideoGallery';
import Blog from './pages/MediaPages/Blog';


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
        <Route path="/Media/Photo" element={<PhotoGallery />} />
        <Route path="/Media/Video" element={<VideoGallery />} />
        <Route path="/Media/Blog" element={<Blog />} />
      </Routes>
    </Router>

  );
}

//!========================= EOF =========================