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
            Computer Engineering graduate from Oklahoma State University. Former Product Development Engineer at Intel, where I worked on PCIe interface development and high-volume manufacturing for world-class processors. AWS certified. Full-stack developer. Founder of Pico Edge Inc. — building autonomous coding agent infrastructure in Denver, Colorado.
          </p>
          <p className="about-hero-bio about-hero-bio-2">
            The mountains have always run parallel to the work. The same years I was learning to ship production silicon, I was learning to lead ice routes in Hyalite Canyon. In winters, that means ice climbing and splitboarding — backcountry objectives on a snowboard in terrain where almost everyone else is on skis. The same discipline required to manage a 14-stage deterministic pipeline is the same discipline required to manage a multi-pitch alpine objective in changing weather. Preparation, partnership, and comfort with uncertainty under pressure.
          </p>
        </div>
        <img
          src={require('../img/AboutMe/Clayton_Skaggs_4.jpg')}
          alt="Clayton Skaggs"
          className="about-hero-photo"
        />
      </div>
    </section>

    {/* ===== CAREER + CLIMBING PARALLEL TIMELINES ===== */}
    <section className="about-section cream">
      <div className="about-section-inner">
        <AltitudeMarker label="DUAL TIMELINE" />
        <h2 className="about-section-title">Two parallel routes. Same years.</h2>

        <div className="dual-timeline">
          {/* === CAREER TIMELINE === */}
          <div>
            <div className="timeline-col-header">The Route — Career</div>
            <div className="timeline-col">

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2007 – 2012</div>
                <div className="timeline-org">Oklahoma State University</div>
                <div className="timeline-role">B.S. Computer Engineering · GPA 3.0</div>
                <div className="timeline-desc">
                  Senior design project: Wireless Energy Harvesting for the 2012 International Microwave Symposium — Project Leader for a 4-member team. Also completed a custom digital IC design using CORDIC algorithm implementation at AMI C5N 0.6μm process.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">Jul 2012 – Mar 2016</div>
                <div className="timeline-org">Intel Corporation</div>
                <div className="timeline-role">Product Development Engineer · Chandler, AZ</div>
                <div className="timeline-desc">
                  PDE responsible for testability and manufacturability of ICs from component feasibility through production ramp. Yield analysis, bin split capability, component spec vs. performance evaluation. First exposure to what engineering quality means when failure affects hundreds of millions of devices.
                </div>
              </div>

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

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">Feb 2018 – Jun 2018</div>
                <div className="timeline-org">Microchip Technology</div>
                <div className="timeline-role">Product Test Engineer · Greater Phoenix Area</div>
                <div className="timeline-desc">
                  Continued the HVM work started at Intel, focusing on yield analysis and production ramp. This was the final hardware role before making the complete pivot into software.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2017, 2019</div>
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

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">May – Jul 2022</div>
                <div className="timeline-org">UC Irvine</div>
                <div className="timeline-role">Web Development Certification Bootcamp</div>
                <div className="timeline-desc">
                  Formal full-stack training. Built the React, Node.js, GraphQL, and MongoDB foundation that enabled the career pivot. Shipped Newport Board Club and Chuckwagon as production applications during the program.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">Nov 2023 – Jun 2024</div>
                <div className="timeline-org">Sender One Climbing</div>
                <div className="timeline-role">Customer Experience Shift Lead · Santa Ana, CA</div>
                <div className="timeline-desc">
                  Led introduction climbing courses and administered top rope belay and lead climbing certifications at one of the largest climbing gyms in the country. Teaching people to manage fear, trust systems, and take on incremental risk — directly transferable to building products people depend on.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">Oct 2024 – Jan 2026</div>
                <div className="timeline-org">Eldora Mountain Resort</div>
                <div className="timeline-role">Snowmaker Controller + Lift Operations · Nederland, CO</div>
                <div className="timeline-desc">
                  Ran snowmaking equipment — water resources, temperature controls, energy and fuel systems, mechanical maintenance logs. Twelve-hour day shifts at altitude in subzero conditions. The kind of work that teaches systems thinking when the system is a mountain and the deadline is weather.
                </div>
              </div>

              <div className="timeline-entry highlight">
                <div className="timeline-dot" />
                <div className="timeline-year">2025 – Present</div>
                <div className="timeline-org">Pico Edge, Inc.</div>
                <div className="timeline-role">Founder &amp; CEO · Denver, CO</div>
                <div className="timeline-desc">
                  Founded Delaware C-Corp. Building a 14-stage autonomous coding pipeline that takes the LLM out of the verification position — deterministic test execution is the only acceptable proof of completion. A ticket plus a failing test goes in; verified, documented, production-ready code comes out. Stack: Python, AWS (Lambda, ECS Fargate, DynamoDB, S3, Cognito), React. Models: DeepSeek R1, Claude Sonnet.
                </div>
              </div>

            </div>
          </div>

          {/* === CLIMBING TIMELINE === */}
          <div>
            <div className="timeline-col-header">The Climbing Journey · 2007–Present</div>
            <div className="timeline-col">

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2007</div>
                <div className="timeline-org">First Outdoor Climb</div>
                <div className="timeline-desc">
                  Started rock climbing outdoors. The beginning of a lifelong pursuit of vertical terrain.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2011 – 2013</div>
                <div className="timeline-org">College Years &amp; First Ice</div>
                <div className="timeline-role">Oklahoma State → Ouray Ice Park</div>
                <div className="timeline-desc">
                  Climbing throughout college. First ice climbing experience at Ouray Ice Park, Colorado (February 2013). First routes logged on Mountain Project. Early sport climbing at Queen Creek Canyon, Arizona.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2012 – 2014</div>
                <div className="timeline-org">Intel Era Begins + First Ice Season</div>
                <div className="timeline-role">Chandler, AZ / Hyalite Canyon, MT</div>
                <div className="timeline-desc">
                  Moved to Phoenix for Intel (Jul 2012). Sport climbing at Queen Creek Canyon — multi-pitch routes, slab, crack. First full ice season in Hyalite Canyon, Montana. Bouldering trips to Austin, TX. 42 routes logged in 2014 alone.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2015</div>
                <div className="timeline-org">Going Deeper</div>
                <div className="timeline-role">Multi-pitch trad / Hyalite / Splitboarding</div>
                <div className="timeline-desc">
                  Biggest year on rock — 43 routes logged. Multi-pitch trad climbing: Ewephoria (5 pitches), Idiopathic (4 pitches), Frogland (6 pitches, Red Rocks). Second ice season in Hyalite, now also combining ice days with backcountry splitboard objectives. Advancing trad placements and self-rescue systems.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2016</div>
                <div className="timeline-org">Red Rocks + Tuolumne + Leading Ice</div>
                <div className="timeline-desc">
                  Major progression year. Tuolumne Meadows: Southeast Buttress of Cathedral Peak (5 pitches), multi-pitch routes on Dozier Dome. Started leading ice multi-pitch in Hyalite Canyon. Building the rope leadership skills that would later translate to leading teams.
                </div>
              </div>

              <div className="timeline-entry highlight">
                <div className="timeline-dot" />
                <div className="timeline-year">2017</div>
                <div className="timeline-org">Epinephrine, Black Velvet Wall</div>
                <div className="timeline-role">Red Rocks, NV — 13 pitches, one of the 50 Classics</div>
                <div className="timeline-desc">
                  Climbed Epinephrine on Black Velvet Wall — 13 pitches of sustained climbing, one of the 50 Classic Climbs of North America. Also followed the hardest ice route on the logbook in Hyalite: a 3-pitch multi-pitch line requiring precise technical execution. These routes don't happen without months of preparation, a trusted partner, and the ability to make sound decisions under fatigue and exposure.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2018 – 2019</div>
                <div className="timeline-org">Superstition Mountains + Pillow Fight</div>
                <div className="timeline-desc">
                  Multi-pitch routes in the Superstition Mountains and Arizona headwalls. Pillow Fight (8 pitches) — the longest sport multi-pitch on the logbook. Activity gradually tapering as career transition takes priority.
                </div>
              </div>

              <div className="timeline-entry highlight">
                <div className="timeline-dot" />
                <div className="timeline-year">October 2019</div>
                <div className="timeline-org">Pico de Orizaba — 18,491 ft</div>
                <div className="timeline-role">Mexico's highest peak</div>
                <div className="timeline-desc">
                  Summited Pico de Orizaba as a two-person team with climbing partner Sean. Flew out Wednesday Oct 16th, summited Sunday Oct 19th, home by Monday Oct 21st. A glaciated volcanic peak requiring altitude acclimatization, crevasse navigation, and total self-sufficiency above 18,000 feet. This is the kind of objective that crystallizes everything climbing teaches: preparation, partnership, and execution when it matters.
                </div>
                  <img
                    src="https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20191019_071542-01.jpeg"
                    alt="Ice climbing"
                    className="timeline-img"
                  />
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2024</div>
                <div className="timeline-org">California Trad Revival</div>
                <div className="timeline-desc">
                  Returned to climbing after a focused period building Pico Edge. Joshua Tree, Tahquitz (White Maiden's Walkway, 6 pitches; Fingertip Traverse, 4 pitches), Needles (The Uneventful, 7 pitches). The same problem-solving patience required to route-find on long trad lines applies directly to debugging complex systems.
                </div>
              </div>

              <div className="timeline-entry">
                <div className="timeline-dot" />
                <div className="timeline-year">2026</div>
                <div className="timeline-org">Colorado Ice + Splitboard</div>
                <div className="timeline-role">Ouray / Silverton / San Juans, CO</div>
                <div className="timeline-desc">
                  Based in Denver. Ice climbing in the San Juan Mountains — South Mineral Creek, Camp Bird Road, Ouray. Splitboarding the backcountry terrain in the same range. Almost everyone in the alpine ice scene skis; very few splitboard. First ice climb was Ouray 2013 — back in the same range thirteen years later, on a snowboard.
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <ClimbingStats />
    <Footer />
  </div>
);

export default About;
