import "../styles/styles.css";
import Reveal from "../components/reveal2";
import video from "../../src/assets/imgs/clouds.mp4";

import ashmoleanImg from "../../src/assets/imgs/ashmoleanmuseumoxford.avif";
import pittRiversImg from "../../src/assets/imgs/pitt-rivers-logo-white.avif";
import naturalHistoryImg from "../../src/assets/imgs/musumofnaturalhistory.avif";
import botanicImg from "../../src/assets/imgs/oxfordbotanicgarden.avif";
import historyScienceImg from "../../src/assets/imgs/historyofsciencemuseum'.avif";
import canalWalkImg from "../../src/assets/imgs/riverandcanal.avif";
import castleImg from "../../src/assets/imgs/Oxford_Castle_&_Prison_LOGO_grey.avif";
import walkingToursImg from "../../src/assets/imgs/oxfordbustour.avif";

export default function ThingsToSeee() {
  return (
    <div className="main">
      <div className="video-hero">
        <video autoPlay muted loop playsInline className="bg-video-2">
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero-content">
        
                    <div className="overlay-text">
                      <h3>Things to see and do in Oxford</h3>
                    </div>
        
                    <Reveal className="container">
                      Oxford, known affectionately as "The City of Dreaming Spires" is one of the most beautiful and historic cities in England.

It is one of the most important places of learning, not just in the UK - but in the world, having been involved in teaching since the 9th century.

Few other places have the heritage of learning that is attached to Oxford, and a vibrant student life is evident all around.

Oxford however is much more than just universities and colleges, it is full of history and has some beautiful architecture. There are walks along the Oxford canal, as well as the river Thames. There are museums like the Ashmolean and the natural history museum.

There are walks and tours celebrating the likes of JR Tolkien, CS Lewis, Oscar Wilde and the many other Oxford luminaries.

Oxford is also renowned as a major filming location: it is of course the home to the TV series' "Inspector Morse" as well as the spin-offs "Lewis" and Endeavour". Oxford is also famous the world over for it's association with Harry Potter, and has been a filming location for numerous films like "Brideshead revisited", "Tomorrow never dies", "The Saint", "101 Dalmations" and many more.

Whatever it is you want to see and do, however much time you have to spare, there is something for you to see and do in Oxford.

Below are some suggestions as a visitor to Oxford that you might be interested in, simply click on the relevant box for further information.
                    </Reveal>
        
                  </div>

        <div className="hero-content">
          <Reveal>
            <div className="oxford-page">
              <div className="overlay" />

              <div className="canvas">
                <a
                  href="https://theoxfordmagazine.com/directory/universities-colleges/"
                  className="card top-magazine"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="small-text">
                    For a list of Universities and Colleges in Oxford
                    <br />
                    please click "The Oxford Magazine"
                  </p>
                  <div className="magazine-link">The Oxford Magazine_</div>
                </a>

                <a href="https://www.ashmolean.org/" className="card logo-card ashmolean">
                  <img src={ashmoleanImg} alt="Ashmolean Museum Oxford" />
                </a>

                <a href="https://www.prm.ox.ac.uk/" className="card logo-card pitt-rivers">
                  <img src={pittRiversImg} alt="Pitt Rivers Museum" />
                </a>

                <a href="https://www.oumnh.ox.ac.uk/" className="card logo-card natural-history">
                  <img
                    src={naturalHistoryImg}
                    alt="Museum of Natural History"
                  />
                </a>

                <a href="https://www.botanic-garden.ox.ac.uk/" className="card logo-card botanic">
                  <img
                    src={botanicImg}
                    alt="Oxford Botanic Garden & Arboretum"
                  />
                </a>

                <a href="https://hsm.ox.ac.uk/" className="card logo-card history-science">
                  <img
                    src={historyScienceImg}
                    alt="History of Science Museum"
                  />
                </a>

                <a href="https://www.oxford.gov.uk/waterway-walking-cycling-routes/oxford-canal-walking-cycling-routes" className="card photo-card canal-walk">
                  <div className="photo-header">
                    For information on river and canal walks in Oxford click on
                    the image below.
                  </div>
                  <img src={canalWalkImg} alt="Oxford canal walk" />
                </a>

                <a href="https://www.oxfordcastleandprison.co.uk/" className="card castle-card">
                  <img src={castleImg} alt="Oxford Castle & Prison" />
                </a>

                <a href="https://www.experienceoxfordshire.org/venue/city-sightseeing-bus-oxford/" className="card photo-card walking-tours">
                  <div className="photo-header">
                    For information regarding walking tours and the Oxford tour
                    bus, click below
                  </div>
                  <img src={walkingToursImg} alt="Oxford walking tours" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}