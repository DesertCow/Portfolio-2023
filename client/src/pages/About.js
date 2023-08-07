

//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevTools from '../components/DevTools';



const About = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div>

        <div className='HeaderAboutSpacer'>
          
          <div className="col d-flex align-items-center justify-content-center">
            <h1 className="my-4 mb-5 p-3 aboutMeTitle ">About Me</h1>
          </div>
          

            <div className="row aboutLeftBox align-items-center justify-content-start">
              <div className="col aboutMeSubBoxes mx-5 pb-5 mt-5 mb-5">
                <p className="mt-5 px-4">
                  Hello!
                </p>
                <p className="mt-3 px-5 aboutText">
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
              <div className="col aboutMeSubBoxes2 mt-4 mx-5 pb-5">
                <p className="mt-5 px-5">
                  &ensp; &ensp; This love for problem solving also manifests itself in the outdoors  aswell, where I’m passionate about spending time outside and being active while growing my skills in these unique and challenging environments. During the summers I enjoy surfing, trail running, bouldering, and rock climbing. With winter time is my absolute favorite time of the year, where I enjoy resort snowboarding, splitboarding, ice climbing, high altitude mountaineering, or even multiday expeditions exploring remote regions of the western US. The opportunity to push myself physically while also growing technically in the mountain environment is something I’m passionate about.
                </p>
              </div>
            </div>

            <div className="row aboutLeftBox align-items-center justify-content-start my-5">
              <div className="col aboutMeSubBoxes3 mt-4 mx-5 pb-5">
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
              <div className="aboutMeSubBoxes2 mt-4 mx-5 pb-5">
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
              <div className="aboutMeSubBoxes3 mt-4 mx-5 pb-5">
                <p className="mt-5 px-5">
                  &ensp; &ensp; Today I continue to push myself to grow both my depth and breadth as a developer by utilizing the following technologies and tools to produce applications that return business value while using DevOps principles and the Scrum/Agile development process to produce a sustainable and deployable code cycle.
                </p>
              </div>
            </div>
            
        </div>   

      </div>

      <div className="w-100">
        <DevTools />
      </div>
        
      <div className="w-100">
        <Footer />
      </div>
      

    </div>

  )

}

export default About;


//!========================= EOF =========================