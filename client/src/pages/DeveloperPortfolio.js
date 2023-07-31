

import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';


//* Component Import
import Header from '../components/Header';

const Portfolio = () => {

  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: 'Clayton_Skaggs_Resume.pdf',
    page,
    canvasRef,
  });

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='HeaderSpacer'>
        <div className="d-flex col justify-content-center">
          <div className="text-center py-5">
            <h1 className="portfioloTitle p-3">Featured Projects</h1> 
          </div>
        </div>
        <div className="py-3">
          <div className="container text-center">
            <div className="row portfioloDemoBox">
              <div className="col demoText portfioloSubBoxLeft">
                <h1 className="mt-3 demoTitle">The Board Club</h1>
                <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/The_Board_Club_App_Demo1.gif")} alt="Surf Deck Demo"></img>
                </div>
              <div className="col portfioloSubBoxRight">
                Project Info...
              </div>
            </div>
             <div className="row mt-5 portfioloDemoBox">
              <div className="col demoText portfioloSubBoxLeft">
                <h1 className="mt-3 demoTitle">BBQ Food Truck</h1>
                <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/The_Board_Club_App_Demo1.gif")} alt="Surf Deck Demo"></img>
                </div>
              <div className="col portfioloSubBoxRight">
                Project Info...
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex col justify-content-center">
          <div className="text-center py-5">
            <h1 className="portfioloTitle p-3">About Me</h1> 
          </div>
        </div>
        <div className="d-flex col justify-content-center">
          <div className="row portfolioAboutMe p-5 d-flex">
            <p className='d-flex col'>
              I am a Full stack web developer with a degree in Computer Engineering from Oklahoma State University 
              and 5+ years experience working as a Product Development Engineer at Intel developing Xeon class 
              processors and chipsets. I have earned a Web Development certificate from the University Of 
              California, Irvine to leverage my existing programming skills to include key web development 
              technologies like HTML, CSS, Javascript, React, and Node.
            </p>
          </div>  
        </div>

      <div className="mt-5 container d-flex flex-column align-items-center justify-content-center">
        <div className="row mt-5">
          <div className="col mx-5 programLanguagesBox">
            <div className="mt-4 text-center languagesListTitle">
              Current
            </div>
            <div className="text-center languagesListTitle">
              Languages/Tools
            </div>
            <ul className="mt-4 mx-5 px-3 text-left languagesList">
              <li className="mt-3">&#9642; Javascript</li>
              <li className="mt-3">&#9642; HTML + CSS</li>
              <li className="mt-3">&#9642; React </li>
              <li className="mt-3">&#9642; Node.js</li>
              <li className="mt-3">&#9642; SQL + MongoDB</li>
              <li className="mt-3">&#9642; React Native</li>
              <li className="mt-3">&#9642; AWS</li>
              <li className="mt-3">&#9642; FreeCAD</li>
            </ul>
          </div>
          <div className="col mx-5 programLanguagesBox2">
            <div className="mt-4 text-center languagesListTitle">
              Previous
            </div>
            <div className="text-center languagesListTitle">
              Languages/Tools
            </div>
            <ul className="mt-4 mx-5 text-left languagesList ">
              <li className="mt-3">&#9642; Verilog/VHDL</li>
              <li className="mt-3">&#9642; ATL (Advantest Language)</li>
              <li className="mt-3">&#9642; Java</li>
              <li className="mt-3">&#9642; C</li>
              <li className="mt-3">&#9642; BASH/Shell</li>
              <li className="mt-3">&#9642; Batch Script</li>
              <li className="mt-3">&#9642; Perl</li>
              <li className="mt-3">&#9642; Python</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex col justify-content-center">
        <div className="text-center py-5">
          <h1 className="portfioloTitle p-3">Resume</h1> 
        </div>
      </div>
      <div className="d-flex col justify-content-center">
        <div className="PDFViewer">
          {/* <PdfViewerComponent document={"Clayton_Skaggs_Resume.pdf"}/> */}
          <div className="d-flex col justify-content-center">
            {!pdfDocument && <span>Loading...</span>}
            <canvas ref={canvasRef} />
            {Boolean(pdfDocument)}
          </div>
        </div>
      </div>


      <div className="d-flex col justify-content-center">
        <div className="text-center resumeDownloadBox">
          <h1 className="mt-0 p-3 resumeDownloadText">Download Resume</h1>
        </div>
      </div>

      </div>

    </div>

  )

}

export default Portfolio;


//!========================= EOF =========================