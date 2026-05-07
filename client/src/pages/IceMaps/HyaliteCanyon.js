import '../../css/IceMaps.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HyaliteMapOverview from '../../img/Hyalite_Overview_1.png';

const HyaliteCanyon = () => (
  <div className="ice-map-page">
    <Header />

    <section className="ice-map-hero">
      <h1 className="ice-map-title">Hyalite Canyon, MT</h1>
      <p className="ice-map-subtitle">Ice Climbing · Montana</p>
    </section>

    <section className="ice-map-image-wrap">
      <a href={HyaliteMapOverview} target="_blank" rel="noopener noreferrer">
        <img
          className="ice-map-image"
          src={HyaliteMapOverview}
          alt="Hyalite Canyon ice climbing overview map"
        />
      </a>
    </section>

    <section className="ice-map-description">
      <p>
        Hyalite Canyon is a world-class ice climbing destination located 15 miles
        southeast of Bozeman, MT.
      </p>
      <p>
        Many world-class climbers have honed their skills in this canyon and taken
        what they learned in Hyalite and applied it to first ascents all over the
        world.
      </p>
      <p>
        The climbs in Hyalite are mostly single-pitch routes, but a handful of
        world-class multi-pitch routes dot the canyon.
      </p>
      <p>
        In the last few years, a renewed focus on multi-pitch climbing and the
        growing popularity of mixed climbing have added upper pitches to previously
        single-pitch climbs.
      </p>
      <p>
        With the growth in ice climbing over the last decade, Hyalite Canyon is
        likely second only to Ouray Ice Park in terms of popularity — but the
        canyon absorbs the crowds well and still offers an intimate climbing
        experience to those willing to walk a little further.
      </p>
    </section>

    <div className="ice-map-download-wrap">
      <a
        className="ice-map-download"
        href="https://cskaggs-google-earth-bucket-2017.s3.us-west-1.amazonaws.com/GE_Network_Link/Hyalite_Canyon_V2p3.kmz"
      >
        Download Google Earth File (.kmz)
      </a>
    </div>

    <Footer />
  </div>
);

export default HyaliteCanyon;
