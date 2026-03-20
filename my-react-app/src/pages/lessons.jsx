import '../styles/styles.css'
import buildingImg from '../assets/imgs/building.avif'
import bibleImg from '../assets/imgs/Bible image.avif'
import radioImg from '../assets/imgs/radio.avif'
import cityImg from '../assets/imgs/city1.avif'
import video from '../../src/assets/imgs/Lessons.mp4'
import Reveal from "../components/reveal";
import { Link } from "react-router-dom";

export default function Lessons() {
  return (
    <>
      <div className="main">

        <div className="video-hero">
          <video autoPlay muted loop playsInline className="bg-video-2">
                  <source src={video} type="video/mp4" />
                </video>

          <div className="hero-content">

            <div className="overlay-text">
              <h3>Our lessons and teachings</h3>
            </div>

            <Reveal className="container">
              <div className="lessons-grid">
                    <div className="lesson-card">
                    <h2>
                        <a href="https://05deb2ca-50e4-4fab-95a7-dfa27d1e26e9.filesusr.com/ugd/6aa9c0_0e81a7d5ac2d4ab6bd2adf6437eb3a40.pdf">
                        Scheme of redemption.
                        <br />
                        Part One
                        </a>
                    </h2>
                    <p>Introduction to the Scheme of Redemption.</p>
                    </div>

                    <div className="lesson-card">
                    <h2>
                        <a href="/scheme-part-two">
                        Scheme of redemption.
                        <br />
                        Part Two.
                        </a>
                    </h2>
                    <p>
                        Change the text and make it your own.
                        <br />
                        Click here to begin editing.
                    </p>
                    </div>
                </div>

            </Reveal>

          </div>
        </div>
      </div>
    </>
  );
};