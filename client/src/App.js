
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//* Page Import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Portfolio from './pages/DeveloperPortfolio'
import PhotoGallery from './pages/MediaPages/PhotoGallery';
import VideoGallery from './pages/MediaPages/VideoGallery';
import HylaiteCanyon from './pages/IceMaps/HyaliteCanyon';
// import VideoGallery from './pages/MediaPages/VideoGallery';
import Blog from './pages/MediaPages/Blog';


//+++++++++++++++++++ Main App Routing +++++++++++++++++++
export default function App() {

  //* Main App CSS Import
  require('./css/reset.css')
  require('./css/style.css')
  require('./css/import.css')

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
        <Route path="/IceMaps/Hylaite" element={<HylaiteCanyon />} />
        <Route path="/IceMaps/Cody" element={<HylaiteCanyon />} />
        <Route path="/Media/Blog" element={<Blog />} />
      </Routes>
    </Router>

  );
}

//!========================= EOF =========================