import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Contact.css';

const AltitudeMarker = ({ label }) => (
  <div className="contact-altitude-marker">
    <span className="contact-altitude-line" />
    <span className="contact-altitude-label">{label}</span>
  </div>
);

const Contact = () => (
  <div className="page-contact">
    <Header />

    <section className="contact-section">
      <AltitudeMarker label="CONTACT" />
      <h1 className="contact-page-title">Get in touch.</h1>

      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-card-label">Email</div>
          <a
            href="mailto:clayton.skaggs89@gmail.com"
            className="contact-card-value"
          >
            clayton.skaggs89@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-label">Location</div>
          <span className="contact-card-value">Phoenix, AZ</span>
          <span className="contact-card-sub">MST Year-Round</span>
        </div>

        <div className="contact-card">
          <div className="contact-card-label">GitHub</div>
          <a
            href="https://github.com/DesertCow"
            className="contact-card-value"
          >
            @DesertCow
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contact;
