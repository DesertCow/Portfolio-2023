import { useState, useRef, useEffect } from 'react';
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
  { date: '2013-02',    label: 'First ice climb',                  note: 'Reckless (WI3), Ouray Ice Park, CO',                                  marquee: false },
  { date: '2013-10',    label: 'First sport climb',                note: 'Adventure Quest (5.8), Queen Creek, AZ',                              marquee: false },
  { date: '2013',       label: 'First sport lead',                 note: 'Queen Creek, AZ',                                                     marquee: false },
  { date: '2014',       label: 'First trad lead',                  note: 'Arizona',                                                             marquee: false },
  { date: '2014-06',    label: 'First 5.10',                       note: 'Yarlsberg (5.10a), Swiss Wall, AZ',                                   marquee: false },
  { date: '2014-10',    label: 'First multi-pitch trad lead',      note: 'Algae on Parade (5.7, 3p), Red Rocks, NV',                            marquee: false },
  { date: '2015-04',    label: 'First big multi-pitch (5p+)',      note: 'Ewephoria (5.8, 5p), Sheepshead, AZ',                                 marquee: false },
  { date: '2016-02',    label: 'First ice lead',                   note: 'Twin Falls (WI3), Hyalite Canyon, MT',                                marquee: false },
  { date: '2017-10',    label: 'Epinephrine — 13 pitches',         note: 'Black Velvet Wall, Red Rocks, NV · #2 on Top 20 Classic Climbs',      marquee: true  },
  { date: '2018-06',    label: 'First solo',                       note: 'East Face (5.6), Praying Monk, AZ',                                   marquee: false },
  { date: '2019-10',    label: 'Pico de Orizaba — 18,491 ft',      note: 'Mexico',                                                              marquee: true  },
  { date: '2022-02',    label: 'First multipitch ice solo',        note: 'Great White Icicle, Salt Lake City, UT',                              marquee: false },
  { date: '2026-01',    label: 'Longest & tallest ice route',      note: 'Direct North Face (6p, ~1,100 ft), South Mineral Creek, Silverton, CO', marquee: false },
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

/*
  Zigzag timeline — single source of truth for dot positions.
  LEFT_X  = 42% of container width  (right edge of left entries)
  RIGHT_X = 58% of container width  (left edge of right entries)
  Both the SVG circles AND the SVG path use these same coordinates.
  Entry refs only supply the Y position (top of each card + 8px offset).
*/
const SkillTimeline = () => {
  const containerRef = useRef(null);
  const entryRefs    = useRef([]);
  const [svgData, setSvgData] = useState(null);

  useEffect(() => {
    let rafId;

    const measure = () => {
      if (!containerRef.current) return;
      const cr  = containerRef.current.getBoundingClientRect();
      const w   = cr.width;
      const h   = cr.height;
      const LX  = w * 0.42;
      const RX  = w * 0.58;

      const circles = entryRefs.current
        .map((el, i) => {
          if (!el) return null;
          const er = el.getBoundingClientRect();
          return {
            x:       i % 2 === 0 ? LX : RX,
            y:       er.top - cr.top + 8,
            marquee: SKILL_MILESTONES[i]?.marquee ?? false,
          };
        })
        .filter(Boolean);

      if (circles.length < 2) return;

      const maxY  = Math.max(...circles.map(c => c.y));
      const pathD = `M ${circles[0].x} ${circles[0].y} ` +
        circles.slice(1).map(c => `L ${c.x} ${c.y}`).join(' ');

      setSvgData({ w, h: Math.max(h, maxY + 20), pathD, circles });
    };

    /* Defer to rAF so all entries have their final layout positions */
    rafId = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div className="cs-skill-wrap">
      <h3 className="cs-milestone-title">Climbing Milestones</h3>
      <div className="cs-zigzag-timeline" ref={containerRef}>
        {svgData && (
          <svg
            className="cs-zigzag-svg"
            width={svgData.w}
            height={svgData.h}
            aria-hidden="true"
          >
            <path
              d={svgData.pathD}
              fill="none"
              stroke="var(--color-sand)"
              strokeWidth="1.5"
              strokeOpacity="0.28"
              strokeDasharray="6 4"
            />
            {svgData.circles.map((c, i) => (
              <circle
                key={i}
                cx={c.x}
                cy={c.y}
                r={c.marquee ? 7 : 6}
                fill={c.marquee ? '#D85A30' : 'var(--color-alpine)'}
                stroke="var(--color-dark)"
                strokeWidth={2}
              />
            ))}
          </svg>
        )}
        {SKILL_MILESTONES.map((m, i) => (
          <div
            key={i}
            className={`cs-zigzag-entry${i % 2 === 0 ? ' entry-left' : ' entry-right'}${m.marquee ? ' marquee' : ''}`}
            ref={el => { entryRefs.current[i] = el; }}
          >
            <div className="cs-zigzag-content">
              <span className="cs-skill-date">{m.date}</span>
              <span className="cs-skill-label">{m.label}</span>
              <span className="cs-skill-note">{m.note}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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

      {/* Skill unlocks timeline */}
      <SkillTimeline />
    </div>
  </section>
);

export default ClimbingStats;
