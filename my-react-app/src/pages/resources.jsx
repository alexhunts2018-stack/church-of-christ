import "../styles/styles.css";
import Reveal from "../components/reveal2";
import video from "../../src/assets/imgs/clouds.mp4";

export default function Resources() {
  const resources = [
    {
      title: "Church directory",
      text: "Click on the directory button below for a list of the churches of Christ in the United Kingdom.",
      image: "../../src/assets/imgs/churches-directory.avif",
      button: "Church directory",
      link: "https://www.churchesofchrist.co.uk/welcome/",
    },
    {
      title: "Bible study tools",
      text: "Clicking the button below will take you to a website for free bible study books, correspondence courses, sermons, and videos designed to help you understand the Bible.",
      image: "../../src/assets/imgs/bible-study-tools.avif",
      button: "Click here for Bible hub",
      link: "https://biblehub.com/",
    },
    {
      title: "Maps of the lands of the bible",
      text: "Clicking on the button below will take you to a site with bible maps and illustrations for study and teaching.",
      image: "../../src/assets/imgs/Bible-map.avif",
      button: "Click here for maps",
      link: "https://www.knowingthebible.net/bible-maps",
    },
    {
      title: "World Bible School",
      text: "The World Bible School is a way of learning the gospel. It is made up of over 2000 free online bible study lessons and is designed for all ages.",
      image: "../../src/assets/imgs/WBS-Logo.avif",
      button: "Enquire now",
      link: "https://worldbibleschool.org/",
    },
    {
      title: "Church of Christ Radio",
      text: "The Church of Christ Radio is a station of the Church of Christ in Arlington, made for worshipful music and bible teaching.",
      image: "../../src/assets/imgs/radio.avif",
      button: "Listen now",
      link: "https://myradiostream.com/station/flashplayer.php?s=s32&p=5190",
    },
    {
      title: "Freed Hardeman University",
      text: "Freed-Hardeman University is based in the United States and offers education from a Christian perspective.",
      image: "../../src/assets/imgs/freed-hardeman.avif",
      button: "F.H.U",
      link: "https://fhu.edu/",
    },
    {
      title: "Leicester Bible Institute",
      text: "This programme offers bible study support and training for those who want deeper scriptural understanding.",
      image: "../../src/assets/imgs/Leicester-Bible-Institute.avif",
      button: "L.B.I",
      link: "https://www.ukbibible.com/",
    },
  ];

  return (
    <div className="main">
      <div className="video-hero">
        <video autoPlay muted loop playsInline className="bg-video-2">
          <source src={video} type="video/mp4" />
        </video>

        <div className="hero-content">
          <Reveal>
            <div className="container">
              <h2 style={{ padding: "5px 0px" }}>
                Additional links to resources that you may find helpful in your
                search for the truth, or to deepen your understanding of the
                word of God.
              </h2>

              <p>
                Below you will find links to biblical resources as well as
                details of your nearest Church of Christ wherever you live in
                the UK, along with their contact details.
              </p>

              <p>
                Here you will also find links to bible study resources that you
                may find helpful as you study the scriptures.
              </p>

              <p>
                We do not own or operate these other resources, they are offered
                to you as a means of making bible study easier, more enjoyable
                and meaningful.
              </p>

              <p style={{ paddingBottom: "20px" }}>
                We trust that the Lord God will bless you as you study his word.
              </p>

              <div className="resource-container">
                {resources.map((item, index) => (
                  <div
                    className={`resource-row ${
                      index % 2 !== 0 ? "reverse" : ""
                    }`}
                    key={index}
                  >
                    <div className="resource-text">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                      <a href={item.link} className="resource-btn">
                        {item.button}
                      </a>
                    </div>

                    <div className="resource-image-wrap">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="resource-image"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}