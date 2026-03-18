import "../styles/styles.css";
import Reveal from "../components/reveal";

export default function Videos() {

  
  return (
  <>
  <div className="main">
      
                <div className="v-pic">
      
                  <div className="overlay-text">
                    <h3>Latest videos available</h3>
                  </div>
      
                  <Reveal className="container">
                    <p>Below you will find the latest videos produced by Oxford Church of Christ, and some videos that we are promoting.

Please click on any of the video that you are interested in. You will then be taken to the video which will either be on this site or on YouTube.</p>
  
                  </Reveal>
      
                </div>
              </div>

              <section class="tour-section">
                    <div class="tour-row">
                        <div class="tour-media">
                        <iframe
                            src="https://www.youtube.com/embed/ZI4pfwCHwg8"
                            title="Tour of the Ashmolean Part 1"
                            allowfullscreen
                        ></iframe>
                        </div>

                        <div class="tour-text">
                        <span class="tour-number">01</span>
                        <h2>Tour of the Ashmolean. Pt 1</h2>
                        <p>
                            Tour of the Ashmolean in Oxford showing biblical artifacts as well as
                            many items that are in time and style related to biblical times.
                        </p>
                        <p>
                            This is part one, part two can be found below.
                        </p>
                        <p>
                            The tour was conducted by James Greig on behalf of Oxford Church of Christ.
                        </p>
                        </div>
                    </div>

                    <div class="tour-row reverse">
                        <div class="tour-media">
                        <iframe
                            src="https://www.youtube.com/embed/KpWg3crxfV0"
                            title="Tour of the Ashmolean Part 2"
                            allowfullscreen
                        ></iframe>
                        </div>

                        <div class="tour-text">
                        <span class="tour-number">02</span>
                        <h2>Tour of the Ashmolean. Pt 2</h2>
                        <p>
                            Tour of the Ashmolean in Oxford showing biblical artifacts as well as
                            many items that are in time and style related to biblical times.
                        </p>
                        <p>
                            This is part two, part one can be found above.
                        </p>
                        <p>
                            The tour was conducted by James Greig on behalf of Oxford Church of Christ.
                        </p>
                        </div>
                    </div>
                    <div class="tour-row">
                        <div class="tour-media">
                        <iframe
                            src="https://www.youtube.com/embed/N6DICo2UCVQ"
                            title="Congregational singing led by Keith Lancaster"
                            allowfullscreen
                        ></iframe>
                        </div>

                        <div class="tour-text">
                        <span class="tour-number">03</span>
                        <h2>Congregational singing led by Keith Lancaster</h2>
                        <p>
                            Congregational singing led by brother Keith Lancaster. Keith is a singer, songwriter,composer, producer and executive at The Acappella Company in Tennessee. Keith is a member of the Church of Christ in Alabama. You can read about Keith here

This was filmed in the United States of America
                        </p>
                        
                        </div>
                    </div>

                    <div class="tour-row reverse">
                        <div class="tour-media">
                        <img src="../../src/assets/imgs/video-img.avif" />
                        </div>

                        <div class="tour-text">
                        <span class="tour-number">04</span>
                        <h2>British Museum tour.</h2>
                        <p>
                            Tour of the British Museum in London, conducted by Patrick Boyns from the British Bible School.
                        </p>
                        </div>
                    </div>
                    </section>

  </>   
  );
}