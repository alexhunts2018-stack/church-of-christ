import "../styles/styles.css";
import video from "../../src/assets/imgs/coffee.mp4";
import video2 from "../../src/assets/imgs/train.mp4";
import Reveal from "../components/reveal";

export default function WhatsOn() {
  return (
    <div className="main">
      <div className="video-hero">
        <video autoPlay muted loop playsInline className="bg-video-2">
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="overlay-text">
            <h3>What's on</h3>
          </div>

          <Reveal className="container events-container">
            <section className="events-section">
              <div className="events-overlay">
                <div className="events-list">
                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">01</span>
                      <span className="month">Aug</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Coffee</span>
                          <br />
                          <span>morning</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>10:00 AM -</span>
                            <br />
                            <span>12:00 Noon</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>1a St. Mary's road</span>
                            <br />
                            <span>Oxford.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">05</span>
                      <span className="month">Sep</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Coffee</span>
                          <br />
                          <span>morning</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>10:00 AM -</span>
                            <br />
                            <span>12:00 Noon</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>1a St. Mary's road</span>
                            <br />
                            <span>Oxford.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">03</span>
                      <span className="month">Oct</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Coffee</span>
                          <br />
                          <span>morning</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>10:00 AM -</span>
                            <br />
                            <span>12:00 Noon</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>1a St. Mary's road</span>
                            <br />
                            <span>Oxford.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">6-8</span>
                      <span className="month">Oct</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Gospel</span>
                          <br />
                          <span>Campaign</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>10:00 AM -</span>
                            <br />
                            <span>12:00 Noon</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>1a St. Mary's road</span>
                            <br />
                            <span>Oxford.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>

      <div className="video-hero">
        <video autoPlay muted loop playsInline className="bg-video-2">
          <source src={video2} type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="overlay-text">
            <h3>What's on around the country.</h3>
          </div>

          <Reveal className="container events-container country-events-container">
            <section className="events-section country-events-section">
              <div className="events-overlay">
                <div className="events-list">
                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">04</span>
                      <span className="month">Mar</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <a
                          href="https://twitter.com/northamptoncoc/status/1629251565868515328?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Anorthamptoncoc%7Ctwcon%5Es1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h2>
                            <span>Bible study</span>
                            <br />
                            <span>weekend on</span>
                            <br />
                            <span>Timothy &amp;</span>
                            <br />
                            <span>Titus</span>
                          </h2>
                        </a>
                        <p className="event-note">Click above for more information.</p>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>09:30 AM -</span>
                            <br />
                            <span>16:00</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>Church of Christ</span>
                            <br />
                            <span>Shadowfax Drive</span>
                            <br />
                            <span>Northampton</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">05</span>
                      <span className="month">Mar</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Bible study</span>
                          <br />
                          <span>weekend on</span>
                          <br />
                          <span>Timothy &amp;</span>
                          <br />
                          <span>Titus</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>10:15 AM -</span>
                            <br />
                            <span>13:15</span>
                            <br />
                            <span>Includes</span>
                            <br />
                            <span>worship</span>
                            <br />
                            <span>service.</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>Church of Christ</span>
                            <br />
                            <span>Shadowfax Drive</span>
                            <br />
                            <span>Northampton</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="event-row">
                    <div className="event-date">
                      <span className="day">03</span>
                      <span className="month">Apr</span>
                    </div>

                    <div className="event-card">
                      <div className="event-title">
                        <h2>
                          <span>Bible seminar</span>
                          <br />
                          <span>Great Barr,</span>
                          <br />
                          <span>Birmingham</span>
                        </h2>
                      </div>

                      <div className="event-meta">
                        <div className="meta-block">
                          <div className="icon">◔</div>
                          <p>
                            <span>TBC</span>
                          </p>
                        </div>

                        <div className="divider"></div>

                        <div className="meta-block">
                          <div className="icon">⌖</div>
                          <p>
                            <span>Held in Great Barr.</span>
                            <br />
                            <span>Contact Sola on</span>
                            <br />
                            <span>sola.adeosun@gmail.com</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}