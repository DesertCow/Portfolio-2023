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

      <div className="col d-flex align-items-center justify-content-center mt-5">
        <a href={CodyMapOverview} target="_blank" rel="noopener noreferrer">
          <img className="col img-fluid codyMap px-5" src={CodyMapOverview} alt="Cody Ice Climbing Overview"></img>
        </a>
        
        <p className="col px-5 codyDescriptionText">
          The South Fork of the Shoshone River, 35 miles southwest of Cody, Wyoming, is home to the highest concentration of frozen
          waterfalls in the continental United States. During a typical season there will be over 150 pitches of ice within a 10-mile 
          radius. When conditions are exceptional you can expect over 300 pitches of ice. South Fork offers world class multiptich ice 
          climbing with generally low snow accumulations making travel relatively easy compared to other ice climbing venues. With the high
          density of climbs and relativly long drive to Cody from large population centers the South Fork is rarely "busy" and offers an intimate
          climbing experience.
        </p>
      </div>
      


      <div className="w-100">
        <Footer />
      </div>

    </div>

  )

}

export default CodyIce;


//!========================= EOF =========================