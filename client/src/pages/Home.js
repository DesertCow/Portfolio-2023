
//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';



function Home() {

  return(
    <div className="d-flex flex-column min-vh-100 divMain">

      <header className="">
        <Header />
      </header>

      <div className='homeHeaderSpacer d-flex align-items-center justify-content-center'>

        <div className='row d-flex align-items-center justify-content-center homeLandingZone'>
          
          <div className='homeHelloText'>
            Hello my name is
          </div>

          <div className='mt-4 homeNameText'>
            Clayton Skaggs
          </div>

          <div className='mt-5 homeRoleText'>
            I build Full Stack applications for web and mobile platforms.
          </div>

          <div className='mt-5 homeDesText'>
            &ensp; &ensp;&ensp; &ensp; I am a Computer Engineering graduate from Oklahoma State University and a former Product Development Engineer at Intel, who possess a strong technical foundation and over five years of professional experience working on complex silicon engineering projects with the expectation of delivering exceptional results. 
            <br></br>
            <br></br>
            &ensp; &ensp;&ensp; &ensp; I am seeking to apply my engineering problem solving skills to excel as a Full Stack developer. With a keen eye for detail and a thirst to contiuously improve as a developer by constantly learning and growing my skills while also utilizing new and emerging technologies. I am confident in my ability to solve problems and deliver exceptional results that exceed clients or an employers expectations.
          </div> 

        </div>

        <div className='container homeLinksBox'>      
          <div class="container justify-content-center align-items-center text-center w-75">
            <div class="row mt-5">
              <a href="/DevPortfolio" className='homeLinkButtonsText'>
                <h1 className="col portfioloTitle p-3 homeLinkButtonsText homeLinkButtons">Dev Portfolio</h1>
              </a>
            </div>
            <div class="row mt-5">
              <a href="/About" className='homeLinkButtonsText'>
                <h1 className="col portfioloTitle p-3  homeLinkButtons homeLinkButtonsText">About Me</h1>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="w-100">
        <Footer />
      </div>

    </div>
  )
}

export default Home;

//!========================= EOF =========================