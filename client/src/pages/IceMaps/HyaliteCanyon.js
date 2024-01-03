//* CSS Import
import "../../css/MediaPages.css";

//* Component Import
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HyaliteMapOverview from '../../img/Hyalite_Overview_1.png';


//+++++++++++++++++++ Main Export +++++++++++++++++++
const HyaliteCanyon = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
        <h1 className="my-4 mb-5 p-3 mediaPageTitle">Hyalite Canyon, MT</h1>
      </div>

      <div className="col d-flex align-items-center justify-content-center">
        <a href={HyaliteMapOverview} target="_blank" rel="noopener noreferrer">
          <img className="col img-fluid codyMap px-5" src={HyaliteMapOverview} alt="Cody Ice Climbing Overview"></img>
        </a>
        
        <div className="row align-items-center">
          <div className="col my-5 aboutAreaBox">
            <p className="m-3 p-3">
              &emsp; Hyalite canyon is a world class ice climbing destination located  15 miles southeast of Bozeman, MT. 
              <br></br>
              <br></br>
              &emsp; Many world class climbers have honed their skills in this canyon and taken what they have learned in hylaite and applied to
              first ascents all over the world.
              <br></br>
              <br></br>
              &emsp; The climbs in hyalite are mostly single pitch routes but a few world class multipitch rotues speckle this canyon. 
              <br></br>
              <br></br>
              &emsp; In the last few years a renewed focus on multipitch climbing and growth in popularity of mixed climbing have added a few upper pitches 
              to previosuly single pitch climbs.
              <br></br>
              <br></br>
              &emsp; With the growth in ice climbing over the last decade Hyalite canyon is likely second only to Ouray Ice Park in terms of 
              popularity but the canyon absorbs the crowds well and still offers an intamte climbing experiance to those willing to walk a little further...
            </p>
          </div>
        </div>

      </div>

      <div className="col d-flex align-items-center justify-content-center">
        <a className="googleEarthDownloadLink" href="https://cskaggs-google-earth-bucket-2017.s3.us-west-1.amazonaws.com/GE_Network_Link/Hyalite_Canyon_V2p3.kmz">
          <h1 className="my-4 mb-5 p-3 googleEarthDownloadBox">Google Earth Download</h1>
        </a>
      </div> 

      <div className="w-100">
        <Footer />
      </div>

    </div>

  )

}

export default HyaliteCanyon;


//!========================= EOF =========================