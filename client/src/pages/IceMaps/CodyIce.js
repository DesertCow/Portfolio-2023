import '../../css/IceMaps.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CodyMapOverview from '../../img/SouthFork_Overview_1.png';

const CodyIce = () => (
  <div className="ice-map-page">
    <Header />

    <section className="ice-map-hero">
      <h1 className="ice-map-title">South Fork Shoshone River</h1>
      <p className="ice-map-subtitle">Ice Climbing · Wyoming</p>
    </section>

    <section className="ice-map-image-wrap">
      <a href={CodyMapOverview} target="_blank" rel="noopener noreferrer">
        <img
          className="ice-map-image"
          src={CodyMapOverview}
          alt="South Fork Shoshone River ice climbing overview map"
        />
      </a>
    </section>

    <section className="ice-map-description">
      <p>
        The South Fork of the Shoshone River, 35 miles southwest of Cody, Wyoming,
        is home to the highest concentration of frozen waterfalls in the continental
        United States.
      </p>
      <p>
        During a typical season there will be over 150 pitches of ice within a
        10-mile radius. When conditions are exceptional you can expect over 300
        pitches of ice.
      </p>
      <p>
        South Fork offers world-class multi-pitch ice climbing with generally low
        snow accumulations, making travel relatively easy compared to other North
        American ice climbing venues.
      </p>
      <p>
        With the high density of climbs and the relatively long drive to Cody from
        large population centers, the South Fork is rarely crowded and offers an
        intimate, remote climbing experience.
      </p>
    </section>

    <div className="ice-map-download-wrap">
      <a
        className="ice-map-download"
        href="https://cskaggs-google-earth-bucket-2017.s3.us-west-1.amazonaws.com/GE_Network_Link/Cody_V0p5.kmz"
      >
        Download Google Earth File (.kmz)
      </a>
    </div>

    <Footer />
  </div>
);

export default CodyIce;
