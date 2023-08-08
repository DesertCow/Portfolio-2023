

import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

import ResumePDF from '../assets/Clayton_Skaggs_Resume.pdf';


//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevTools from '../components/DevTools'

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

        <div className="py-3 container d-flex">

        <div className="col featuredProjects">
          <div className="row portfioloDemoBox1">

            <div className="col demoText portfioloSubBoxLeft text-center">
              <h1 className="mt-3 demoTitle">The Board Club</h1>
              <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/The_Board_Club_App_Demo1.gif")} alt="Surf Deck Demo"></img>
            </div>

            <div className="col d-flex portfioloSubBoxRight">
              
              <div className="col-4 softwareStackBox">
                <div className="mt-3 text-center">Software Stack</div>
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
                    <li className="text-center my-3"><img className="img-fluid railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img></li>
                    <li className="text-center mb-3">
                      <a href="https://github.com/DesertCow/boardClubApp">
                        <img src={require('../img/Icons/github.png')}
                          className=""
                          width="50"
                          alt="GitHub Icon"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="mt-3 projectDesTitles">Project Overview</div>
                  <p className="mt-3 px-5 projectDesText text-center">An application designed to allow members of the board club to view current surf/weather conditions, 
                  club events, log surf sessions, view surf tips, rental information, and general information 
                  about the club.</p>
                
                <div className="mt-5 projectDesTitles">Project Goal</div>
                <p className="mt-3 px-5 projectDesText text-center">The goal of this application to motivate to go surf by providing them with the all the infomation they need to have a great surf session.</p>
                <ul className="projectSubDesText projectGoalText px-3 mt-3 text-center">
                  <li className="mt-3">&#9642; The app easily shows the current surf and weather conditons. </li>
                  <li className="mt-3">&#9642; Events are displayed to make it easy for memebers to get the information they need to plan and attend upcoming events.</li>
                  <li className="mt-3">&#9642; The Surf Log allows memebers to keep a log of all their surf sessions to track their progression and review previous sessions conditions to use data to influence decision making when selecting a surfboard or surf spot for the next surf session.</li>
                  <li className="mt-3">&#9642; Surf hacks are listed to help new members with common surf problems. </li>
                  <li className="mt-3">&#9642; The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house based on a variety of factors and conditions.</li>
                  <li className="mt-3">&#9642; The comminity forum helps memebers find other memebrs to surf with, sell items to other memebers, and also to interact with memebers to build a sense of community.</li>
                </ul>
                {/* <div className="mt-5 projectDesTitles">Project Highlights</div>
                <div className="mt-5 projectDesTitles">Project Improvements</div> */}
              </div>
            </div>
          </div>

          <div className="row portfioloDemoBox2">
            <div className="col demoText portfioloSubBoxLeft text-center">
              <h1 className="mt-3 demoTitle">Chuckwagon</h1>
              <img className="img-fluid mt-3 mb-4 demoGIF1" src={require("../img/DemoGIFs/Chuckwagon_Demo1.gif")} alt="Surf Deck Demo"></img>
            </div>

            <div className="col d-flex portfioloSubBoxRight">
              
              <div className="col-4 softwareStackBox">
                <div className="mt-3 text-center">Software Stack</div>
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
                    <li className="text-center my-3"><img className="img-fluid railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img></li>
                    <li className="text-center mb-3">
                      <a href="https://github.com/DesertCow/SaltLickTruck">
                        <img src={require('../img/Icons/github.png')}
                          className=""
                          width="50"
                          alt="GitHub Icon"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="mt-3 projectDesTitles">Project Overview</div>
                  <p className="mt-3 px-5 projectDesText text-center">Chuckwagon is A comprehensive Food Truck management application with a customer ordering App and a separate "In Kitchen" App (React) for order execution and application administration built using MongoDB, Express, React, and NodeJS (MERN Stack).</p>
                
                <div className="mt-5 projectDesTitles">Project Goal</div>
                <p className="mt-3 px-5 projectDesText text-center">Application that could be deploy to the internet or run locally on a food truck and served via WiFi to enable customers to order food without needing an internet connection.</p>
                <ul className="projectSubDesText projectGoalText px-3 mt-3 text-center">
                  <li className="mt-3">&#9642; Enable customers to view the menu and add items to the cart for checkout/purchase.</li>
                  <li className="mt-3">&#9642; Customers also create an account that provides an email for marketing purposes thus enabling higher likelyhood of repeat customers</li>
                  <li className="mt-3">&#9642; Menu is dynamically served from SQL database enabling realtime item availabity to adjusted as items availabity is exhausted.</li>
                  <li className="mt-3">&#9642; Customers can also track the status of their order via the app. <br></br>(Submitted/WIP/Ready/Picked Up)</li>
                  <li className="mt-3">&#9642; Kitchen page allows employees to track, manage, and complete orders.</li>
                  <li className="mt-3">&#9642; Orders are stored in database thus enabling analytics to be created to return valuble information to business owners and increase profit margin.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="d-flex col mt-5 justify-content-center">
        <div className="text-center pt-5">
          <h1 className="portfioloTitle p-3">About Me</h1> 
        </div>
      </div>

      <div class="container mt-5">
        <div class="row justify-content-center align-items-center">
          <div class="col mt-3 mb-4">
              <img src={require('../img/Clayton_Skaggs_6.png')}
              className="mt-3 contactPhoto"
              alt="Clayton Skaggs profile picture"/>  
          </div>

          <div className="col px-5 portfolioAboutMe">
            <p className='mt-4 pb-4'>
              Hello my name is Clayton,<br></br>
              &nbsp; <br></br>
              I'm an enthusiastic engineer who is driven to develop innovative solutions. With experience in producing world class processors at Intel, I am adept at managing complex projects and ensuring they meet strict quality standards. My passion for engineering and commitment to quality make me an asset on any team striving to develop leading-edge products.
              <br></br>
              &nbsp; <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a programmer, I excel at creating responsive and functional applications that address the needs of clients and drive business value through technical solutions. With a passion for problem-solving, I'm adept at developing software products from conception to release, delivering unique solutions that meet client requirements and exceed expectations. My skills in programming, testing and design enable me to produce products that are reliable, effective and tailored to specific business goals. With an overarching focus on delivering the best possible results for clients.
            </p>
          </div> 
        </div>
      </div>

      <div className="w-100">
        <DevTools />
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

      <div className="w-100">
        <Footer />
      </div>

    </div>

  )

}

export default Portfolio;


//!========================= EOF =========================