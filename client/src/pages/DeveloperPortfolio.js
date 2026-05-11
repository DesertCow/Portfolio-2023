import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

import ResumePDF from '../assets/Clayton_Skaggs_Resume.pdf';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevTools from '../components/DevTools';
import '../css/Portfolio.css';

const PDF_WORKER_SRC = '/pdf.worker.min.mjs';

const AltitudeMarker = ({ label }) => (
  <div className="portfolio-altitude-marker">
    <span className="portfolio-altitude-line" />
    <span className="portfolio-altitude-label">{label}</span>
  </div>
);

const DeveloperPortfolio = () => {
  const [page] = useState(1);
  const canvasRef = useRef(null);
  const { pdfDocument } = usePdf({ file: ResumePDF, page, canvasRef, workerSrc: PDF_WORKER_SRC });

  return (
    <div className="page-portfolio">
      <Header />

      {/* ===== PAGE HEADER ===== */}
      <div className="portfolio-page-header">
        <div className="portfolio-page-header-inner">
          <AltitudeMarker label="DEV PORTFOLIO" />
          <h1 className="portfolio-page-title">Featured Projects</h1>
        </div>
      </div>

      {/* ===== PICO EDGE ===== */}
      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-section-header">
            <span className="project-tag tag-current">CURRENT</span>
            <div>
              <h2 className="project-title">Pico Edge</h2>
              <span className="project-subtitle">Autonomous Coding Agent Platform</span>
            </div>
          </div>
          <div className="project-body">
            <div className="project-demo">
              <div className="demo-label">Overview</div>
              <div className="pico-demo-card">
                <p className="pico-demo-text">
                  A <strong>14-stage DAG</strong> that takes the LLM out of the verification position. A ticket plus a failing test goes in; verified, documented, production-ready code comes out.<br /><br />
                  Deterministic test execution is the only acceptable proof of completion — no council vote, no LLM self-assessment.<br /><br />
                  Stack: Python, AWS (Lambda, ECS Fargate, DynamoDB, S3, Cognito), React. Models: DeepSeek R1, Claude Sonnet. Test runners: pytest, Jest. Delaware C-Corp, founded 2026.
                </p>
                <a
                  href="https://www.pico-edge.com"
                  className="pico-live-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.pico-edge.com →
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="stack-box">
                <div className="stack-box-title">Software Stack</div>
                <ul className="stack-list">
                  <li>Platform: Autonomous Coding Pipeline</li>
                  <li>Frontend: React</li>
                  <li>Backend: Python + AWS Lambda + ECS Fargate</li>
                  <li>Database: DynamoDB + S3</li>
                  <li>Auth: AWS Cognito</li>
                  <li>Models: DeepSeek R1, Claude Sonnet</li>
                  <li>Test Runners: pytest, Jest</li>
                  <li>Entity: Delaware C-Corp (est. 2026)</li>
                </ul>
              </div>
              <div>
                <div className="project-desc-title">Project Overview</div>
                <p className="project-desc-text">
                  Pico Edge is a 14-stage autonomous coding pipeline that takes the LLM out of the verification position. The system uses deterministic test execution — not model self-assessment — as the only acceptable proof that the work is complete. A ticket plus a failing test goes in; verified, documented, production-ready code comes out.
                </p>
                <div className="project-desc-title sub">Development Status</div>
                <span className="project-tag tag-active project-status-tag">
                  Active — Preparing Starter Tier Launch
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EARLIER WORK DIVIDER ===== */}
      <div className="earlier-work-header">
        <AltitudeMarker label="EARLIER WORK" />
        <h2 className="earlier-work-title">Bootcamp &amp; Side Projects</h2>
        <p className="earlier-work-subtitle">
          Built during the UC Irvine Web Development Bootcamp (2022). These projects demonstrate full-stack fundamentals — React, GraphQL, MongoDB, Node.js — and were the foundation for the engineering work at Pico Edge.
        </p>
      </div>

      {/* ===== LEGACY PROJECT CARDS ===== */}
      <section className="legacy-projects-section">
        <div className="legacy-projects-inner">
          <div className="legacy-grid">

            <div className="legacy-card">
              <div className="legacy-card-header">
                <h3 className="legacy-card-title">Newport Board Club</h3>
                <span className="project-tag tag-inactive">Inactive</span>
              </div>
              <p className="legacy-card-subtitle">Progressive Web App</p>
              <p className="legacy-card-desc">
                Surf club management app — members view conditions, log sessions, track events, and connect via community forum. Admin console for content management. Built for the Newport Beach surfing community Clayton was paddling out with every week.
              </p>
              <div className="legacy-tech-pills">
                <span>React</span><span>GraphQL</span><span>MongoDB</span>
                <span>Node.js</span><span>AWS S3</span><span>Railway</span>
              </div>
              <div className="legacy-card-links">
                <a href="https://boardclubapp-production.up.railway.app/" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="https://github.com/DesertCow/NewportBoardClubApp_PWA" target="_blank" rel="noreferrer">GitHub (Client)</a>
                <a href="https://github.com/DesertCow/NewportBoardClubApp_Server" target="_blank" rel="noreferrer">GitHub (Server)</a>
              </div>
            </div>

            <div className="legacy-card">
              <div className="legacy-card-header">
                <h3 className="legacy-card-title">Newport Board Club</h3>
                <span className="project-tag tag-inactive">Inactive</span>
              </div>
              <p className="legacy-card-subtitle">React Native (iOS &amp; Android)</p>
              <p className="legacy-card-desc">
                Ground-up React Native rebuild of the web app. Single codebase for Android and iOS via Expo. Push notifications for surf conditions and events, SVG interactive surf map. Same backend API as the PWA.
              </p>
              <div className="legacy-tech-pills">
                <span>React Native</span><span>Expo</span><span>GraphQL</span>
                <span>MongoDB</span><span>Node.js</span><span>AWS S3</span>
              </div>
              <div className="legacy-card-links">
                <a href="https://github.com/DesertCow/NewportBoardClubApp_Native" target="_blank" rel="noreferrer">GitHub (Client)</a>
                <a href="https://github.com/DesertCow/NewportBoardClubApp_Server" target="_blank" rel="noreferrer">GitHub (Server)</a>
              </div>
            </div>

            <div className="legacy-card">
              <div className="legacy-card-header">
                <h3 className="legacy-card-title">Chuckwagon</h3>
                <span className="project-tag tag-inactive">Inactive</span>
              </div>
              <p className="legacy-card-subtitle">Food Truck Management PWA</p>
              <p className="legacy-card-desc">
                Customer ordering app plus in-kitchen order management dashboard. Designed to run locally over WiFi on the truck — no internet required. Order tracking from submission through pickup, dynamic menu via SQL, and order analytics for margin analysis.
              </p>
              <div className="legacy-tech-pills">
                <span>React</span><span>GraphQL</span><span>MongoDB</span>
                <span>MySQL</span><span>Node.js</span><span>Railway</span>
              </div>
              <div className="legacy-card-links">
                <a href="https://saltlicktruck-production.up.railway.app/" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="https://github.com/DesertCow/SaltLickTruck" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== DEVELOPER SKILLS ===== */}
      <div className="skills-heading">
        <AltitudeMarker label="DEVELOPER SKILLS" />
        <h2 className="skills-section-title">Tools &amp; Technologies</h2>
      </div>
      <DevTools />

      {/* ===== RESUME ===== */}
      <section className="resume-section">
        <div className="resume-section-inner">
          <AltitudeMarker label="RESUME" />
          <h2 className="resume-section-title">Clayton Skaggs</h2>
          {!pdfDocument && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-text-light)' }}>Loading...</span>}
          <canvas ref={canvasRef} className="pdf-canvas" />
          <a
            href={ResumePDF}
            download="Clayton_Skaggs_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-download-btn"
          >
            Download Resume
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeveloperPortfolio;
