
//* CSS Import
import "../css/DeveloperPortfolio_Full.css";
import "../css/DeveloperPortfolio_Mobile.css";

//* React Import
import { useState, useRef } from 'react';

//* Resume Import
import ResumePDF from '../assets/Clayton_Skaggs_Resume.pdf';
import { usePdf } from '@mikecousins/react-pdf';

//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevTools from '../components/DevTools'



const Portfolio = () => {

  //* Resume Display Config
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

      <div className='HeaderSpacer text-center'>

        <div className="d-flex col justify-content-center">
          <div className="text-center py-5">
            <h1 className="portfioloTitle p-3">Featured Projects</h1> 
          </div>
        </div>

        <div className="d-flex col justify-content-center">
          <div className="text-center pt-5 pb-4">
            <div className="portfioloAppTitle1 p-3">
              <h1>Newport Board Club</h1> 
              <h1 className="mt-3"> (Web App)</h1> 
            </div> 
          </div>
        </div>

        <div className="container d-flex">

          <div className="col featuredProjects">

            <div className="row portfioloDemoBox1">

              <div className="col demoText portfioloSubBoxLeft text-center">
                <h1 className="demoTitle">Demo</h1>
                <img className="img-fluid demoGIF1" src={require("../img/DemoGIFs/The_Board_Club_App_Demo1.gif")} alt="Surf Deck Demo"></img>
                <a className='demoLinkText' href="https://boardclubapp-production.up.railway.app/">Live Demo Link</a>
                <div className='demoTargetInfoBox text-center'>
                  <h1 className='demoScreenText'>* App Designed for Mobile Experience *</h1>
                  <h1 className='demoScreenText'>Screen Width: 390px - 420px  </h1>
                </div>
                <div className='demoLoginInfoBox'>
                  <h1 className='demoLoginTitleText'>Demo Login</h1>
                  <h1 className='demoLoginText'>Email: demo@gmail.com</h1>
                  <h1 className='demoLoginText'>Password: demo </h1>
                </div>
              </div>

              <div className="col d-flex portfioloSubBoxRight">
                
                <div className="col-4 softwareStackBox">
                  <div className="stackText">Software Stack</div>
                  <ul className="softwareStackList">
                    <li className="softwareStackListItem">&#9642; App Type: Progressive Web App</li>
                    <li className="softwareStackListItem">&#9642; Frontend: React (18.2.0)</li>
                    <li className="softwareStackListItem">&#9642; Framework: Bootstrap (2.5.0)</li>
                    <li className="softwareStackListItem">&#9642; API: GraphQL (16.6.0)</li>
                    <li className="softwareStackListItem">&#9642; Backend: NodeJS (16.15.1)</li>
                    <li className="softwareStackListItem">&#9642; Database: MongoDB (5.6.0)</li>
                    <li className="softwareStackListItem">&#9642; Photo Host: AWS S3</li>
                    {/* <li className="softwareStackListItem">&#9642; App Hosting: <a href="https://boardclubapp-production.up.railway.app/">Board Club (Live)</a></li> */}
                    <li className="softwareStackListItem appHost">&#9642; App Hosting:</li>
                    <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; Client/Server: Railway</li>
                    <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; Database: Self Host (Docker)</li>
                    <li className="text-center logoOffset"><img className="img-fluid railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img></li>
                    <li className="text-center logoOffset d-flex justify-content-around col">
                      <div>
                        <a href="https://github.com/DesertCow/NewportBoardClubApp_PWA">
                          <img src={require('../img/Icons/github.png')}
                            className="GitHub"
                            alt="GitHub Icon"/>
                        </a>
                        <h1>Client</h1> 
                      </div>
                      <div>
                        <a href="https://github.com/DesertCow/NewportBoardClubApp_Server">
                          <img src={require('../img/Icons/github.png')}
                            className="GitHub"
                            alt="GitHub Icon"/>
                        </a>
                        <h1>Server</h1> 
                      </div>
                    </li>
                    <li className="text-center logoOffset developmentStatus">
                        <h1 className='developmentStatusTitleText'>Development Status</h1>
                        {/* <h1 className='demoLoginTitleText'>Status</h1> */}
                        <div className='developmentStatusBox'>
                          <h1 className='developmentStatusText text-center'>Active</h1>
                        </div>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <div className="projectDesTitles">Project Overview</div>
                    <p className="projectDesText text-center">An application designed to allow members of the board club to view current surf/weather conditions, 
                    club events, log surf sessions, view surf tips, rental information, and general information 
                    about the club.</p>
                  
                  <div className="projectDesTitles2">Project Goal</div>
                  <p className="projectDesText">The goal of this application to motivate users to go surf by providing them with the all the infomation they need to have a great surf session.</p>
                  <ul className="projectSubDesText projectGoalText">
                    <li className="projectSubDesTextItem">&#9642; The app shows the current surf and weather conditons. With a popup / modal showing more detailed weather information.</li>
                    <li className="projectSubDesTextItem">&#9642; Events are displayed to make it easy for members to get the information they need to plan and attend upcoming events.</li>
                    <li className="projectSubDesTextItem">&#9642; The Surf Log allows members to keep a log of all their surf sessions to track their progression and review previous sessions conditions to use data to influence decision making when selecting a surfboard or surf spot for the next surf session.</li>
                    <li className="projectSubDesTextItem">&#9642; Surf hacks are listed to help new members with common surf problems. </li>
                    <li className="projectSubDesTextItem">&#9642; The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house.</li>
                    <li className="projectSubDesTextItem">&#9642; The community forum helps members find others to surf with, sell items and also to interact with one another to build a sense of community.</li>
                    <li className="projectSubDesTextItem">&#9642; Includes admin console with seperate login to enable (add/remove/edit) of Surf Hacks, Events, and shaper list.</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="d-flex col justify-content-center">
              <div className="text-center pt-5 pb-4">
                <div className="portfioloAppTitle3 p-3">
                  <h1>Newport Board Club</h1> 
                  <h1 className="mt-3"> (React Native)</h1> 
                </div> 
              </div>
            </div>

            <div className="row portfioloDemoBox3">

              <div className="col demoText portfioloSubBoxLeft text-center">
                <h1 className="demoTitle">Demo</h1>
                <img className="img-fluid demoGIF1" src={"https://claytonskaggs-s3-portfolio.s3.us-west-1.amazonaws.com/NBC_React_Native_Demo1.gif"} alt="Surf Deck Demo"></img>
                {/* <div className='demoTargetInfoBox text-center'>
                  <h1 className='demoScreenText'>Android: <a className='storeLinkText' href="https://play.google.com/">GooglePlay Store</a></h1>
                  <h1 className='demoScreenText'>iOS: <a className='storeLinkText' href="https://www.apple.com/app-store/">Apple Store</a></h1>
                </div> */}
                <div className='demoLoginInfoBox'>
                  <h1 className='demoLoginTitleText'>Demo Login</h1>
                  <h1 className='demoLoginText'>Email: demo@gmail.com</h1>
                  <h1 className='demoLoginText'>Password: demo </h1>
                </div>
              </div>

              <div className="col d-flex portfioloSubBoxRight">
                
                <div className="col-4 softwareStackBox">
                  <div className="stackText">Software Stack</div>
                  <ul className="softwareStackList">
                    <li className="softwareStackListItem">&#9642; App Type: React Native</li>
                    <li className="softwareStackListItem">&#9642; Frontend: React Native (0.72.3)</li>
                    <li className="softwareStackListItem">&#9642; Build Tool: Expo (49.0.6)</li>
                    <li className="softwareStackListItem">&#9642; API: GraphQL (16.6.0)</li>
                    <li className="softwareStackListItem">&#9642; Backend: NodeJS (16.15.1)</li>
                    <li className="softwareStackListItem">&#9642; Database: MongoDB (5.6.0)</li>
                    <li className="softwareStackListItem">&#9642; Photo Host: AWS S3</li>
                    {/* <li className="softwareStackListItem">&#9642; App Hosting: <a href="https://boardclubapp-production.up.railway.app/">Board Club (Live)</a></li> */}
                    <li className="softwareStackListItem appHost">&#9642; App Stores Submission:</li>
                    <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; GooglePlay: Unsubmitted (WIP)</li>
                    <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; AppleStore: Unsubmitted (WIP)</li>
                    <li className="text-center logoOffset d-flex justify-content-around col">
                      <div>
                        <a href="https://github.com/DesertCow/NewportBoardClubApp_Native">
                          <img src={require('../img/Icons/github.png')}
                            className="GitHub"
                            alt="GitHub Icon"/>
                        </a>
                        <h1>Client</h1> 
                      </div>
                      <div>
                        <a href="https://github.com/DesertCow/NewportBoardClubApp_Server">
                          <img src={require('../img/Icons/github.png')}
                            className="GitHub"
                            alt="GitHub Icon"/>
                        </a>
                        <h1>Server</h1> 
                      </div>
                    </li>
                    <li className="text-center developmentStatus">
                        <h1 className='developmentStatusTitleText'>Development Status</h1>
                        {/* <h1 className='demoLoginTitleText'>Status</h1> */}
                        <div className='developmentStatusBox'>
                          <h1 className='developmentStatusText text-center'>Active</h1>
                        </div>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <div className="projectDesTitles">Project Overview</div>
                    <p className="projectDesText text-center">A ground up rebuild of the orginal Newport Board Club app but with react native and designed to be deployed to Android and iOS platforms from the same code base via Expo. This app utilizes the same backend API/Server as the previously developed web App.</p>
                  
                  <div className="projectDesTitles2">Project Goal</div>
                  <p className="projectDesText">The goal of this application is to enable all features from orginal app while also adding Push Notifications and an SVG interactive surf map.</p>
                  <ul className="projectSubDesText projectGoalText">
                    <li className="projectSubDesTextItem">&#9642; The app shows the current surf and weather conditons. With a popup / modal showing more detailed weather information. </li>
                    <li className="projectSubDesTextItem">&#9642; Events are displayed to make it easy for members to get the information they need to plan and attend upcoming events.</li>
                    <li className="projectSubDesTextItem">&#9642; The Surf Log allows members to keep a log of all their surf sessions to track their progression and review previous sessions conditions to use data to influence decision making when selecting a surfboard or surf spot for the next surf session.</li>
                    <li className="projectSubDesTextItem">&#9642; Surf hacks are listed to help new members with common surf problems. </li>
                    <li className="projectSubDesTextItem">&#9642; The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house.</li>
                    <li className="projectSubDesTextItem">&#9642; The community forum helps members find others to surf with, sell items and also to interact with one another to build a sense of community.</li>
                    <li className="projectSubDesTextItem">&#9642; Includes admin console with seperate login to enable adding/removing/editing Surf Hacks, Events, and shaper list.</li>
                    <li className="projectSubDesTextItem">&#9642; Push Notifications allow memebers to stay up to date on current surf conditions, club events, and new surfboard additions to the club.</li>
                  </ul>
                </div>

              </div>
            </div>
            
            <div className="d-flex col justify-content-center text-center">
              <div className="text-center pt-5 pb-4">
                <h1 className="portfioloAppTitle2 p-3">Chuckwagon</h1> 
              </div>
            </div>

            <div className="row portfioloDemoBox2">
              <div className="col demoText portfioloSubBoxLeft text-center">
                <h1 className="demoTitle">Demo</h1>
                <img className="img-fluid demoGIF1" src={require("../img/DemoGIFs/Chuckwagon_Demo1.gif")} alt="Surf Deck Demo"></img>
                <a className='demoLinkText' href="https://saltlicktruck-production.up.railway.app/">Live Demo Link</a>
                <div className='demoTargetInfoBox text-center'>
                  <h1 className='demoScreenText'>* App Designed for Mobile Experience *</h1>
                  <h1 className='demoScreenText'>Screen Width: 390px - 420px  </h1>
                </div>
                <div className='demoLoginInfoBox'>
                  <h1 className='demoLoginTitleText'>Demo Login</h1>
                  <h1 className='demoLoginText'>Email: demo@gmail.com</h1>
                  <h1 className='demoLoginText'>Password: demo </h1>
                </div>
              </div>

              <div className="col d-flex portfioloSubBoxRight">
                
                <div className="col-4 softwareStackBox">
                  <div className="stackText">Software Stack</div>
                  <div className="d-flex justify-content-start">
                    <ul className="softwareStackList text-left">
                      <li className="softwareStackListItem">&#9642; App Type: Progressive Web App</li>
                      <li className="softwareStackListItem">&#9642; Frontend: React (18.2.0)</li>
                      <li className="softwareStackListItem">&#9642; Framework: Bootstrap (5.2.1)</li>
                      <li className="softwareStackListItem">&#9642; API: GraphQL (15.3.0)</li>
                      <li className="softwareStackListItem">&#9642; Backend: NodeJS (16.15.1)</li>
                      <li className="softwareStackListItem">&#9642; Database: MongoDB (5.6.0)</li>
                      <li className="softwareStackListItem">&#9642; Database: MySQL (2.3.3)</li>
                      <li className="softwareStackListItem appHost">&#9642; App Hosting:</li>
                      <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; Client/Server: Railway</li>
                      <li className="softwareStackListItem">&nbsp;&nbsp;&nbsp;&#9642; Database: Self Host (Docker)</li>
                      {/* <li className="pt-3">&#9642; App Hosting: <a href="https://saltlicktruck-production.up.railway.app/">Chuckwagon (Live)</a></li> */}
                      <li className="text-center logoOffset"><img className="img-fluid railwayLogo" src={require("../img/Icons/railway_logo.png")} alt="Railway Logo"></img></li>
                      <li className="text-center logoOffset">
                        <a href="https://github.com/DesertCow/SaltLickTruck">
                          <img src={require('../img/Icons/github.png')}
                            className="GitHub"
                            alt="GitHub Icon"/>
                        </a>
                        <h1 className='GitHubText'>Client + Server</h1>
                      </li>
                    <li className="text-center developmentStatus">
                        <h1 className='developmentStatusTitleText'>Development Status</h1>
                        {/* <h1 className='demoLoginTitleText'>Status</h1> */}
                        <div className='developmentInactiveStatusBox'>
                          <h1 className='developmentInactiveStatusText text-center'>Inactive</h1>
                        </div>
                    </li>
                    </ul>
                  </div>
                </div>

                <div className="col">
                  <div className="projectDesTitles">Project Overview</div>
                    <p className="projectDesText text-center">Chuckwagon is a comprehensive Food Truck management application with a customer ordering App and a separate "In Kitchen" App (React) for order execution and application administration built using MongoDB, Express, React, and NodeJS (MERN Stack).</p>
                  
                  <div className="projectDesTitles">Project Goal</div>
                  <p className="projectDesText text-center">Application that could be deploy to the internet or run locally on a food truck and served via WiFi to enable customers to order food without needing an internet connection.</p>
                  <ul className="projectSubDesText projectGoalText">
                    <li className="projectSubDesTextItem">&#9642; Enable customers to view the menu and add items to the cart for checkout/purchase.</li>
                    <li className="projectSubDesTextItem">&#9642; Customers also create an account that provides an email for marketing purposes thus enabling higher likelihood of repeat customers</li>
                    <li className="projectSubDesTextItem">&#9642; Menu is dynamically served from SQL database enabling realtime item availabity to adjust as items availabity is exhausted.</li>
                    <li className="projectSubDesTextItem">&#9642; Customers can also track the status of their order via the app. <br></br>(Submitted/WIP/Ready/Picked Up)</li>
                    <li className="projectSubDesTextItem">&#9642; Kitchen page allows employees to track, manage, and complete orders.</li>
                    <li className="projectSubDesTextItem">&#9642; Orders are stored in database, thus enabling analytics to be created to return valuable information to business owners and increase profit margin.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="d-flex col justify-content-center">
          <div className="text-center pt-5">
            <h1 className="aboutMeTitle p-3">About Me</h1> 
          </div>
        </div>

        <div className="container mt-5">

          <div className="row justify-content-center align-items-center">
            <div className="col mt-3 mb-4">
                <img src={require('../img/Clayton_Skaggs_6.png')}
                className="mt-3 contactPhotoPortfolio"
                alt="Clayton Skaggs profile picture"/>  
            </div>

            <div className="col px-5 portfolioAboutMe">
              <p className='mt-4 pb-4'>
                Hello my name is Clayton,<br></br>
                &nbsp; <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm an enthusiastic computer engineer who has extensive experience working on large projects with teams of engineers to develop solutions, meet commitments, and deliver high quality products to production. With experience in producing world class processors at <a href="https://www.intel.com/">Intel Corp</a>, I am adept at managing complex projects and ensuring they meet strict quality standards. My passion for engineering and commitment to quality make me an asset on any team striving to develop software solutions that add real business value for customers.
                <br></br>
                &nbsp; <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a programmer, I excel at creating responsive and functional applications that address the needs of clients and drive business value through technical solutions. With a passion for problem-solving, I'm skilled at developing software products from design to release. While delivering products on schedule while simultaneously meeting the customers requirements and exceed their expectations. My skills in programming, testing, and application design enable me to produce products that are reliable, effective, and tailored to specific business goals. With an overarching focus on delivering the best possible results for customers.
              </p>
            </div> 
          </div>
        </div>

        <div className="d-flex col mt-5 pt-5 justify-content-center">
          <div className="text-center">
            <h1 className="portfioloTitle p-3">Development Skills</h1> 
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
          <div className="">
            {/* <PdfViewerComponent document={"Clayton_Skaggs_Resume.pdf"}/> */}
            <div className="d-flex col justify-content-center">
              {!pdfDocument && <span>Loading...</span>}
              <canvas ref={canvasRef} className='PDFViewer'/>
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