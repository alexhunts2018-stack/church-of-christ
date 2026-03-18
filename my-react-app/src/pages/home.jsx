import '../styles/styles.css'
import buildingImg from '../assets/imgs/building.avif'
import bibleImg from '../assets/imgs/Bible image.avif'
import radioImg from '../assets/imgs/radio.avif'
import cityImg from '../assets/imgs/city1.avif'
import video from '../../src/assets/imgs/video.mp4'
import { useInView } from "react-intersection-observer";
import Reveal from "../components/reveal";

export default function HomePage() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <div className="main">

        <div className="video-hero">
          <video autoPlay muted loop playsInline className="bg-video-2">
                  <source src={video} type="video/mp4" />
                </video>

          <div className="hero-content">

            <div className="overlay-text">
              <h3>Welcome to the Oxford Church of Christ</h3>
            </div>

            <Reveal className="container">
              <h2>“God is light; In him there is no darkness...”</h2>
              <p>[1 John 1:5]</p>

              <p>Please feel free to browse our website and visit the many links provided to help with your search for Jesus, or to grow your faith in the Saviour.

                           There are links to the British bible school and the wonderful array of biblical teaching, links to our material available via YouTube, and information on live feeds of Church of Christ services each Lord's day.

                           If you have any queries or questions then please drop us an email, or contact us via the phone numbers supplied.</p>
                    

            </Reveal>

          </div>
        </div>
      </div>

      <div className="background">
        <Reveal className="section-container">
          <h2>How to find us</h2>
          <div className="building">
            <div className="picture">
              <h3>Church Building</h3>
              <div className="media">
                <img src={buildingImg} alt="Church Building" />
              </div>
            </div>
            <div className="location">
              <h3>Our location</h3>
              <div className="media">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19763.428580985565!2d-1.2713829256835871!3d51.7434863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c146288e12fd%3A0x6ddcbb0a0dbcb94f!2sChurch%20of%20Christ!5e0!3m2!1sen!2suk!4v1765984904274!5m2!1sen!2suk"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location"
                ></iframe>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="background">
        <Reveal className="section-container">
          <h2>Exhortations (Sermon & Bible Study)</h2>
          <div className="building">
            <div className="picture">
              <h3>Sermon</h3>
              <div className="media">
                <a href="https://www.youtube.com/watch?v=S752Ru7zJ6Y">
                  <img src={bibleImg} alt="Sermon" />
                </a>
              </div>
            </div>
            <div className="location">
              <h3>Bible Study</h3>
              <div className="media">
                <a href="https://www.youtube.com/watch?v=EgmQ7M5GWYM">
                  <img src={bibleImg} alt="Bible Study" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="background">
        <Reveal className="section-container">
          <h2>Radio Station & Monuments</h2>
          <div className="building">
            <div className="picture">
              <h3>Radio Station</h3>
              <div className="media">
                <a href="https://myradiostream.com/station/flashplayer.php?s=s32&p=5190">
                  <img src={radioImg} alt="Radio Station" />
                </a>
              </div>
            </div>
            <div className="location">
              <h3>Monuments</h3>
              <div className="media">
                <a href="#">
                  <img src={cityImg} alt="Monuments" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      
    </>
  );
};



