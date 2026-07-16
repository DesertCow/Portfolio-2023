import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Home.css';

const AltitudeMarker = ({ label }) => (
  <div className="altitude-marker">
    <span className="altitude-line" />
    <span className="altitude-label">{label}</span>
  </div>
);

const RouteConnector = ({ variant }) => (
  <div className={`route-connector-wrap ${variant}`}>
    <svg width="2" height="60" aria-hidden="true" className="route-connector">
      <line x1="1" y1="0" x2="1" y2="60"
        stroke="var(--color-sand)"
        strokeWidth="2"
        strokeDasharray="6 4"
        strokeOpacity="0.6"
      />
    </svg>
  </div>
);

const ROLES = [
  'Founder & CEO, Pico Edge',
  'Intel Product Development Engineer',
  'Silicon to Summits to Software',
];

const Home = () => {
  const layerBackRef  = useRef(null);
  const layerMidRef   = useRef(null);
  const layerFrontRef = useRef(null);
  const starsRef      = useRef(null);
  const heroRef       = useRef(null);

  const [roleText,    setRoleText]    = useState('');
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [charIndex,   setCharIndex]   = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];
    const typeSpeed   = isDeleting ? 30 : 55;
    const pauseDelay  = 2600;

    const tick = () => {
      if (!isDeleting && charIndex === full.length) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
        return;
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % ROLES.length);
        return;
      }
      setCharIndex(i => i + (isDeleting ? -1 : 1));
      setRoleText(full.slice(0, charIndex + (isDeleting ? 0 : 1)));
    };

    const id = setTimeout(tick, typeSpeed);
    return () => clearTimeout(id);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroH = heroRef.current ? heroRef.current.offsetHeight : window.innerHeight;
      if (y < heroH) {
        if (layerBackRef.current)  layerBackRef.current.style.transform  = `translateY(${y * 0.08}px)`;
        if (layerMidRef.current)   layerMidRef.current.style.transform   = `translateY(${y * 0.16}px)`;
        if (layerFrontRef.current) layerFrontRef.current.style.transform = `translateY(${y * 0.26}px)`;
        if (starsRef.current)      starsRef.current.style.opacity        = String(Math.max(0, 1 - y / 480));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-home">
      <Header />

      {/* ===== HERO ===== */}
      <section className="hero-section" ref={heroRef}>
        <div className="mountain-bg" aria-hidden="true">

          {/* Stars */}
          <svg ref={starsRef} className="stars-svg" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
            <circle cx="52"   cy="28"  r="1.2" fill="rgba(255,255,255,0.9)"/>
            <circle cx="148"  cy="62"  r="0.8" fill="rgba(255,255,255,0.7)"/>
            <circle cx="280"  cy="18"  r="1.5" fill="rgba(255,255,255,0.95)"/>
            <circle cx="378"  cy="76"  r="1.0" fill="rgba(255,255,255,0.8)"/>
            <circle cx="490"  cy="22"  r="0.7" fill="rgba(255,255,255,0.6)"/>
            <circle cx="600"  cy="48"  r="1.3" fill="rgba(255,255,255,0.9)"/>
            <circle cx="718"  cy="14"  r="1.0" fill="rgba(255,255,255,0.8)"/>
            <circle cx="846"  cy="44"  r="0.8" fill="rgba(255,255,255,0.7)"/>
            <circle cx="952"  cy="28"  r="1.5" fill="rgba(255,255,255,0.95)"/>
            <circle cx="1078" cy="58"  r="1.0" fill="rgba(255,255,255,0.8)"/>
            <circle cx="1198" cy="22"  r="0.7" fill="rgba(255,255,255,0.6)"/>
            <circle cx="1350" cy="42"  r="1.2" fill="rgba(255,255,255,0.9)"/>
            <circle cx="1420" cy="80"  r="0.8" fill="rgba(255,255,255,0.7)"/>
            <circle cx="102"  cy="102" r="0.8" fill="rgba(255,255,255,0.6)"/>
            <circle cx="248"  cy="138" r="1.0" fill="rgba(255,255,255,0.8)"/>
            <circle cx="416"  cy="88"  r="0.7" fill="rgba(255,255,255,0.5)"/>
            <circle cx="578"  cy="128" r="1.3" fill="rgba(255,255,255,0.85)"/>
            <circle cx="738"  cy="98"  r="0.8" fill="rgba(255,255,255,0.7)"/>
            <circle cx="878"  cy="148" r="1.0" fill="rgba(255,255,255,0.75)"/>
            <circle cx="1018" cy="108" r="0.7" fill="rgba(255,255,255,0.6)"/>
            <circle cx="1158" cy="138" r="1.2" fill="rgba(255,255,255,0.85)"/>
            <circle cx="1298" cy="102" r="0.8" fill="rgba(255,255,255,0.7)"/>
            <circle cx="32"   cy="168" r="0.9" fill="rgba(255,255,255,0.65)"/>
            <circle cx="204"  cy="198" r="0.7" fill="rgba(255,255,255,0.5)"/>
            <circle cx="362"  cy="158" r="1.1" fill="rgba(255,255,255,0.75)"/>
            <circle cx="518"  cy="188" r="0.8" fill="rgba(255,255,255,0.6)"/>
            <circle cx="678"  cy="168" r="1.3" fill="rgba(255,255,255,0.85)"/>
            <circle cx="838"  cy="198" r="0.7" fill="rgba(255,255,255,0.5)"/>
            <circle cx="998"  cy="178" r="1.0" fill="rgba(255,255,255,0.75)"/>
            <circle cx="1138" cy="198" r="0.8" fill="rgba(255,255,255,0.6)"/>
            <circle cx="1278" cy="168" r="1.2" fill="rgba(255,255,255,0.8)"/>
            <circle cx="460"  cy="238" r="0.9" fill="rgba(255,255,255,0.55)"/>
            <circle cx="780"  cy="228" r="0.7" fill="rgba(255,255,255,0.5)"/>
            <circle cx="1098" cy="238" r="1.1" fill="rgba(255,255,255,0.65)"/>
            <circle cx="1388" cy="152" r="0.9" fill="rgba(255,255,255,0.7)"/>
          </svg>

          {/* Back mountain layer — highest, most distant */}
          <svg
            ref={layerBackRef}
            className="mountain-layer"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMax slice"
          >
            <polygon
              points="0,500 0,320 120,256 240,300 340,118 440,198 580,78 700,158 818,178 920,98 1020,168 1150,128 1280,188 1380,198 1440,218 1440,500"
              fill="#232939"
            />
            <polygon points="554,124 580,78 606,124"  fill="rgba(232,223,213,0.42)"/>
            <polygon points="898,138 920,98  942,138"  fill="rgba(232,223,213,0.32)"/>
            <polygon points="1128,165 1150,128 1172,165" fill="rgba(232,223,213,0.22)"/>
          </svg>

          {/* Mid mountain layer */}
          <svg
            ref={layerMidRef}
            className="mountain-layer"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMax slice"
          >
            <polygon
              points="0,500 0,358 200,258 360,308 450,198 580,258 700,228 820,268 1000,208 1150,258 1300,248 1440,288 1440,500"
              fill="#1f2430"
            />
            <polygon points="428,238 450,198 472,238" fill="rgba(232,223,213,0.28)"/>
            <polygon points="978,244 1000,208 1022,244" fill="rgba(232,223,213,0.2)"/>
          </svg>

          {/* Front mountain layer — closest */}
          <svg
            ref={layerFrontRef}
            className="mountain-layer"
            viewBox="0 0 1440 500"
            preserveAspectRatio="xMidYMax slice"
          >
            <polygon
              points="0,500 0,428 148,368 298,408 378,318 498,378 618,338 738,388 858,358 978,408 1098,328 1218,388 1328,368 1440,418 1440,500"
              fill="#1a1e25"
            />
          </svg>
        </div>

        <div className="hero-content">
          <div className="altitude-pin">
            <span className="altitude-pin-line" />
            <span className="altitude-pin-label">18,491 ft</span>
          </div>
          <h1 className="hero-name">Clayton Skaggs</h1>
          <div className="hero-roles-wrap">
            <span className="hero-role">{roleText}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-bio">
            From Intel silicon labs to frozen waterfalls to founding Pico Edge — I solve hard problems in unforgiving environments.
          </p>
          <div className="hero-ctas">
            <a href="/DevPortfolio" className="cta-primary">Dev Portfolio →</a>
            <a href="/About" className="cta-ghost">About Me</a>
          </div>
        </div>
      </section>

      <RouteConnector variant="dark-to-cream" />

      {/* ===== BASE CAMP ===== */}
      <section className="base-camp-section fade-in">
        <div className="section-inner">
          <AltitudeMarker label="BASE CAMP — WHAT I'M BUILDING" />
          <h2 className="section-title">Software that builds itself.</h2>
          <p className="section-body">
            Pico Edge is an autonomous coding pipeline with a 14-stage DAG that takes the LLM out of the verification position. A ticket plus a failing test goes in; verified, documented, production-ready code comes out. Deterministic test execution is the only acceptable proof of completion.
          </p>
          <div className="base-camp-grid">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="terminal-title-bar">pico-edge</span>
              </div>
              <div className="terminal-body">
                <p className="t-line t-line-1"><span className="t-prompt">$</span> pico resolve TICKET-4821</p>
                <p className="t-line t-line-2 t-dim">→ analyzing ticket context...</p>
                <p className="t-line t-line-3 t-dim">→ generating TDD suite...</p>
                <p className="t-line t-line-4 t-success">✓ tests 14/14 passing</p>
                <p className="t-line t-line-5 t-success">✓ council 6/6 GO</p>
                <p className="t-line t-line-6 t-accent">→ PR opened: feat/TICKET-4821</p>
              </div>
            </div>
            <div className="pipeline-pills">
              <span className="pill">Ticket Analysis</span>
              <span className="pill">TDD Generation</span>
              <span className="pill">Dual Dev Passes</span>
              <span className="pill">6-Judge Council</span>
              <span className="pill">Verified PR</span>
            </div>
          </div>
        </div>
      </section>

      <RouteConnector variant="cream-to-dark" />

      {/* ===== THE CRUX ===== */}
      <section className="crux-section fade-in">
        <div className="section-inner">
          <AltitudeMarker label="THE CRUX — WHY MOUNTAINS MATTER" />
          <h2 className="section-title section-title-light">
            The mountain doesn't care about your plan.
          </h2>
          <div className="crux-grid">
            <div className="crux-card">
              <h3 className="crux-card-title">On the mountain</h3>
              <p>
                Route-finding in whiteout conditions. Ice screws that won't take. A pitch that looked climbable from below but isn't. You adapt or you retreat.
              </p>
            </div>
            <div className="crux-card">
              <h3 className="crux-card-title">At the keyboard</h3>
              <p>
                A pipeline stage that silently swallows errors. A model that hallucinates test cases. An architecture that doesn't scale. Same discipline: assess, adapt, execute — or fail.
              </p>
            </div>
          </div>
          <blockquote className="crux-quote">
            "Success and failure in the mountains prepare you to be comfortable with the only certainty in startups: that nothing goes as planned."
          </blockquote>
        </div>
      </section>

      <RouteConnector variant="dark-to-cream-2" />

      {/* ===== SUMMIT LOG ===== */}
      <section className="summit-log-section fade-in">
        <div className="section-inner">
          <AltitudeMarker label="SUMMIT LOG" />
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-num">Intel</span>
              <span className="stat-label">5 Years · Product Development</span>
              <span className="stat-sub">Server processors, high-volume manufacturing</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Pico Edge</span>
              <span className="stat-label">Autonomous Coding</span>
              <span className="stat-sub">Ticket in, verified PR out</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">18,491 ft</span>
              <span className="stat-label">Highest Summit</span>
              <span className="stat-sub">Pico de Orizaba, Mexico</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Phoenix, AZ</span>
              <span className="stat-label">Home Base</span>
              <span className="stat-sub">Mountain Time Zone</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Oklahoma State</span>
              <span className="stat-label">B.S. Computer Engineering</span>
              <span className="stat-sub">Class of 2012</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Epinephrine</span>
              <span className="stat-label">Red Rocks · 13 Pitches</span>
              <span className="stat-sub">50 Classic Climbs of North America</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
