import React, { useState } from 'react';

//* Component Import
import Header from '../components/Header';

function Home() {

  return(
    <div className="d-flex flex-column min-vh-100 divMain">

      <header className="">
        <Header />
      </header>

      <div className='d-flex flex-column min-vh-100 align-items-center justify-content-center' >
        <img src={require("../img/Woodz_Selfie.jpeg")}
          className="align-items-center justify-content-center homePageMainPhoto"
          alt="Clayton Skaggs Snowy Woods"/>  
      </div>

    </div>
  )

}

export default Home;