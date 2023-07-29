
import ReactPlayer from 'react-player'

//* Component Import
import Header from '../../components/Header';

import React, { useState } from 'react';

const MediaVideo = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div>
        <div class="d-flex row HeaderSpacer">
          <div className="row mt-5 d-flex justify-content-center">
            <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/mtXzsgFWdsE' />
          </div>
        </div>
        <div class="row mt-5 d-flex justify-content-center">
          <div class="col d-flex justify-content-center">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/0o9mT-q_1XU' />
            </div>
          </div>
          <div class="col">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/jCTwBadtoBM' />
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/TZir6XfKPLQ' />
            </div>
          </div>
          <div class="col">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/BBMliNZTb18' />
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/si2YF9yVmos' />
            </div>
          </div>
          <div class="col">
            <div className="col mt-5 d-flex justify-content-center">
              <ReactPlayer width="800px" height="540px" controls="true" url='https://youtu.be/jeXSc4eYWyA' />
            </div>
          </div>
        </div>

        <div className="HeaderSpacer d-flex justify-content-center">
        </div>
      </div>
    </div>

  )

}

export default MediaVideo;


//!========================= EOF =========================