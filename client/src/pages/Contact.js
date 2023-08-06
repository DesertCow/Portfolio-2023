


//* Component Import
import Header from '../components/Header';

import { Camera } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>


      <div className='d-flex flex-column align-items-center justify-content-center HeaderPhotoSpacer'>
          <contact className='d-flex flex-column align-items-center mt-5 contactBox'>

            <div className='d-flex flex-column align-items-center mt-5 contactLocation'>
              Location: Newport Beach, CA
            </div>

            <div className='d-flex flex-column align-items-center mt-5 contactEmail'>
              Email: clayton.skaggs89@gmail.com
            </div>
            <div className='d-flex flex-column align-items-center mt-3 emailFont'>
              <a className="mt-1 emailLinkText" href = "mailto: clayton.skaggs89@gmail.com">             
                <img src={require('../img/Icons/SendEmail.png')}
                  className=""
                  width="100"
                  alt="Instagram Icon"/>  
              </a>
              <div className="container">
                <div className="row mb-5">
                  <div className="col">
                      <div className="mt-5 flex-row align-items-center justify-content-center">
                        <img src={require('../img/Clayton_Skaggs_4.jpg')}
                        className="mt-3 contactPhoto"
                        width="350"
                        alt="Clayton Skaggs profile picture"/>  
                      </div>
                  </div>
                  <div className="col mx-5 d-flex container align-items-center justify-content-center">
                    <div className="d-flex container flex-column mt-5 align-items-center justify-content-center">
                      <div className="py-3 flex-row align-items-center justify-content-center">
                        <a href="https://github.com/DesertCow">
                          <img src={require('../img/Icons/github.png')}
                            className=""
                            width="50"
                            alt="GitHub Icon"/>
                        </a>
                      </div>
                      <div className="py-3 flex-row align-items-center justify-content-center">
                        <a href="https://www.linkedin.com/in/clayton-skaggs-3084b950">
                          <img src={require('../img/Icons/LinkedIn.png')}
                            className=""
                            width="50"
                            alt="LinkedIn Icon"/> 
                        </a> 
                      </div>
                      <div className="py-3 flex-row align-items-center justify-content-center">
                        <a href="https://www.instagram.com/skagggggggs/">
                          <img src={require('../img/Icons/Instagram.png')}
                            className=""
                            width="50"
                            alt="Instagram Icon"/>
                        </a>
                      </div>
                      <div className="py-3 flex-row align-items-center justify-content-center">
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


            
          </contact>
      </div>

    </div>

  )

}

export default Contact;


//!========================= EOF =========================