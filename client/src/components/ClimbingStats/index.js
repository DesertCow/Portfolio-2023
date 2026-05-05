import { useState } from 'react';
import './ClimbingStats.css';

/* ─────────────── DATA ─────────────── */

const SUMMARY = [
  { label: 'Routes Logged', value: '152' },
  { label: 'Total Pitches', value: '277' },
  { label: 'Vertical Feet', value: '26,300' },
  { label: 'States + Regions', value: '7' },
];

const YEARS_DATA = [
  { year: '2013', routes: 8,  pitches: 8  },
  { year: '2014', routes: 42, pitches: 53 },
  { year: '2015', routes: 43, pitches: 71 },
  { year: '2016', routes: 27, pitches: 43 },
  { year: '2017', routes: 7,  pitches: 30 },
  { year: '2018', routes: 8,  pitches: 19 },
  { year: '2019', routes: 7,  pitches: 21 },
  { year: '2024', routes: 6,  pitches: 20 },
  { year: '2026', routes: 4,  pitches: 12 },
];

const GRADE_PYRAMID = [
  { grade: '5.10', count: 16 },
  { grade: '5.9',  count: 22 },
  { grade: '5.8',  count: 28 },
  { grade: '5.7',  count: 16 },
  { grade: '5.6',  count: 12 },
  { grade: '5.5',  count: 2  },
  { grade: '5.4',  count: 3  },
  { grade: '5.3',  count: 3  },
];

const DISCIPLINE_DATA = [
  { year: '2013', sport: 6,  trad: 0,  ice: 2,  boulder: 0 },
  { year: '2014', sport: 20, trad: 10, ice: 6,  boulder: 6 },
  { year: '2015', sport: 14, trad: 15, ice: 7,  boulder: 7 },
  { year: '2016', sport: 6,  trad: 6,  ice: 15, boulder: 0 },
  { year: '2017', sport: 3,  trad: 2,  ice: 2,  boulder: 0 },
  { year: '2018', sport: 4,  trad: 4,  ice: 0,  boulder: 0 },
  { year: '2019', sport: 2,  trad: 5,  ice: 0,  boulder: 0 },
  { year: '2024', sport: 0,  trad: 6,  ice: 0,  boulder: 0 },
  { year: '2026', sport: 0,  trad: 0,  ice: 4,  boulder: 0 },
];

const STATE_DATA = [
  { state: 'Arizona',    routes: 88,  vert: 10060 },
  { state: 'Montana',    routes: 31,  vert: 3685  },
  { state: 'California', routes: 12,  vert: 4860  },
  { state: 'Texas',      routes: 10,  vert: 45    },
  { state: 'Nevada',     routes: 6,   vert: 4700  },
  { state: 'Colorado',   routes: 5,   vert: 2950  },
];

