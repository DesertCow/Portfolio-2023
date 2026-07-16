import Header from '../components/Header';
import Footer from '../components/Footer';
import ClimbingStats from '../components/ClimbingStats';
import '../css/About.css';

const AltitudeMarker = ({ label, dark }) => (
  <div className="about-altitude-marker">
    <span className="about-altitude-line" />
    <span className="about-altitude-label">{label}</span>
  </div>
);

const About = () => (
  <div className="page-about">
    <Header />

    {/* ===== HERO ===== */}
    <section className="about-hero">
      <div className="about-hero-inner">
        <div className="about-hero-text">
          <AltitudeMarker label="ABOUT" />
          <h1>Engineer. Founder. Mountaineer.</h1>
          <p className="about-hero-bio">
            Computer Engineering graduate from Oklahoma State University. Former Product Development Engineer at Intel, where I worked on PCIe interface development and high-volume manufacturing on cutting edge processors. AWS certified. Full-stack developer. Founder of Pico Edge Inc. — building autonomous coding agent infrastructure in Phoenix, Arizona.
          </p>
          <p className="about-hero-bio about-hero-bio-2">
            The mountains have always run parallel to the work. The same years I was learning to ship production silicon, I was learning to lead ice in Hyalite Canyon. Preparation matters. Partners matter. Building a company from zero works the same way.
          </p>
        </div>
        <img
          src={require('../img/AboutMe/Clayton_Skaggs_4.jpg')}
          alt="Clayton Skaggs"
          className="about-hero-photo"
        />
      </div>
    </section>

    {/* ===== CAREER + OUTDOOR PARALLEL TIMELINES ===== */}
    <section className="about-section cream">
      <div className="about-section-inner">
        <AltitudeMarker label="DUAL TIMELINE" />
        <h2 className="about-section-title">Two parallel routes. Same years.</h2>

        {/*
          CSS Grid: grid-template-columns 1fr 1fr, no row gap.
          Items auto-place in pairs — each pair shares a grid row,
          so the same era aligns horizontally on both sides.
          On mobile, flex + CSS order groups all career cells first,
          then all outdoor cells.
        */}
        <div className="dual-timeline-grid">

          {/* ── Column headers (grid row 1) ── */}
          <div className="timeline-col-header career-col-header">
            The Route — Career
          </div>
          <div className="timeline-col-header outdoor-col-header">
            The Outdoor Life · 2007–Present
            <span className="timeline-garmin-header">
              2,213 activities &middot; 8,114 mi &middot; 1,847 hrs &middot; 7 disciplines
            </span>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 1 · 2007–2012
              Career: Oklahoma State University
              Outdoor: First outdoor climb + college years
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2007 – 2012</div>
              <div className="timeline-org">Oklahoma State University</div>
              <div className="timeline-role">B.S. Computer Engineering · GPA 3.0</div>
              <div className="timeline-desc">
                Senior design project: Wireless Energy Harvesting for the 2012 International Microwave Symposium — Project Leader for a 4-member team. Also completed a custom digital IC design using CORDIC algorithm implementation at AMI C5N 0.6μm process.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2007 – 2013</div>
              <div className="timeline-org">First Outdoor Climb + College Years</div>
              <div className="timeline-role">Oklahoma State → Ouray Ice Park</div>
              <div className="timeline-desc">
                Started rock climbing outdoors in 2007 — the beginning of a lifelong pursuit of vertical terrain. Climbing throughout college at Oklahoma State. First ice climbing experience at Ouray Ice Park, Colorado (February 2013). First routes logged on Mountain Project. Early sport climbing at Queen Creek Canyon, Arizona.
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 2 · 2012–2014
              Career: Intel — Chandler, AZ
              Outdoor: Intel era + first ice season
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Jul 2012 – Mar 2016</div>
              <div className="timeline-org">Intel Corporation</div>
              <div className="timeline-role">Product Development Engineer · Chandler, AZ</div>
              <div className="timeline-desc">
                PDE responsible for testability and manufacturability of ICs from component feasibility through production ramp. Yield analysis, bin split capability, component spec vs. performance evaluation. First exposure to what engineering quality means when failure affects hundreds of millions of devices.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2012 – 2014</div>
              <div className="timeline-org">Intel Era Begins + First Ice Season</div>
              <div className="timeline-role">Chandler, AZ / Hyalite Canyon, MT</div>
              <div className="timeline-desc">
                Moved to Phoenix for Intel (Jul 2012). Sport climbing at Queen Creek Canyon — multi-pitch routes, slab, crack. First full ice season in Hyalite Canyon, Montana. Bouldering trips to Austin, TX. 42 routes logged in 2014 alone.
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 3 · 2015
              Career: Intel Chandler continues
              Outdoor: Going Deeper
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="career-continues">
              <div className="career-continues-dot" />
              <span className="career-continues-text">Intel Corporation — Chandler, AZ</span>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2015</div>
              <div className="timeline-org">Going Deeper</div>
              <div className="timeline-role">Multi-pitch trad / Hyalite / Splitboarding</div>
              <div className="timeline-desc">
                Biggest year on rock — 43 routes logged. Multi-pitch trad climbing: Ewephoria (5 pitches), Idiopathic (4 pitches), Frogland (6 pitches, Red Rocks). Second ice season in Hyalite, now combining ice days with backcountry splitboard objectives.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Sport</span>
                <span className="sport-badge sport-climbing">Trad</span>
                <span className="sport-badge sport-snow">Ice</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 4 · 2016
              Career: Intel — Santa Clara, CA
              Outdoor: Red Rocks + Tuolumne + leading ice
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Mar 2016 – Aug 2017</div>
              <div className="timeline-org">Intel Corporation</div>
              <div className="timeline-role">Product Development Engineer · Santa Clara, CA</div>
              <div className="timeline-desc">
                Promoted and transferred to Santa Clara. Responsible for testability of high-speed serial I/O (KTI/PCIe) for server CPUs on the latest process node. Pre-silicon validation of analog test content at IP and full-chip level. Silicon debug, characterization, and early customer return analysis.
              </div>
              <img
                src={require('../img/AboutMe/Sky_Lake_Die.jpeg')}
                alt="Intel SkyLake die"
                className="timeline-img"
              />
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2016</div>
              <div className="timeline-org">Red Rocks + Tuolumne + Leading Ice</div>
              <div className="timeline-desc">
                Major progression year. Tuolumne Meadows: Southeast Buttress of Cathedral Peak (5 pitches), multi-pitch routes on Dozier Dome. Started leading ice multi-pitch in Hyalite Canyon. Building the rope leadership skills that would later translate to leading teams.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Trad</span>
                <span className="sport-badge sport-snow">Ice</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 5 · 2017
              Career: Intel Santa Clara continues (to Aug)
              Outdoor: Epinephrine [HIGHLIGHT]
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="career-continues">
              <div className="career-continues-dot" />
              <span className="career-continues-text">Intel Corporation — Santa Clara, CA</span>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry highlight">
              <div className="timeline-dot" />
              <div className="timeline-year">2017</div>
              <div className="timeline-org">Epinephrine, Black Velvet Wall</div>
              <div className="timeline-role">Red Rocks, NV — 13 pitches, one of the 50 Classics</div>
              <div className="timeline-desc">
                Climbed Epinephrine on Black Velvet Wall — 13 pitches of sustained climbing, one of the 50 Classic Climbs of North America. Also followed the hardest ice route in Hyalite: a 3-pitch multi-pitch line. Off the rope: 146 cycling sessions, 16 resort snowboard days, 25 backcountry days. 204 total Garmin activities.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Climbing</span>
                <span className="sport-badge sport-cycling">Cycling</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 6 · 2018
              Career: Microchip Technology
              Outdoor: Superstitions + Pillow Fight
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Feb 2018 – Jun 2018</div>
              <div className="timeline-org">Microchip Technology</div>
              <div className="timeline-role">Product Test Engineer · Greater Phoenix Area</div>
              <div className="timeline-desc">
                Continued the HVM work started at Intel, focusing on yield analysis and production ramp. This was the final hardware role before making the complete pivot into software.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2018</div>
              <div className="timeline-org">Superstition Mountains + Pillow Fight</div>
              <div className="timeline-role">Peak cycling year · 291 activities</div>
              <div className="timeline-desc">
                Multi-pitch routes in the Superstition Mountains and Arizona headwalls. Pillow Fight (8 pitches) — the longest sport multi-pitch on the logbook. Climbing tapering as the career pivot took priority. Off the rock: 188 cycling sessions, 44 backcountry snow days (90 miles), 9 resort snowboard days.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Climbing</span>
                <span className="sport-badge sport-cycling">Cycling</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 7 · 2019
              Career: AWS Certifications
              Outdoor: Pico de Orizaba [HIGHLIGHT]
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Developer Associate (2017) · Cloud Practitioner (2019)</div>
              <div className="timeline-org">AWS Certifications</div>
              <div className="timeline-role">Developer Associate + Cloud Practitioner</div>
              <div className="timeline-desc">
                Self-directed cloud learning while still working in hardware. Gained working knowledge of Lambda, S3, DynamoDB, IAM, and the broader AWS ecosystem — the foundation for everything built at Pico Edge.
              </div>
              <img
                src={require('../img/AboutMe/AWS_Path.jpg')}
                alt="AWS certification path"
                className="timeline-img"
              />
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry highlight">
              <div className="timeline-dot" />
              <div className="timeline-year">October 2019</div>
              <div className="timeline-org">Pico de Orizaba — 18,491 ft</div>
              <div className="timeline-role">Mexico's highest peak · most active year on record</div>
              <div className="timeline-desc">
                Summited Pico de Orizaba as a two-person team with climbing partner Sean. Flew out Wednesday Oct 16th, summited Sunday Oct 19th, home by Monday Oct 21st. A glaciated volcanic peak requiring altitude acclimatization, crevasse navigation, and total self-sufficiency above 18,000 feet. The year itself: 388 Garmin activities — 45 runs (167 mi), surfing started (3 sessions), and this summit in October.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Climbing</span>
                <span className="sport-badge sport-running">Running</span>
                <span className="sport-badge sport-surfing">Surfing</span>
              </div>
              <img
                src="https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20191019_071542-01.jpeg"
                alt="Summit of Pico de Orizaba"
                className="timeline-img"
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 8 · 2020
              Career: (gap year)
              Outdoor: The Surf Pivot
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell" />
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2020</div>
              <div className="timeline-org">The Surf Pivot</div>
              <div className="timeline-role">Southern California</div>
              <div className="timeline-desc">
                COVID reshaped the routine but didn't stop it. Climbing slowed to a handful of sessions; surfing arrived for real — 44 sessions in the water. Running continued (29 sessions, 199 mi) and trail running began (13 sessions, 121 mi, 42k ft ascent). 10 backcountry snow days. 156 total activities.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-surfing">Surfing</span>
                <span className="sport-badge sport-running">Trail Running</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 9 · 2021
              Career: (gap year)
              Outdoor: The Surfer Era
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell" />
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2021</div>
              <div className="timeline-org">The Surfer Era</div>
              <div className="timeline-role">Newport Beach, CA · Newport Board Club</div>
              <div className="timeline-desc">
                Surfing dominated — 88 sessions (127 mi, 67 hrs in the water). Running 49 sessions (349 mi), trail running 25 sessions (201 mi). 10 resort snowboard days + 21 backcountry days. This is the era that produced the Newport Board Club app — building software for a surfing community Clayton was paddling out with every week.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-surfing">Surfing</span>
                <span className="sport-badge sport-running">Running</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 10 · 2022
              Career: UC Irvine bootcamp
              Outdoor: Balanced Athlete + Bootcamp
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">May – Jul 2022</div>
              <div className="timeline-org">UC Irvine</div>
              <div className="timeline-role">Web Development Certification Bootcamp</div>
              <div className="timeline-desc">
                Formal full-stack training. Built the React, Node.js, GraphQL, and MongoDB foundation that enabled the career pivot. Shipped Newport Board Club and Chuckwagon as production applications during the program.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2022</div>
              <div className="timeline-org">Balanced Athlete + Bootcamp</div>
              <div className="timeline-role">UCI Web Development · 1,005 miles across all sports</div>
              <div className="timeline-desc">
                The most evenly distributed outdoor year: 77 surf sessions, running peaked at 411 miles, trail running peaked at 358 miles (51k ft ascent), 16 resort snowboard days. 1,005 total miles across all disciplines. Simultaneously completed UCI's web development bootcamp — shipping the full-stack foundation that enabled the career pivot.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-surfing">Surfing</span>
                <span className="sport-badge sport-running">Running</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 11 · 2023
              Career: Sender One Climbing
              Outdoor: Transition Year
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Nov 2023 – Jun 2024</div>
              <div className="timeline-org">Sender One Climbing</div>
              <div className="timeline-role">Customer Experience Shift Lead · Santa Ana, CA</div>
              <div className="timeline-desc">
                Led introduction climbing courses and administered top rope belay and lead climbing certifications at one of the largest climbing gyms in the country. Teaching people to manage fear, trust systems, and take on incremental risk — directly transferable to building products people depend on.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2023</div>
              <div className="timeline-org">Transition Year</div>
              <div className="timeline-role">Santa Ana, CA → Denver, CO</div>
              <div className="timeline-desc">
                Surfing winding down (30 sessions). Trail running: 248 miles, 23k ft ascent. Running: 278 miles. Snowboarding shifting toward resort — 24 sessions (319 mi) + 11 backcountry days. Started at Sender One Climbing in November, back in the climbing world professionally and teaching it.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-running">Trail Running</span>
                <span className="sport-badge sport-snow">Snowboard</span>
                <span className="sport-badge sport-surfing">Surfing</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 12 · 2024
              Career: Eldora Mountain Resort
              Outdoor: California Trad Revival + Eldora
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">Oct 2024 – Jan 2026</div>
              <div className="timeline-org">Eldora Mountain Resort</div>
              <div className="timeline-role">Snowmaker Controller + Lift Operations · Nederland, CO</div>
              <div className="timeline-desc">
                Ran snowmaking equipment — water resources, temperature controls, energy and fuel systems, mechanical maintenance logs. Twelve-hour day shifts at altitude in subzero conditions. The kind of work that teaches systems thinking when the system is a mountain and the deadline is weather.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2024</div>
              <div className="timeline-org">California Trad Revival + Eldora</div>
              <div className="timeline-role">Joshua Tree / Tahquitz / Needles / Nederland, CO</div>
              <div className="timeline-desc">
                Returned to heavy trad climbing after the Sender One chapter: Joshua Tree, Tahquitz (White Maiden's Walkway, 6 pitches; Fingertip Traverse, 4 pitches), Needles (The Uneventful, 7 pitches). Eldora snowmaking started in October — 26 resort snowboard days (201 mi) before the season closed. 312 total activities.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Climbing</span>
                <span className="sport-badge sport-snow">Snowboard</span>
                <span className="sport-badge sport-running">Running</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 13 · 2025
              Career: Pico Edge, Inc. [HIGHLIGHT]
              Outdoor: The Snow Year
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="timeline-entry highlight">
              <div className="timeline-dot" />
              <div className="timeline-year">2025 – Present</div>
              <div className="timeline-org">Pico Edge, Inc.</div>
              <div className="timeline-role">Founder &amp; CEO · Phoenix, AZ</div>
              <div className="timeline-desc">
                Building since early 2025. Delaware C-Corp incorporated January 2026. Building a 14-stage autonomous coding pipeline that takes the LLM out of the verification position — deterministic test execution is the only acceptable proof of completion. A ticket plus a failing test goes in; verified, documented, production-ready code comes out. Stack: Python, AWS (Lambda, ECS Fargate, DynamoDB, S3, Cognito), React. Models: DeepSeek R1, Claude Sonnet.
              </div>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2025</div>
              <div className="timeline-org">The Snow Year</div>
              <div className="timeline-role">Eldora Mountain Resort · 130 sessions</div>
              <div className="timeline-desc">
                130 resort snowboard sessions — nearly every other day on the mountain — 574 miles, 548k ft ascent, 108 hours. Eldora through January 2026. Also 49 cycling sessions, 16 runs. Building Pico Edge in parallel. 218 total activities.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-snow">Snowboard</span>
                <span className="sport-badge sport-cycling">Cycling</span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              SLOT 14 · 2026
              Career: Pico Edge continues
              Outdoor: Colorado Ice + Splitboard
          ══════════════════════════════════════════ */}
          <div className="dual-career-cell">
            <div className="career-continues">
              <div className="career-continues-dot" />
              <span className="career-continues-text">Pico Edge, Inc.</span>
            </div>
          </div>
          <div className="dual-outdoor-cell">
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-year">2026</div>
              <div className="timeline-org">Colorado Ice + Splitboard</div>
              <div className="timeline-role">Ouray / Silverton / San Juans, CO</div>
              <div className="timeline-desc">
                Based in Denver through the season. Ice climbing in the San Juan Mountains — South Mineral Creek, Camp Bird Road, Ouray. Splitboarding the backcountry terrain in the same range. Almost everyone in the alpine ice scene skis; very few splitboard. Already 38 resort days (306 mi, 338k ft) by May. First ice climb was Ouray 2013 — back in the same range thirteen years later, on a snowboard.
              </div>
              <div className="sport-badges">
                <span className="sport-badge sport-climbing">Ice</span>
                <span className="sport-badge sport-snow">Snowboard</span>
              </div>
            </div>
          </div>

        </div>{/* end dual-timeline-grid */}
      </div>
    </section>

    <ClimbingStats />
    <Footer />
  </div>
);

export default About;
