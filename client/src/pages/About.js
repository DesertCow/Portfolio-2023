

//* Component Import
import Header from '../components/Header';



const About = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='HeaderAboutSpacer'>
        
        <div className="col d-flex align-items-center justify-content-center">
          <h1 className="my-4 mb-5 aboutMeTitle ">About Me</h1>
        </div>
        

          <div className="row aboutLeftBox align-items-center justify-content-start">
            <div className="col aboutMeSubBoxes mx-5 pb-5 mt-5 mb-5">
              <p className="mt-5 px-4">
                Hello!
              </p>
              <p className="mt-3 px-5">
                &ensp; &ensp; My name is Clayton and I am passionate about using engineering to solve problems and create awesome products. Whether it’s building physical products like when I was working at <a href="https://www.intel.com/">Intel</a> to design, validate, and shipping world class processors and chipsets. Or designing and printing 3D parts at home to create solutions for everyday problems. I enjoy the creativity and problem solving required to create new and unique products.
              </p>
            </div>
            <div className="col">
              <img className="img-fluid aboutMePar1Picture" src={require("../img/AboutMe/Clayton_Skaggs_4.jpg")} alt="Railway Logo"></img>
            </div>
          </div>

          <div className="row aboutRightBox align-items-center justify-content-end my-5">
            <div className="col">
              <img className="img-fluid aboutMePar2Picture" src={require("../img/AboutMe/IMGP0606.jpg")} alt="Railway Logo"></img>
            </div>
            <div className="col aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; This love for problem solving also manifests itself in the outdoors  aswell, where I’m passionate about spending time outside and being active while growing my skills in these unique and challenging environments. During the summers I enjoy surfing, trail running, bouldering, and rock climbing. But winter time is my absolute favourite time of the year, where I enjoy resort snowboarding, splitboarding, ice climbing, high altitude mountaineering, or even multiday expedition exploring remote regions of the western US. The opportunity to push myself physically while also growing technically in the mountain environment is something I’m passionate about.
              </p>
            </div>
          </div>

          <div className="row aboutLeftBox align-items-center justify-content-start my-5">
            <div className="col aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; More recently my career ambitions have shifted from hardware engineering to software development. At <a href="https://www.intel.com/">Intel</a> I was working on the products that push cloud computing forward and while I have an intricate understanding of the hardware side of the cloud. The depth of my understanding of CPU’s is down to the binary level which is required to write test content to validate cutting edge Gen4 interfaces like PCI-E and USB. As I progressed in my career at <a href="https://www.intel.com/">Intel</a> I became more interested in the software that enables developers to harness the power of the cloud to produce software products that power our everyday life.
              </p>
            </div>
            <div className="col">
              <img className="img-fluid aboutMePar3Picture mt-5" src={require("../img/AboutMe/Sky_Lake_Die.jpeg")} alt="Railway Logo"></img>
            </div>
          </div>

          <div className="row aboutRightBox align-items-center justify-content-end my-5">
            <div className="col">
              <img className="img-fluid aboutMePar4Picture mt-5" src={require("../img/AboutMe/AWS_Path.jpg")} alt="Railway Logo"></img>
            </div>
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; My first foray into this field was while getting my <a href="https://aws.amazon.com/certification/certified-developer-associate/">AWS Certified Developer</a> and <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner</a> certifications from Amazon. These truly opened my eyes to the power of the cloud and the fast paced evolution of technologies in this space. Armed with a high level understanding of AWS and the ability to deploy apps and websites to the internet my focus turned to how to create applications and websites.
              </p>
            </div>
          </div>

          <div className="row aboutLeftBox align-items-center justify-content-start my-5">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; I quickly recognized the power of React and how it was enabling developers to build complex apps with agility and speed. At first I struggled to wrap my head around this language and development environment. Though I have learned over a dozen programming languages in my career, React required me to rethink how I approached programming problems. After attending a coding boot camp at UC Irvine I was finally able to build the foundation necessary to find success and build complex and functional applications utilizing the React framework.
              </p>
            </div>
            <div className="col">
              <img className="img-fluid aboutMePar5Picture mt-5" src={require("../img/AboutMe/ReactJS-Framework-Benefits.png")} alt="Railway Logo"></img>
            </div>
          </div>

          <div className="row aboutRightBox align-items-center justify-content-end">
            <div className="col">
              <img className="img-fluid aboutMePar6Picture mt-5" src={require("../img/AboutMe/1920px-Devops-toolchain.png")} alt="Railway Logo"></img>
            </div>
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; Today I continue to push myself to grow both my depth and breadth as a developer by utilizing the following technologies and tools to produce applications that return business value while using DevOps principles and the Scrum/Agile development process to produce a sustainable and deployable code cycle.
              </p>
            </div>
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

export default About;


//!========================= EOF =========================