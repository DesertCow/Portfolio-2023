

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
                  &ensp; &ensp; My name is Clayton and I am an engineer with a passion for solving problems and creating amazing products. My experience working at <a href="https://www.intel.com/">Intel</a> to design and ship world class processors and has given me the skills to produce creative solutions with a focus on exceptional quaility. Transitioning these skills into the full stack development space allows me to design, build, and deploy high quaility applications that create real business values for my clients.
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
                  &ensp; &ensp; I am passionate about problem solving both in my professional and personal life. This passion extends to the outdoors where I enjoy being active and testing my skills in challenging environments. I love surfing, trail running, bouldering, and rock climbing during the summer months. During the winter I enjoy splitboarding, ice climbing, and resort snowboarding. Spending time in the wilderness and pushing myself out of my comfort zone not only provides a physical challenge but also helps me further develop my problem-solving skills.
                </p>
              </div>
            </div>

            <div className="row aboutLeftBox align-items-center justify-content-start my-5">
              <div className="col aboutMeSubBoxes3 mt-4 mx-5 pb-5">
                <p className="mt-5 px-5">
                  &ensp; &ensp; As an experienced hardware engineer at <a href="https://www.intel.com/">Intel</a>, my career ambitions have recently shifted towards software development, specifically in the cloud computing industry. Although I possess a deep understanding of the hardware side of the cloud, I now recognize the importance and potential of software development in advancing cloud computing. This shift in focus has led me to pursue opportunities in software development and broaden my skillset in this field.
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
                  &ensp; &ensp; Acquiring my <a href="https://aws.amazon.com/certification/certified-developer-associate/">AWS Certified Developer</a> and <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">AWS Certified Cloud Practitioner</a> certifications from Amazon served as my entry point into this industry, granting me a newfound understanding for the agility and potential of cloud technology. These certifications granted me an overview of AWS, enabling a deeper understanding of the rapidly-evolving landscape of cloud tech.
                </p>
              </div>
            </div>

            <div className="row aboutLeftBox align-items-center justify-content-start my-5">
              <div className="aboutMeSubBoxes2 mt-4 mx-5 pb-5">
                <p className="mt-5 px-5">
                  &ensp; &ensp; Upon realizing the potential of React in facilitating the creation of complex apps, I initially found it challenging to comprehend its programming language and environment. Despite having proficiency in over twelve programming languages, React posed a unique learning curve that demanded my full attention and effort. After attending a coding boot camp at UC Irvine I was finally able to build the foundation necessary to find success and build complex and functional applications utilizing the React framework.
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
                  &ensp; &ensp; As a developer, I strive to constantly improve and expand my skill set. I achieve this by utilizing various technologies and tools to create applications that provide tangible benefits to businesses. To ensure that my code is both maintainable and deployable, I adhere to DevOps principles. Through this approach, I am able to produce high-quality code that delivers real value while constantly pushing myself to learn and grow as a professional.
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