


//* Component Import
import Header from '../components/Header';

import { ArrowRight, Camera } from '@mui/icons-material'

const Contact = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='d-flex flex-column align-items-center justify-content-center HeaderPhotoSpacer'>

        <h1 className='contactHeaderText mt-5'>CONTACT PAGE</h1>        
          <contact className='d-flex flex-column align-items-center mt-3 contactBox'>

            <div className='d-flex flex-column align-items-center mt-5'>
              Email
            </div>
            <div className='d-flex flex-column align-items-center mt-5 emailFont'>
              clayton.skaggs89@gmail.com
              <a className="mt-3 emailLinkText"href = "mailto: clayton.skaggs89@gmail.com">Send Email</a>
              <ArrowRight />
            </div>
            
          </contact>
      </div>

    </div>

  )

}

export default Contact;


//!========================= EOF =========================