/* Coordinate system: map lat 30–48, lng -121–-95 to SVG 0–600 x 0–340 */
const LAT_MIN = 30, LAT_MAX = 48, LNG_MIN = -121, LNG_MAX = -95;
const toX = (lng) => ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * 600;
const toY = (lat) => (1 - (lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * 340;

const DESTINATIONS = [
  { name: 'Queen Creek',     state: 'AZ', lat: 33.28, lng: -111.28, routes: 26, years: [2013,2014,2015,2016,2017,2018,2019] },
  { name: 'Phoenix Areas',   state: 'AZ', lat: 33.44, lng: -111.80, routes: 34, years: [2014,2015,2016,2017,2018,2019] },
  { name: "Jack's Canyon",   state: 'AZ', lat: 34.65, lng: -111.42, routes: 17, years: [2014,2015,2016,2017,2018,2019] },
  { name: 'Sycamore Cyn',    state: 'AZ', lat: 34.90, lng: -111.94, routes: 4,  years: [2015] },
  { name: 'Cochise',         state: 'AZ', lat: 31.92, lng: -109.98, routes: 2,  years: [2015] },
  { name: 'Mt Lemmon',       state: 'AZ', lat: 32.44, lng: -110.79, routes: 2,  years: [2015] },
  { name: 'Praying Monk',    state: 'AZ', lat: 33.53, lng: -111.97, routes: 3,  years: [2018] },
  { name: 'Hyalite Canyon',  state: 'MT', lat: 45.45, lng: -111.00, routes: 31, years: [2013,2014,2015,2016,2017] },
  { name: 'Red Rocks',       state: 'NV', lat: 36.13, lng: -115.46, routes: 6,  years: [2014,2015,2016,2017] },
  { name: 'Tuolumne',        state: 'CA', lat: 37.87, lng: -119.36, routes: 3,  years: [2016] },
  { name: 'Joshua Tree',     state: 'CA', lat: 34.01, lng: -116.17, routes: 3,  years: [2024] },
  { name: 'Tahquitz',        state: 'CA', lat: 33.76, lng: -116.69, routes: 3,  years: [2024] },
  { name: 'Needles CA',      state: 'CA', lat: 35.78, lng: -118.48, routes: 3,  years: [2024] },
  { name: 'Bull Creek TX',   state: 'TX', lat: 30.36, lng: -97.78,  routes: 10, years: [2014,2015] },
  { name: 'Ouray',           state: 'CO', lat: 38.02, lng: -107.67, routes: 3,  years: [2013,2026] },
  { name: 'Silverton',       state: 'CO', lat: 37.81, lng: -107.66, routes: 2,  years: [2026] },
];

const MAP_YEARS = ['All', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2024', '2026'];

const SKILL_MILESTONES = [
  { date: '2013-02-04', label: 'First logged route (ice!)',      note: 'Reckless (WI3), Ouray Ice Park, CO',                      marquee: false },
  { date: '2013-10-21', label: 'First sport climb',              note: 'Adventure Quest (5.8), Queen Creek, AZ',                  marquee: false },
  { date: '2014-06-08', label: 'First 5.10',                     note: 'Yarlsberg (5.10a), Swiss Wall, AZ',                       marquee: false },
  { date: '2014-08-25', label: 'First boulder',                  note: 'Screaming Fingers (V0), Bull Creek, TX',                  marquee: false },
  { date: '2014-09-21', label: 'First trad climb',               note: 'Sassy (5.2 PG13), AZ',                                    marquee: false },
  { date: '2014-10-09', label: 'First multi-pitch (3p+)',        note: 'Algae on Parade (5.7, 3p), Red Rocks, NV',                marquee: false },
  { date: '2015-04-10', label: 'First big multi-pitch (5p+)',    note: 'Ewephoria (5.8, 5p), Sheepshead, AZ',                     marquee: false },
  { date: '2016-02-19', label: 'First ice lead',                 note: 'Twin Falls (WI3), Hyalite Canyon, MT',                    marquee: false },
  { date: '2016-05-15', label: 'First trad lead',                note: 'Pop Bottle (5.7), Tuolumne, CA',                          marquee: false },
  { date: '2017-10-07', label: 'First mega route (8p+)',         note: 'Epinephrine (5.9, 13p, 1,600 ft), Red Rocks, NV',         marquee: true  },
  { date: '2018-02-11', label: 'First sport lead',               note: "Drop 'em South (5.9), AZ",                                marquee: false },
  { date: '2018-06-09', label: 'First solo',                     note: 'East Face (5.6), Praying Monk, AZ',                       marquee: false },
  { date: '2019-10-19', label: 'Highest summit ever',            note: 'Pico de Orizaba (18,491 ft), Mexico',                     marquee: true  },
];

const STORY_ENTRIES = [
  {
    year: '2007',
    title: 'First outdoor climb',
    desc: 'Started rock climbing outdoors. The beginning of a lifelong pursuit.',
    badges: [],
  },
  {
    year: '2013',
    title: 'Ice + rock begins',
    desc: 'First logged route: Reckless (WI3) at Ouray Ice Park, CO. First ice season in Hyalite Canyon, MT. Sport climbing at Queen Creek Canyon, AZ. 8 routes.',
    badges: ['Ice', 'Sport'],
  },
  {
    year: '2014',
    title: 'The deep end',
    desc: '42 routes — biggest year by count. First trad placement. First 5.10 (Yarlsberg, Swiss Wall). First multi-pitch: Algae on Parade (3p, Red Rocks). Hyalite ice season 2. Bouldering trips to Austin, TX.',
    badges: ['Sport', 'Trad', 'Ice', 'Boulder'],
  },
  {
    year: '2015',
    title: 'Going deeper',
    desc: '43 routes, 7,260 vertical feet. First big multi-pitch: Ewephoria (5p, Sheepshead). Frogland (6p, Red Rocks). Spice Box (5.10-). Advancing trad placements and self-rescue.',
    badges: ['Sport', 'Trad', 'Ice'],
  },
  {
    year: '2016',
    title: 'Leading ice + Tuolumne',
    desc: 'First ice lead: Twin Falls (Hyalite). First trad lead: Pop Bottle (Tuolumne). Cathedral Peak SE Buttress (5p). 15 ice/mixed routes — more than sport and trad combined.',
    badges: ['Trad', 'Ice'],
  },
  {
    year: '2017',
    title: 'Epinephrine + Bobo Like',
    desc: 'Epinephrine (13p, Black Velvet Wall, Red Rocks) — one of the 50 classic climbs of North America, 1,600 vertical feet. Followed Bobo Like (3p, Hyalite) — hardest ice route on the logbook.',
    badges: ['Trad', 'Ice'],
  },
  {
    year: '2018–19',
    title: 'Superstitions + solo',
    desc: 'Repeat sends of Spice Box (5.10-), Grandfather Hobgoblin (5.9, 4p). Pillow Fight (8p). First solo: East Face of Praying Monk (5.6). Activity tapering as career transitions take priority.',
    badges: ['Sport', 'Trad'],
  },
  {
    year: 'Oct 2019',
    title: 'Pico de Orizaba — 18,491 ft',
    desc: 'Summited Mexico\'s highest peak as a two-man team with Sean. Flew out Wed Oct 16, summited Sun Oct 19, home by Mon Oct 21. Glaciated volcanic peak — altitude acclimatization, crevasse navigation, total self-sufficiency.',
    badges: ['Alpine'],
    marquee: true,
  },
  {
    year: '2024',
    title: 'California trad revival',
    desc: 'Returned to climbing after founding Pico Edge. Joshua Tree, Tahquitz (White Maiden\'s Walkway 6p), Needles (The Uneventful 7p). All trad, all California.',
    badges: ['Trad'],
  },
  {
    year: '2026',
    title: 'Colorado ice — full circle',
    desc: 'Based in Denver. Ice climbing in Ouray and Silverton. Direct North Face (7p, South Mineral Creek). First ice climb was Ouray 2013 — the circle closes in the San Juans.',
    badges: ['Ice'],
  },
];

const BADGE_COLORS = {
  Sport:   '#378ADD',
  Trad:    '#5DCAA5',
  Ice:     '#7F77DD',
  Boulder: '#888780',
  Alpine:  '#D85A30',
};

/* ─────────────── SUB-COMPONENTS ─────────────── */

const AltitudeMarker = ({ label }) => (
  <div className="cs-altitude-marker">
    <span className="cs-altitude-line" />
    <span className="cs-altitude-label">{label}</span>
  </div>
);

const StatCard = ({ label, value }) => (
  <div className="cs-stat-card">
    <span className="cs-stat-value">{value}</span>
    <span className="cs-stat-label">{label}</span>
  </div>
);

/* Vertical bar chart — routes & pitches per year */
const YearBarChart = () => {
  const maxVal = Math.max(...YEARS_DATA.map(d => d.pitches));
  return (
    <div className="cs-chart-wrap">
      <div className="cs-chart-title">Routes &amp; Pitches by Year</div>
      <div className="cs-legend">
        <span className="cs-legend-dot" style={{ background: 'var(--color-alpine)' }} /> Routes
        <span className="cs-legend-dot" style={{ background: 'var(--color-sand)' }} /> Pitches
      </div>
      <div className="cs-bar-chart">
        {YEARS_DATA.map(d => (
          <div key={d.year} className="cs-bar-group">
            <div className="cs-bar-pair">
              <div
                className="cs-bar cs-bar-routes"
                style={{ height: `${(d.routes / maxVal) * 180}px` }}
                title={`${d.routes} routes`}
              />
              <div
                className="cs-bar cs-bar-pitches"
                style={{ height: `${(d.pitches / maxVal) * 180}px` }}
                title={`${d.pitches} pitches`}
              />
            </div>
            <div className="cs-bar-label">{d.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Horizontal bar chart — grade pyramid */
const GradePyramid = () => {
  const max = Math.max(...GRADE_PYRAMID.map(d => d.count));
  return (
    <div className="cs-chart-wrap">
      <div className="cs-chart-title">Rock Grade Distribution</div>
      <div className="cs-pyramid">
        {GRADE_PYRAMID.map(d => (
          <div key={d.grade} className="cs-pyramid-row">
            <span className="cs-pyramid-label">{d.grade}</span>
            <div className="cs-pyramid-track">
              <div
                className="cs-h-bar"
                style={{ width: `${(d.count / max) * 100}%` }}
                title={`${d.count} routes`}
              />
            </div>
            <span className="cs-pyramid-count">{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Stacked discipline bar chart */
const DisciplineChart = () => {
  const maxRoutes = Math.max(...DISCIPLINE_DATA.map(d => d.sport + d.trad + d.ice + d.boulder));
  return (
    <div className="cs-chart-wrap">
      <div className="cs-chart-title">Discipline by Year</div>
      <div className="cs-legend">
        {['Sport', 'Trad', 'Ice', 'Boulder'].map(d => (
          <span key={d} className="cs-legend-item">
            <span className="cs-legend-dot" style={{ background: BADGE_COLORS[d] }} /> {d}
          </span>
        ))}
      </div>
      <div className="cs-disc-chart">
        {DISCIPLINE_DATA.map(d => {
          const total = d.sport + d.trad + d.ice + d.boulder;
          const h = (total / maxRoutes) * 180;
          return (
            <div key={d.year} className="cs-disc-group">
              <div className="cs-disc-stack" style={{ height: `${h}px` }}>
                {d.boulder > 0 && (
                  <div style={{ flex: d.boulder, background: BADGE_COLORS.Boulder }} title={`Boulder: ${d.boulder}`} />
                )}
                {d.ice > 0 && (
                  <div style={{ flex: d.ice, background: BADGE_COLORS.Ice }} title={`Ice: ${d.ice}`} />
                )}
                {d.trad > 0 && (
                  <div style={{ flex: d.trad, background: BADGE_COLORS.Trad }} title={`Trad: ${d.trad}`} />
                )}
                {d.sport > 0 && (
                  <div style={{ flex: d.sport, background: BADGE_COLORS.Sport }} title={`Sport: ${d.sport}`} />
                )}
              </div>
              <div className="cs-bar-label">{d.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* Horizontal bars — routes by state */
const StateChart = () => {
  const max = STATE_DATA[0].routes;
  return (
    <div className="cs-chart-wrap">
      <div className="cs-chart-title">Routes by State</div>
      <div className="cs-state-list">
        {STATE_DATA.map(d => (
          <div key={d.state} className="cs-state-row">
            <span className="cs-state-name">{d.state}</span>
            <div className="cs-state-track">
              <div
                className="cs-h-bar cs-h-bar-state"
                style={{ width: `${(d.routes / max) * 100}%` }}
              />
            </div>
            <span className="cs-state-count">{d.routes}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* SVG dot map with year filter */
const ClimbingMap = () => {
  const [activeYear, setActiveYear] = useState('All');

  const visible = DESTINATIONS.filter(d =>
    activeYear === 'All' || d.years.includes(parseInt(activeYear, 10))
  );

  const dotRadius = (routes) => Math.max(5, Math.min(18, 4 + routes * 0.38));

  /* rough western US state boundary polygons (simplified) */
  const stateOutlines = [
    /* Montana */
    { id: 'MT', d: 'M 164,30 L 330,30 L 330,98 L 164,95 Z' },
    /* Idaho */
    { id: 'ID', d: 'M 164,95 L 230,95 L 235,130 L 215,148 L 215,170 L 164,170 Z' },
    /* Wyoming */
    { id: 'WY', d: 'M 230,98 L 330,98 L 330,165 L 230,165 Z' },
    /* Nevada */
    { id: 'NV', d: 'M 90,170 L 164,170 L 174,200 L 152,240 L 90,240 Z' },
    /* Utah */
    { id: 'UT', d: 'M 215,170 L 295,170 L 295,240 L 255,240 L 255,260 L 215,260 Z' },
    /* Colorado */
    { id: 'CO', d: 'M 230,165 L 330,165 L 330,230 L 230,230 Z' },
    /* California */
    { id: 'CA', d: 'M 46,148 L 100,148 L 100,210 L 90,240 L 60,280 L 46,260 Z' },
    /* Arizona */
    { id: 'AZ', d: 'M 152,240 L 255,240 L 255,310 L 152,310 Z' },
    /* New Mexico */
    { id: 'NM', d: 'M 255,240 L 340,240 L 340,310 L 255,310 Z' },
    /* Texas */
    { id: 'TX', d: 'M 310,230 L 430,230 L 460,290 L 430,330 L 340,330 L 340,260 L 310,260 Z' },
  ];

  return (
    <div className="cs-map-wrap">
      <div className="cs-chart-title">Climbing Destinations</div>
      <div className="cs-map-filters">
        {MAP_YEARS.map(y => (
          <button
            key={y}
            className={`cs-year-btn${activeYear === y ? ' active' : ''}`}
            onClick={() => setActiveYear(y)}
          >
            {y}
          </button>
        ))}
      </div>
      <div className="cs-map-container">
        <svg viewBox="0 0 600 340" className="cs-map-svg" aria-label="Climbing destinations map">
          {/* state fills */}
          {stateOutlines.map(s => (
            <path key={s.id} d={s.d} className="cs-state-shape" />
          ))}
          {/* state labels */}
          {[
            { id: 'MT', x: 247, y: 68 }, { id: 'ID', x: 193, y: 135 },
            { id: 'WY', x: 278, y: 133 }, { id: 'NV', x: 118, y: 205 },
            { id: 'UT', x: 255, y: 213 }, { id: 'CO', x: 278, y: 197 },
            { id: 'CA', x: 72,  y: 210 }, { id: 'AZ', x: 200, y: 278 },
            { id: 'NM', x: 295, y: 278 }, { id: 'TX', x: 388, y: 278 },
          ].map(l => (
            <text key={l.id} x={l.x} y={l.y} className="cs-state-label">{l.id}</text>
          ))}
          {/* destination dots */}
          {DESTINATIONS.map(dest => {
            const x = toX(dest.lng);
            const y = toY(dest.lat);
            const r = dotRadius(dest.routes);
            const isVis = activeYear === 'All' || dest.years.includes(parseInt(activeYear, 10));
            return (
              <g key={dest.name} className={`cs-map-dot-group${isVis ? ' visible' : ' hidden'}`}>
                <circle cx={x} cy={y} r={r} className="cs-map-dot" />
                <text x={x} y={y - r - 3} className="cs-map-dot-label">{dest.name}</text>
              </g>
            );
          })}
        </svg>
        <div className="cs-map-legend">
          <span className="cs-map-dot-sample sm" /> Fewer routes
          <span className="cs-map-dot-sample lg" /> More routes
        </div>
      </div>
    </div>
  );
};

/* Vertical skill unlock timeline */
const SkillTimeline = () => (
  <div className="cs-skill-wrap">
    <div className="cs-chart-title">13 Firsts — The Skill Unlocks</div>
    <div className="cs-skill-list">
      {SKILL_MILESTONES.map((m, i) => (
        <div key={i} className={`cs-skill-entry${m.marquee ? ' marquee' : ''}`}>
          <div className={`cs-skill-dot${m.marquee ? ' marquee' : ''}`} />
          <div className="cs-skill-text">
            <span className="cs-skill-date">{m.date}</span>
            <span className="cs-skill-label">{m.label}</span>
            <span className="cs-skill-note">{m.note}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* Narrative story timeline with discipline badges */
const StoryTimeline = () => (
  <div className="cs-story-wrap">
    <div className="cs-chart-title">The Climbing Story</div>
    <div className="cs-story-list">
      {STORY_ENTRIES.map((e, i) => (
        <div key={i} className={`cs-story-entry${e.marquee ? ' marquee' : ''}`}>
          <div className="cs-story-year-col">
            <span className="cs-story-year">{e.year}</span>
            <div className={`cs-story-dot${e.marquee ? ' marquee' : ''}`} />
          </div>
          <div className="cs-story-body">
            <div className="cs-story-title">{e.title}</div>
            <p className="cs-story-desc">{e.desc}</p>
            {e.badges.length > 0 && (
              <div className="cs-badge-row">
                {e.badges.map(b => (
                  <span
                    key={b}
                    className="cs-badge"
                    style={{ background: BADGE_COLORS[b] + '22', color: BADGE_COLORS[b], borderColor: BADGE_COLORS[b] + '55' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─────────────── MAIN EXPORT ─────────────── */

const ClimbingStats = () => (
  <section className="cs-section">
    <div className="cs-inner">
      <AltitudeMarker label="CLIMBING BY THE NUMBERS" />
      <h2 className="cs-section-title">152 routes across 6 states + Mexico. 13 years of vertical.</h2>

      {/* Stat cards */}
      <div className="cs-stat-row">
        {SUMMARY.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Charts row 1: year bars + grade pyramid */}
      <div className="cs-charts-row-2">
        <YearBarChart />
        <GradePyramid />
      </div>

      {/* Charts row 2: discipline + state */}
      <div className="cs-charts-row-2">
        <DisciplineChart />
        <StateChart />
      </div>

      {/* Map */}
      <ClimbingMap />

      {/* Skill unlocks + story side-by-side */}
      <div className="cs-bottom-row">
        <SkillTimeline />
        <StoryTimeline />
      </div>
    </div>
  </section>
);

export default ClimbingStats;
