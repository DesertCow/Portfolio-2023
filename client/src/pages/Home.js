//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';


//+++++++++++++++++++ Main Export +++++++++++++++++++
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

          <div className='homeNameText'>
            Clayton Skaggs
          </div>

          <div className='homeRoleText'>
            I build Full Stack applications for web and mobile platforms.
          </div>

          <div className='homeDesText'>
            &ensp; &ensp;&ensp; &ensp; As a Computer Engineering graduate from Oklahoma State University and former Product Development Engineer at <a href="https://www.intel.com/">Intel Corp</a>, I have a solid technical foundation and more than five years of experience developing software solutions while working on complex silicon engineering projects with a focus on exceptional quality and meeting market driven deadlines.
            <br></br>
            <br></br>
            &ensp; &ensp;&ensp; &ensp; I am seeking to apply my engineering problem solving skills to excel as a Full Stack developer. With a keen eye for detail and a drive to contiuously grow my skills while also learning new and emerging technologies. I am confident in my ability to solve problems, meet commitments, and deliver exceptional results that exceed a clients or employers expectations.
          </div> 

        </div>

        <div className='homeLinksBox'>      
          <div className="d-flex homeLinksBox2 justify-content-center align-items-center text-center w-75">
            <div className="row">
              <a href="/DevPortfolio" className='homeButtonsBox'>
                <h1 className="col homeLinkButtonsText homeLinkButtons">Dev Portfolio</h1>
              </a>
            </div>
            <div className="row">
              <a href="/About" className='homeButtonsBox'>
                <h1 className="col homeLinkButtonsText homeLinkButtons">About Me</h1>
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