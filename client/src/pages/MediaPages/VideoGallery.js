//* CSS Import
import "../css/MediaPages.css";

import ReactPlayer from 'react-player'
import React from 'react';

//* Component Import
import Header from '../../components/Header';
import Footer from '../../components/Footer';




const MediaVideo = () => {

  // const [mobileUser, setMobileUser] = React.useState({
  // // matches: window.innerWidth < 600 ? true : false,
  // });

  let mobileUser = false

  //* Determind Full or mobile layout
  if(window.innerWidth < 600)
  {
    mobileUser = true
  }
  else {
    mobileUser = false
  }

  console.log(mobileUser)

  if(mobileUser) {

    return (

      <div className="min-vh-100 divMain">

        <header className="w-100">
          <Header />
        </header>

        <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
          <h1 className="my-4 mb-5 p-3 mediaPageTitle">Video Gallery</h1>
        </div>

        <div className='videoListMargin'>
          <div className="row d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
              <div className="col mt-3 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/mtXzsgFWdsE' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/0o9mT-q_1XU' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/jCTwBadtoBM' />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/TZir6XfKPLQ' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/BBMliNZTb18' />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/si2YF9yVmos' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/jeXSc4eYWyA' />
              </div>
            </div>
          </div>

          <div className="HeaderSpacer d-flex justify-content-center">
          </div>
        </div>


        <div className="w-100">
          <Footer />
        </div>

      </div>

    )
  } 
  else {

    return (

      <div className="min-vh-100 divMain">

        <header className="w-100">
          <Header />
        </header>

        <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
          <h1 className="my-4 mb-5 p-3 mediaPageTitle">Video Gallery</h1>
        </div>

        <div className='videoListMargin'>
          <div className="d-flex row">
            <div className="row mt-5 d-flex justify-content-center">
              <ReactPlayer className="videoMain" width="1200px" height="750px" controls={true} url='https://youtu.be/mtXzsgFWdsE' />
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/0o9mT-q_1XU' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/jCTwBadtoBM' />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/TZir6XfKPLQ' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/BBMliNZTb18' />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/si2YF9yVmos' />
              </div>
            </div>
            <div className="col">
              <div className="col mt-5 d-flex justify-content-center">
                <ReactPlayer width="400px" height="260px" controls={true} url='https://youtu.be/jeXSc4eYWyA' />
              </div>
            </div>
          </div>

          <div className="HeaderSpacer d-flex justify-content-center">
          </div>
        </div>


        <div className="w-100">
          <Footer />
        </div>

      </div>

    )
  }
}

export default MediaVideo;


//!========================= EOF =========================