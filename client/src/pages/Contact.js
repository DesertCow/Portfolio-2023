
//* Component Import
import Header from '../components/Header';
import Footer from '../components/Footer';




const Contact = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

        <div className="col d-flex align-items-center justify-content-center contactSpacer">
          <h1 className="mb-5 p-3 contactTitle ">Contact</h1>
        </div>

      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='d-flex flex-column align-items-center justify-content-center contactBox'>
          <div className='justify-content-start text-center'>

            <div className='d-flex flex-column contactEmail'>
              clayton.skaggs89@gmail.com
            </div>

            <div className='d-flex flex-column align-items-center emailFont'>
              <a className="emailLinkText" href = "mailto: clayton.skaggs89@gmail.com">             
                <img src={require('../img/Icons/SendEmail.png')}
                  className="emailIcon"
                  alt="Instagram Icon"/>  
              </a>
            </div>

            <div className='d-flex flex-column contactLocation'>
              Newport Beach, CA
            </div>

            <div className='d-flex flex-column text-center timeZoneText'>
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