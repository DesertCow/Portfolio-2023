import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [iceOpen, setIceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setMediaOpen(false);
    setIceOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <a href="/home" className="header-logo">CS</a>

      <nav className={`header-nav${menuOpen ? ' nav-open' : ''}`}>
        <a href="/Home" className="nav-link" onClick={closeAll}>Home</a>
        <a href="/DevPortfolio" className="nav-link" onClick={closeAll}>Dev Portfolio</a>

        <div className={`nav-dropdown${mediaOpen ? ' open' : ''}`}>
          <button
            className="nav-link dropdown-btn"
            onClick={() => { setMediaOpen(v => !v); setIceOpen(false); }}
          >
            Media <span className="dropdown-arrow">▾</span>
          </button>
          <div className="dropdown-menu">
            <a href="/Media/Photo" className="dropdown-item" onClick={closeAll}>Photo Gallery</a>
            <a href="/Media/Video" className="dropdown-item" onClick={closeAll}>Video Gallery</a>
            <a href="/Media/Blog" className="dropdown-item" onClick={closeAll}>Blog</a>
          </div>
        </div>

        <div className={`nav-dropdown${iceOpen ? ' open' : ''}`}>
          <button
            className="nav-link dropdown-btn"
            onClick={() => { setIceOpen(v => !v); setMediaOpen(false); }}
          >
            Ice Maps <span className="dropdown-arrow">▾</span>
          </button>
          <div className="dropdown-menu">
            <a href="/IceMaps/Hylaite" className="dropdown-item" onClick={closeAll}>Hyalite Canyon, MT</a>
            <a href="/IceMaps/Cody" className="dropdown-item" onClick={closeAll}>Cody, WY</a>
          </div>
        </div>

        <a href="/About" className="nav-link" onClick={closeAll}>About Me</a>
        <a href="/Contact" className="nav-link" onClick={closeAll}>Contact</a>
      </nav>

      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
    </header>
  );
};

export default Header;
