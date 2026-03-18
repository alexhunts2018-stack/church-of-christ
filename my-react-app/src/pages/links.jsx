import Reveal from "../components/reveal";
import stream from "../../src/assets/imgs/stream.mp4";

export default function Links() {

  return (
    <div className="video-hero-2">
      <video autoPlay muted loop playsInline className="bg-video-2">
        <source src={stream} type="video/mp4" />
      </video>

      <div className="hero-inner">
        <Reveal>
          <div className="container">
            <h1>Below are links to sites that you may also be interested in.</h1>
            <section className="tour-section-2">
              <div className="tour-row">
                <div className="tour-media">
                  <p>Clicking on the icons will take you to our Facebook, Youtube or Twitter page depending on which one you click.</p>
                </div>

                <div className="tour-text">
                  <a href="https://www.facebook.com/profile.php?id=100091498353465"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://www.youtube.com/@oxfordchurchofchrist"><i className="fa-brands fa-youtube"></i></a>
                  <a href="https://x.com/oxford_church1"><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>

              <div className="tour-row">
                <div className="tour-media">
                  <h2>British Bible School.</h2>
                  <p>
                    Click on the home icon to access the British Bible School website.
                  </p>
                </div>

                <div className="tour-text">
                  <span className="tour-number"></span>
                  <a href="https://britishbibleschool.com/"><i class="fa-solid fa-house"></i></a>
                  
                </div>
              </div>
              <div className="tour-row">
                <div className="tour-media">
                    <h2>Worship service live stream</h2>
                  <p>
                    You can join in with the live stream of the Northampton Church of Christ Sunday morning service by clicking on the button below.

The live stream begins just before 10:30am.
                  </p>
                  
                </div>

                <div className="tour-text">
                  <span className="tour-number"></span>
                  <a href="https://www.youtube.com/@northamptonchurchofchrist1818/streams"><button class="icon-btn"><i class="fa-solid fa-house"></i></button></a>
                </div>
                </div>
                <div className="tour-row">
                <div className="tour-media">
                   <p>The purpose of the Leicester Bible Institute is to equip the saints for the work of ministry and the building up of the church (Ephesians 4:12).</p>
                  
                </div>

                <div className="tour-text">
                 <a
                     href="https://www.ukbibible.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="button"
                >
                   Leicester Bible Institute
                </a>
                    </div>
                </div>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
}