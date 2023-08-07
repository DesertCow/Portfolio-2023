



const DevTools = () => {

  return (

        <div className="mt-5 container d-flex flex-column align-items-center justify-content-center">
          <div className="row mt-5">
            <div className="col mx-5 programLanguagesBox">
              <div className="mt-4 text-center languagesListTitle">
                Languages &
              </div>
              <div className="mt-1 text-center languagesListTitle">
                Frameworks
              </div>
              <ul className="mt-4 mx-5 px-3 text-left languagesList">
                <li className="mt-3">&#9642; Javascript</li>
                <li className="mt-3">&#9642; HTML + CSS</li>
                <li className="mt-3">&#9642; Bootstrap</li>
                <li className="mt-3">&#9642; React </li>
                <li className="mt-3">&#9642; Node.js + NPM</li>
                <li className="mt-3">&#9642; React Native</li>
                <li className="mt-3">&#9642; SQL + MongoDB</li>
              </ul>
            </div>
            <div className="col mx-5 programToolBox">
              {/* <div className="mt-4 text-center languagesListTitle">
                Current
              </div> */}
              <div className="mt-4 text-center languagesListTitle">
                Tools
              </div>
              <ul className="mt-4 mx-5 px-3 text-left languagesList">
                <li className="mt-3">&#9642; GIT</li>
                <li className="mt-3">&#9642; BASH/Shell</li>
                <li className="mt-3">&#9642; Visual Studio Code</li>
                <li className="mt-3">&#9642; Figma</li>
                <li className="mt-3">&#9642; Docker</li>
                <li className="mt-3">&#9642; AWS</li>
                <li className="mt-3">&#9642; Agile SCRUM</li>
                <li className="mt-3">&#9642; FreeCAD</li>
                <li className="mt-3">&#9642; Adobe Premiere Pro</li>
              </ul>
            </div>
            <div className="col mx-5 programOldLanguagesBox">
              <div className="mt-4 text-center languagesListTitle">
                Previous
              </div>
              <div className="text-center languagesListTitle">
                Languages & Tools
              </div>
              <ul className="mt-4 mx-5 text-left languagesList ">
                <li className="mt-3">&#9642; Verilog/VHDL</li>
                <li className="mt-3">&#9642; ATL (Advantest Language)</li>
                <li className="mt-3">&#9642; Java</li>
                <li className="mt-3">&#9642; C / Embedded C</li>
                <li className="mt-3">&#9642; Batch Script</li>
                <li className="mt-3">&#9642; Perl</li>
                <li className="mt-3">&#9642; Python</li>
              </ul>
            </div>
          </div>
        </div>

  );


}


export default DevTools;