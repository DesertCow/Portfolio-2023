//* CSS Import
import "../../css/IceMaps.css";

//* Component Import
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CodyMapOverview from '../../img/SouthFork_Overview_1.png';


//+++++++++++++++++++ Main Export +++++++++++++++++++
const CodyIce = () => {

  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className="col d-flex align-items-center justify-content-center HeaderGallerySpacer">
        <h1 className="my-4 mb-5 p-3 mediaPageTitle">South Fork Shoshone River</h1>
      </div>

      <div className="col d-flex align-items-center justify-content-center">
        <a href={CodyMapOverview} target="_blank" rel="noopener noreferrer">
          <img className="col img-fluid codyMap px-5" src={CodyMapOverview} alt="Cody Ice Climbing Overview"></img>
        </a>
        
        <div className="row align-items-center my-5">
          <div className="col my-5 aboutAreaBox">
            {/* <p className="col px-5 codyDescriptionText"> */}
            <p className="m-3 p-3">
            &emsp; The South Fork of the Shoshone River which is 35 miles southwest of Cody, Wyoming is home to the highest concentration of frozen
            waterfalls in the continental United States. 
            <br></br>
            <br></br>
            &emsp; During a typical season there will be over 150 pitches of ice within a 10-mile 
            radius. When conditions are exceptional you can expect over 300 pitches of ice. 
            <br></br>
            <br></br>
            &emsp; South Fork offers world class multiptich ice climbing with generally low snow accumulations making travel relatively easy 
            compared to other north american ice climbing venues. 
            <br></br>
            <br></br>
            &emsp; With the high
            density of climbs and relativly long drive to Cody from large population centers the South Fork is rarely "busy" and offers an intimate 
            and remote climbing experience.
        </p>
          </div>
        </div>

      </div>
      
      <div className="col d-flex align-items-center justify-content-center">
        <a className="googleEarthDownloadLink" href="https://cskaggs-google-earth-bucket-2017.s3.us-west-1.amazonaws.com/GE_Network_Link/Cody_V0p5.kmz">
          <h1 className="my-4 mb-5 p-3 googleEarthDownloadBox">Google Earth Download</h1>
        </a>
      </div> 

      <div className="w-100">
        <Footer />
      </div>

    </div>

  )

}

export default CodyIce;


//!========================= EOF =========================