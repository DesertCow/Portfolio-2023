
//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';

//* Icon Import
import { Camera } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

        <div className="col d-flex align-items-center justify-content-center contactSpacer">
          <h1 className="my-4 mb-5 p-3 aboutMeTitle ">Contact</h1>
        </div>

      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center contactBox'>
          <div className='justify-content-start text-center'>

            <div className='d-flex flex-column mt-4 contactEmail'>
              clayton.skaggs89@gmail.com
            </div>

            <div className='d-flex flex-column align-items-center mt-4 emailFont'>
              <a className="mt-1 emailLinkText" href = "mailto: clayton.skaggs89@gmail.com">             
                <img src={require('../img/Icons/SendEmail.png')}
                  className=""
                  width="100"
                  alt="Instagram Icon"/>  
              </a>
            </div>

            <div className='d-flex flex-column mt-3 contactLocation'>
              Newport Beach, CA
            </div>

            <div className='d-flex flex-column text-center mt-2 timeZoneText'>
              (Pacific Time Zone)
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

export default Contact;


//!========================= EOF =========================