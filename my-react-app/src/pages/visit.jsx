import "../styles/styles.css";
import Reveal from "../components/reveal";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Visit() {
  const position = [51.7446, -1.2326];
  return (
    <>
      <div className="main">
        <div className="d-pic">
          <div className="overlay-text">
            
          </div>
          <div className="container-b">
          <Reveal>
            <h1>Visit us</h1>
                <div className="info-grid">
                    <div className="info-block services">
                    <h2>Services:</h2>
                    <div className="accent-line"></div>

                    <p className="intro">
                        We meet each Lord&apos;s day to worship the Lord, and to
                        break bread in the memory of our Saviour Jesus Christ.
                    </p>

                    <div className="accent-line lower"></div>

                    <p className="details">
                        Every Sunday-
                        <br />
                        Bible class: 10am
                        <br />
                        Worship service 11am
                        <br />
                        Thursday bible class 7pm on zoom. Details on request
                        <br />
                        1st &amp; 3rd Tuesdays of the month. Coffee morning 10am -12 Noon
                    </p>
                    </div>

                    <div className="right-column">
                    <div className="info-block">
                        <h2>Contact Us</h2>
                        <div className="accent-line"></div>
                        <p className="details">
                        Tel: 07827744180
                        <br />
                        oxfordchurchofchrist@yahoo.com
                        </p>
                    </div>

                    <div className="info-block address-block">
                        <h2>Address</h2>
                        <div className="accent-line"></div>
                        <p className="details">
                        1a St. Mary&apos;s road
                        <br />
                        Oxford.
                        <br />
                        OX4 1PX
                        </p>
                    </div>
                    </div>
                </div>
                  <div className="map" style={{ width: "100%", height: "400px" }}>
                        <MapContainer
                            center={position}
                            zoom={13}
                            scrollWheelZoom={false}
                            style={{ width: "100%", height: "100%" }}
                        >
                            <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                            <Popup>
                                1a St. Mary&apos;s Road, Oxford
                            </Popup>
                            </Marker>
                        </MapContainer>
                  </div>
                </Reveal>
                </div>
        </div>
      </div>
    
    </>
  );
}