

//* Component Import
import Header from '../components/Header';



const About = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='d-flex flex-column align-items-center justify-content-center HeaderPhotoSpacer'>
        <h1 className="my-4 aboutMeTitle">About Me</h1>

        <div className="AboutMeBox">
          <p className="mt-5 px-4">
            Hello!
          </p>
          <p className="mt-3 px-5">
            &ensp; &ensp; My name is Clayton and I am passionate about using engineering to solve problems and create awesome products. Whether it’s building physical products like when I was working at Intel to design, validate, and shipping world class processors and chipsets. Or designing and printing 3D parts at home to create solutions for everyday problems. I enjoy the creativity and problem solving required to create new and unique products and solutions.
          </p>
          <p className="mt-4 px-5">
            &ensp; &ensp; This love for problem solving also manifests itself in an outdoor setting, where I’m passionate about spending time outside and being active and growing my skills in unique environments. Whether i’m enjoying the phenomenal year around surfing opportunities that orange county provides or spending time during the summers trail running, bouldering, and rock climbing. But winter time is my absolute favourite time of the year, whether I'm resort snowboarding, splitboarding, ice climbing, high altitude mountaineering, or even on an expedition. The opportunity to push myself physically while also growing technically in the mountain environment is something I’m passionate about and thankful for the opportunities to pursue these goals.
          </p>
          <p className="mt-4 px-5">
            &ensp; &ensp; More recently my career ambitions have shifted from hardware engineering to software development. At Intel I was working on the products that push cloud computing forward and while I have an intricate understanding of the hardware side of the cloud, down to a binary level which is the level of understanding required to test and validate cutting edge interfaces like PCI-E and USB Gen4. I became more interested in the software that enables developers to harness the cloud to produce software products that power our everyday life.
          </p>
          <p className="mt-4 px-5">
            &ensp; &ensp; My first foray into this field was while getting my AWS Certified Developer - Associate and AWS Certified Cloud Practitioner certifications from Amazon. These truly opened my eyes to the power of the cloud and the fast paced evolution of technologies in this space. Armed with a high level understanding of AWS and the ability to deploy apps and websites to the internet my focus turned to how to create applications and websites.
          </p>
          <p className="mt-4 px-5">
            &ensp; &ensp; I quickly recognized the power of React and how it was enabling developers to build complex apps with agility and speed. At first I struggled to wrap my head around this language and development environment, though I have learned over a dozen programming languages in my career, React required me to rethink how I approached programming problems. After attending a coding boot camp at UC Irvine I was finally able to build the foundation necessary to find success and build complex and functional applications  utilizing the React framework.
          </p>
          <p className="mt-4 px-5">
            &ensp; &ensp; Today I continue to push myself to grow both my depth and breadth as a developer by utilizing the following technologies and tools to produce applications that return business value while using DevOps principles to produce sustainable code.
          </p>

        </div>

      </div>

    </div>

  )

}

export default About;


//!========================= EOF =========================