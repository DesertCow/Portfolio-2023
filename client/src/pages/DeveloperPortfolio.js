import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

import ResumePDF from '../assets/Clayton_Skaggs_Resume.pdf';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevTools from '../components/DevTools';
import '../css/Portfolio.css';

const AltitudeMarker = ({ label }) => (
  <div className="portfolio-altitude-marker">
    <span className="portfolio-altitude-line" />
    <span className="portfolio-altitude-label">{label}</span>
  </div>
);

const DeveloperPortfolio = () => {
  const [page] = useState(1);
  const canvasRef = useRef(null);
  const { pdfDocument } = usePdf({ file: ResumePDF, page, canvasRef });

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
                  href="https://picoedge.dev"
                  className="pico-live-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  picoedge.dev →
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

      {/* ===== NEWPORT BOARD CLUB — WEB APP ===== */}
      <section className="project-section alt-bg">
        <div className="project-section-inner">
          <div className="project-section-header">
            <span className="project-tag tag-inactive">Inactive</span>
            <div>
              <h2 className="project-title">Newport Board Club</h2>
              <span className="project-subtitle">Progressive Web App</span>
            </div>
          </div>
          <div className="project-body">
            <div className="project-demo">
              <div className="demo-label">Demo</div>
              <img
                className="demo-gif"
                src={require('../img/DemoGIFs/The_Board_Club_App_Demo1.gif')}
                alt="Newport Board Club App Demo"
              />
              <a
                className="demo-link"
                href="https://boardclubapp-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
              <div className="demo-info">
                <p>App designed for mobile experience</p>
                <p>Screen width: 470px – 520px</p>
              </div>
              <div className="demo-credentials">
                <div className="demo-cred-title">Demo Login</div>
                <p className="demo-cred-line">Email: demo@gmail.com</p>
                <p className="demo-cred-line">Password: demo</p>
              </div>
            </div>
            <div className="project-info">
              <div className="stack-box">
                <div className="stack-box-title">Software Stack</div>
                <ul className="stack-list">
                  <li>App Type: Progressive Web App</li>
                  <li>Frontend: React (18.2.0)</li>
                  <li>Framework: Bootstrap (2.5.0)</li>
                  <li>API: GraphQL (16.6.0)</li>
                  <li>Backend: Node.js (16.15.1)</li>
                  <li>Database: MongoDB (5.6.0)</li>
                  <li>Photo Host: AWS S3</li>
                  <li>Hosting: Railway (client/server)</li>
                  <li>Database: Self-hosted (Docker)</li>
                </ul>
              </div>
              <div>
                <div className="project-desc-title">Project Overview</div>
                <p className="project-desc-text">
                  An application designed to allow members of the board club to view current surf and weather conditions, club events, log surf sessions, view surf tips, rental information, and general club information.
                </p>
                <div className="project-desc-title sub">Project Goal</div>
                <ul className="project-goal-list">
                  <li>Current surf and weather conditions with detailed weather modal</li>
                  <li>Events calendar so members can plan and attend club events</li>
                  <li>Surf log tracking sessions, conditions, and board choices over time</li>
                  <li>Surf hacks for new members and common problems</li>
                  <li>Newport surf map for picking the best spot</li>
                  <li>Community forum for connecting with other members</li>
                  <li>Admin console for managing surf hacks, events, and shaper list</li>
                </ul>
                <div className="github-links">
                  <a href="https://github.com/DesertCow/NewportBoardClubApp_PWA" className="github-link" target="_blank" rel="noreferrer">
                    <img src={require('../img/Icons/github.png')} alt="" />
                    Client
                  </a>
                  <a href="https://github.com/DesertCow/NewportBoardClubApp_Server" className="github-link" target="_blank" rel="noreferrer">
                    <img src={require('../img/Icons/github.png')} alt="" />
                    Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWPORT BOARD CLUB — REACT NATIVE ===== */}
      <section className="project-section">
        <div className="project-section-inner">
          <div className="project-section-header">
            <span className="project-tag tag-inactive">Inactive</span>
            <div>
              <h2 className="project-title">Newport Board Club</h2>
              <span className="project-subtitle">React Native (iOS &amp; Android)</span>
            </div>
          </div>
          <div className="project-body">
            <div className="project-demo">
              <div className="demo-label">Demo</div>
              <img
                className="demo-gif"
                src="https://claytonskaggs-s3-portfolio.s3.us-west-1.amazonaws.com/NBC_React_Native_Demo1.gif"
                alt="Newport Board Club React Native Demo"
              />
              <div className="demo-credentials">
                <div className="demo-cred-title">Demo Login</div>
                <p className="demo-cred-line">Email: demo@gmail.com</p>
                <p className="demo-cred-line">Password: demo</p>
              </div>
            </div>
            <div className="project-info">
              <div className="stack-box">
                <div className="stack-box-title">Software Stack</div>
                <ul className="stack-list">
                  <li>App Type: React Native</li>
                  <li>Frontend: React Native (0.72.3)</li>
                  <li>Build Tool: Expo (49.0.6)</li>
                  <li>API: GraphQL (16.6.0)</li>
                  <li>Backend: Node.js (16.15.1)</li>
                  <li>Database: MongoDB (5.6.0)</li>
                  <li>Photo Host: AWS S3</li>
                  <li>App Stores: GooglePlay / Apple (WIP)</li>
                </ul>
              </div>
              <div>
                <div className="project-desc-title">Project Overview</div>
                <p className="project-desc-text">
                  A ground-up rebuild of the original Newport Board Club app using React Native and Expo — deployed to both Android and iOS from a single codebase. Uses the same backend API and server as the PWA.
                </p>
                <div className="project-desc-title sub">Project Goal</div>
                <ul className="project-goal-list">
                  <li>All features from the original web app, native-first UX</li>
                  <li>Push notifications for surf conditions, events, and new boards</li>
                  <li>SVG interactive surf map</li>
                  <li>Admin console for managing content</li>
                  <li>Community forum and surf log</li>
                </ul>
                <div className="github-links">
                  <a href="https://github.com/DesertCow/NewportBoardClubApp_Native" className="github-link" target="_blank" rel="noreferrer">
                    <img src={require('../img/Icons/github.png')} alt="" />
                    Client
                  </a>
                  <a href="https://github.com/DesertCow/NewportBoardClubApp_Server" className="github-link" target="_blank" rel="noreferrer">
                    <img src={require('../img/Icons/github.png')} alt="" />
                    Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHUCKWAGON ===== */}
      <section className="project-section alt-bg">
        <div className="project-section-inner">
          <div className="project-section-header">
            <span className="project-tag tag-inactive">Inactive</span>
            <div>
              <h2 className="project-title">Chuckwagon</h2>
              <span className="project-subtitle">Food Truck Management — Progressive Web App</span>
            </div>
          </div>
          <div className="project-body">
            <div className="project-demo">
              <div className="demo-label">Demo</div>
              <img
                className="demo-gif"
                src={require('../img/DemoGIFs/Chuckwagon_Demo1.gif')}
                alt="Chuckwagon App Demo"
              />
              <a
                className="demo-link"
                href="https://saltlicktruck-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>
              <div className="demo-info">
                <p>App designed for mobile experience</p>
                <p>Screen width: 390px – 420px</p>
              </div>
              <div className="demo-credentials">
                <div className="demo-cred-title">Demo Login</div>
                <p className="demo-cred-line">Email: demo@gmail.com</p>
                <p className="demo-cred-line">Password: demo</p>
              </div>
            </div>
            <div className="project-info">
              <div className="stack-box">
                <div className="stack-box-title">Software Stack</div>
                <ul className="stack-list">
                  <li>App Type: Progressive Web App</li>
                  <li>Frontend: React (18.2.0)</li>
                  <li>Framework: Bootstrap (5.2.1)</li>
                  <li>API: GraphQL (15.3.0)</li>
                  <li>Backend: Node.js (16.15.1)</li>
                  <li>Database: MongoDB (5.6.0) + MySQL (2.3.3)</li>
                  <li>Hosting: Railway (client/server)</li>
                  <li>Database: Self-hosted (Docker)</li>
                </ul>
              </div>
              <div>
                <div className="project-desc-title">Project Overview</div>
                <p className="project-desc-text">
                  Chuckwagon is a comprehensive food truck management application — a customer ordering app plus a separate in-kitchen app for order execution and administration. Built on the MERN stack. Designed to run locally on a food truck and serve customers over WiFi without internet.
                </p>
                <div className="project-desc-title sub">Project Goal</div>
                <ul className="project-goal-list">
                  <li>Customers view the menu and add items to cart for checkout</li>
                  <li>Customer accounts for email marketing and repeat business</li>
                  <li>Dynamic menu from SQL database — real-time item availability</li>
                  <li>Order status tracking: Submitted → WIP → Ready → Picked Up</li>
                  <li>Kitchen page for employees to track and complete orders</li>
                  <li>Order analytics for business owners to increase margins</li>
                </ul>
                <div className="github-links">
                  <a href="https://github.com/DesertCow/SaltLickTruck" className="github-link" target="_blank" rel="noreferrer">
                    <img src={require('../img/Icons/github.png')} alt="" />
                    Client + Server
                  </a>
                </div>
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
