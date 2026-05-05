import './DevTools.css';

const DevTools = () => (
  <div className="devtools-section">
    <div className="devtools-inner">
      <div className="devtools-grid">
        <div className="devtools-card">
          <div className="devtools-card-title">Languages &amp; Frameworks</div>
          <ul className="devtools-list">
            <li>JavaScript</li>
            <li>HTML &amp; CSS</li>
            <li>React + Bootstrap</li>
            <li>Node.js + NPM</li>
            <li>React Native + Expo</li>
            <li>MongoDB &amp; MySQL</li>
            <li>GraphQL &amp; REST</li>
          </ul>
        </div>
        <div className="devtools-card">
          <div className="devtools-card-title">Tools</div>
          <ul className="devtools-list">
            <li>Git + GitHub</li>
            <li>Bash + Ubuntu</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Docker</li>
            <li>AWS / Railway</li>
            <li>Stable Diffusion (local)</li>
            <li>Agile SCRUM</li>
            <li>FreeCAD</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </div>
        <div className="devtools-card">
          <div className="devtools-card-title">Previous Languages</div>
          <ul className="devtools-list">
            <li>Verilog / VHDL</li>
            <li>ATL (Advantest)</li>
            <li>Java</li>
            <li>C / Embedded C</li>
            <li>Batch Script</li>
            <li>Perl</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DevTools;
