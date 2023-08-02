

import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

import ResumePDF from '../assets/Clayton_Skaggs_Resume.pdf';


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

        <div className="py-3 container text-center">

          <div className="row portfioloDemoBox">
            <div className="col demoText portfioloSubBoxLeft">
              <h1 className="mt-3 demoTitle">The Board Club</h1>
              <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/The_Board_Club_App_Demo1.gif")} alt="Surf Deck Demo"></img>
            </div>

            <div className="col d-flex portfioloSubBoxRight">
              
              <div className="col-4 softwareStackBox">
                <div className="mt-5">Software Stack</div>
                <div className="mt-5 d-flex justify-content-start">
                  <ul className="softwareStackList text-left">
                    <li className="py-3">&#9642; App Type: Progressive Web App</li>
                    <li className="py-3">&#9642; Frontend: React (18.2.0)</li>
                    <li className="py-3">&#9642; Framework: Bootstrap (2.5.0)</li>
                    <li className="py-3">&#9642; API: GraphQL (16.6.0)</li>
                    <li className="py-3">&#9642; Backend: NodeJS (16.15.1)</li>
                    <li className="py-3">&#9642; Database: MongoDB (5.6.0)</li>
                    <li className="py-3">&#9642; Photo Host: AWS S3</li>
                    <li className="pt-3">&#9642; App Hosting: <a href="https://boardclubapp-production.up.railway.app/">Board Club (Live)</a></li>
                    <img className="img-fluid mt-4 mb-4 mx-4 railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img>
                    {/* <li className="pt-2">&ensp; &#9642; https://railway.app/</li> */}
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="mt-5 projectDesTitles">Project Overview</div>
                  <p className="mt-3 px-5 projectDesText ">An application designed to allow members of the board club to view current surf/weather conditions, 
                  club events, log surf sessions, view surf tips, rental information, and general information 
                  about the club.</p>
                
                <div className="mt-5 projectDesTitles">Project Goal</div>
                <p className="mt-3 px-5 projectDesText">The goal of this application to motivate to go surf by providing them with the all the infomation they need to have a great surf session.</p>
                <ul className="projectSubDesText projectGoalText px-3 mt-3 text-center">
                  <li className="mt-3">&#9642; The app easily shows the current surf and weather conditons. </li>
                  <li className="mt-3">&#9642; Events are displayed to make it easy for memebers to get the information they need to plan and attend upcoming events.</li>
                  <li className="mt-3">&#9642; The Surf Log allows memebers to keep a log of all their surf sessions to track their progression and review previous sessions conditions to use data to influence when selecting a surfboard or surf spot for future surf sessions.</li>
                  <li className="mt-3">&#9642; Surf hacks are listed to help new members with common surf problems. </li>
                  <li className="mt-3">&#9642; The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house based on a variety of factors and conditions.</li>
                  <li className="mt-3">&#9642; The comminity forum helps memebers find other memebrs to surf with, sell items to other memebers, and also to interact with memebers to build a sense of community.</li>
                </ul>
                {/* <div className="mt-5 projectDesTitles">Project Highlights</div>
                <div className="mt-5 projectDesTitles">Project Improvements</div> */}
              </div>
            </div>
          </div>

          <div className="row portfioloDemoBox mt-5">
            <div className="col demoText portfioloSubBoxLeft">
              <h1 className="mt-3 demoTitle">Chuckwagon</h1>
              <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/Chuckwagon_Demo1.gif")} alt="Surf Deck Demo"></img>
            </div>

            <div className="col d-flex portfioloSubBoxRight">
              
              <div className="col-4 softwareStackBox">
                <div className="mt-5">Software Stack</div>
                <div className="mt-5 d-flex justify-content-start">
                  <ul className="softwareStackList text-left">
                    <li className="py-3">&#9642; App Type: Progressive Web App</li>
                    <li className="py-3">&#9642; Frontend: React (18.2.0)</li>
                    <li className="py-3">&#9642; Framework: Bootstrap (5.2.1)</li>
                    <li className="py-3">&#9642; API: GraphQL (15.3.0)</li>
                    <li className="py-3">&#9642; Backend: NodeJS (16.15.1)</li>
                    <li className="py-3">&#9642; Database: MongoDB (5.6.0)</li>
                    <li className="py-3">&#9642; Database: MySQL (2.3.3)</li>
                    <li className="pt-3">&#9642; App Hosting: <a href="https://saltlicktruck-production.up.railway.app/">Chuckwagon (Live)</a></li>
                    <img className="img-fluid mt-4 mb-4 mx-4 railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img>
                    {/* <li className="pt-2">&ensp; &#9642; https://railway.app/</li> */}
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="mt-5 projectDesTitles">Project Overview</div>
                  <p className="mt-3 px-5 projectDesText ">Chuckwagon is A comprehensive Food Truck management application with a customer ordering App and a separate "In Kitchen" App (React) for order execution and application administration built using MongoDB, Express, React, and NodeJS (MERN Stack).</p>
                
                <div className="mt-5 projectDesTitles">Project Goal</div>
                <p className="mt-3 px-5 projectDesText">Application that could be deploy to the internet or run locally on a food truck and served via WiFi to enable customers to order food without needing an internet connection.</p>
                <ul className="projectSubDesText projectGoalText px-3 mt-3 text-center">
                  <li className="mt-3">&#9642; Enable customers to view the menu and add items to the cart for checkout/purchase.</li>
                  <li className="mt-3">&#9642; Customers also create an account that provides an email for marketing purposes thus enabling higher likelyhood of repeat customers</li>
                  <li className="mt-3">&#9642; Menu is dynamically served from SQL database enabling realtime item availabity to adjusted as items availabity is exhausted.</li>
                  <li className="mt-3">&#9642; Customers can also track the status of their order via the app. <br></br>(Submitted/WIP/Ready/Picked Up)</li>
                  <li className="mt-3">&#9642; Kitchen page allows employees to track, manage, and complete orders.</li>
                  <li className="mt-3">&#9642; Orders are stored in database thus enabling analytics to be created to return valuble information to business owners and increase profit margin.</li>
                </ul>
                {/* <div className="mt-5 projectDesTitles">Project Highlights</div>
                <div className="mt-5 projectDesTitles">Project Improvements</div> */}
              </div>
            </div>
          </div>

        </div>

        <div className="d-flex col mt-5 justify-content-center">
          <div className="text-center pt-5">
            <h1 className="portfioloTitle p-3">About Me</h1> 
          </div>
        </div>

        <div className="d-flex col align-items-center justify-content-center">
          <div className="flex-row mt-3 mb-4 align-items-center justify-content-center">
            <img src={require('../img/Clayton_Skaggs_4.jpg')}
            className="mt-3 contactPhoto"
            width="350"
            alt="Clayton Skaggs profile picture"/>  
          </div>
        </div>


        <div className="d-flex col justify-content-center">
          <div className="row portfolioAboutMe p-5 d-flex">
            <p className='d-flex col text-center'>
              I am a Full Stack web developer with a degree in Computer Engineering from Oklahoma State University 
              and 5+ years experience working as a Product Development Engineer at Intel developing Xeon class 
              processors and chipsets. 
              <br></br>
              &nbsp; <br></br>
              I have earned a Web Development certificate from the University Of California, Irvine to enable 
              me to leverage my existing programming skills to be a successful Full Stack developer by utilizing 
              key web development technologies like HTML, CSS, Javascript, React, and Node.
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
                Languages & Frameworks
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
              <div className="mt-4 text-center languagesListTitle">
                Current
              </div>
              <div className="text-center languagesListTitle">
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
            <a
              href={ResumePDF}
              download="Clayton_Skaggs_Resume.pdf"
              target="_blank"
              rel="noreferrer">
            <h1 className="mt-0 p-3 resumeDownloadText">
              Download Resume
            </h1>
            </a>
          </div>
        </div>

      </div>

        <div className="container py-5">
          <div className="col text-center">

            <div className="row d-flex container devLinksBox mt-5">
              <div className="d-flex container flex-row py-3 align-items-center justify-content-around" >
                
                <div className="flex-row align-items-center justify-content-center">
                  <a href="https://github.com/DesertCow">
                    <img src={require('../img/Icons/github.png')}
                      className=""
                      width="50"
                      alt="GitHub Icon"/>
                  </a>
                </div>
                
                <div className="flex-row align-items-center justify-content-center">
                  <a href="https://www.linkedin.com/in/clayton-skaggs-3084b950">
                    <img src={require('../img/Icons/LinkedIn.png')}
                      className=""
                      width="50"
                      alt="LinkedIn Icon"/> 
                  </a> 
                </div>
                
                <div className="flex-row align-items-center justify-content-center">
                  <a href="https://www.instagram.com/skagggggggs/">
                    <img src={require('../img/Icons/Instagram.png')}
                      className=""
                      width="50"
                      alt="Instagram Icon"/>
                  </a>
                </div>
                
                <div className="flex-row align-items-center justify-content-center">
                  <a href="https://www.youtube.com/@MrClaytonskaggs">
                    <img src={require('../img/Icons/YouTube.png')}
                      className=""
                      width="50"
                      alt="YouTube Icon"/>
                  </a>
                </div>

              </div>
            </div>
            <div className="w-100"></div>
          </div>
        </div>

    </div>

  )

}

export default Portfolio;


//!========================= EOF =========================