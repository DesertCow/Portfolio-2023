import React, { useState } from 'react';

//* Component Import
import Header from '../components/Header';

function Home() {

  return(
    <div className="d-flex flex-column min-vh-100">

      <header className="">
        <Header />
      </header>

      {/* <h1 className='text-center mt-4'>Hello World...</h1> */}
      <div className='text-center mt-5'>
        <img src={require("../img/Woodz_Selfie.jpeg")}
          className="align-items-center justify-content-center homePageMainPhoto"
          alt="Clayton Skaggs Snowy Woods"
          width="800" height="600" />  
      </div>

    </div>
  )

}

export default Home;