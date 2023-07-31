

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
          <h1 className="my-4 aboutMeTitle ">About Me</h1>
        </div>
        

          <div className="row aboutLeftBox align-items-center justify-content-start">
            <div className="aboutMeSubBoxes mx-5 pb-5">
              <p className="mt-5 px-4">
                Hello!
              </p>
              <p className="mt-3 px-5">
                &ensp; &ensp; My name is Clayton and I am passionate about using engineering to solve problems and create awesome products. Whether it’s building physical products like when I was working at <a href="https://www.intel.com/">Intel</a> to design, validate, and shipping world class processors and chipsets. Or designing and printing 3D parts at home to create solutions for everyday problems. I enjoy the creativity and problem solving required to create new and unique products.
              </p>
            </div>
          </div>

          <div className="row aboutRightBox align-items-center justify-content-end">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; This love for problem solving also manifests itself in the outdoors  aswell, where I’m passionate about spending time outside and being active while growing my skills in these unique and challenging environments. During the summers I enjoy surfing, trail running, bouldering, and rock climbing. But winter time is my absolute favourite time of the year, where I enjoy resort snowboarding, splitboarding, ice climbing, high altitude mountaineering, or even multiday expedition exploring remote regions of the western US. The opportunity to push myself physically while also growing technically in the mountain environment is something I’m passionate about.
              </p>
            </div>
          </div>

          <div className="row aboutLeftBox align-items-center justify-content-start">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; More recently my career ambitions have shifted from hardware engineering to software development. At <a href="https://www.intel.com/">Intel</a> I was working on the products that push cloud computing forward and while I have an intricate understanding of the hardware side of the cloud. The depth of my understanding of CPU’s is down to the binary level which is required to write test content to validate cutting edge Gen4 interfaces like PCI-E and USB. As I progressed in my career at <a href="https://www.intel.com/">Intel</a> I became more interested in the software that enables developers to harness the power of the cloud to produce software products that power our everyday life.
              </p>
            </div>
          </div>
          <div className="row aboutRightBox align-items-center justify-content-end">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; My first foray into this field was while getting my <a href="https://aws.amazon.com/certification/certified-developer-associate/">AWS Certified Developer</a> and <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner</a> certifications from Amazon. These truly opened my eyes to the power of the cloud and the fast paced evolution of technologies in this space. Armed with a high level understanding of AWS and the ability to deploy apps and websites to the internet my focus turned to how to create applications and websites.
              </p>
            </div>
          </div>

          <div className="row aboutLeftBox align-items-center justify-content-start">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; I quickly recognized the power of React and how it was enabling developers to build complex apps with agility and speed. At first I struggled to wrap my head around this language and development environment. Though I have learned over a dozen programming languages in my career, React required me to rethink how I approached programming problems. After attending a coding boot camp at UC Irvine I was finally able to build the foundation necessary to find success and build complex and functional applications utilizing the React framework.
              </p>
            </div>
          </div>

          <div className="row aboutRightBox align-items-center justify-content-end">
            <div className="aboutMeSubBoxes mt-4 mx-5 pb-5">
              <p className="mt-5 px-5">
                &ensp; &ensp; Today I continue to push myself to grow both my depth and breadth as a developer by utilizing the following technologies and tools to produce applications that return business value while using DevOps principles and the Scrum/Agile development process to produce sustainable and deployable code.
              </p>
            </div>
          </div>
      </div>   

      <div class="mt-5 container d-flex lex-column align-items-center justify-content-center">
        <div class="row mt-5">
          <div class="col mx-5 programLanguagesBox">
            <div class="mt-4 text-center languagesListTitle">
              Current
            </div>
            <div class="text-center languagesListTitle">
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
          <div class="col mx-5 programLanguagesBox2">
            <div class="mt-4 text-center languagesListTitle">
              Previous
            </div>
            <div class="text-center languagesListTitle">
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

        

      

    </div>

  )

}

export default About;


//!========================= EOF =========================