import React, { useState } from 'react';


function Home() {

  return(
    <div className="d-flex flex-column min-vh-100">
      <h1 className='text-center mt-4'>Hello World...</h1>
      <div className='text-center mt-5'>
        <img src={require("../img/Woodz_Selfie.jpeg")}
          className="align-items-center justify-content-center"
          alt="Clayton Skaggs Snowy Woods"
          width="800" height="600" />  
      </div>

    </div>
  )

}

export default Home;