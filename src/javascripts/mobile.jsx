import React, { useState } from "react";
import "../assets/stylesheets/mobile.scss";

function Mobile() {
  const [resizeNotice, setResizeNotice] = useState(true);

  return (
    <>
      <div className="mobile-container">
        <div className="mobile-contents">
          {resizeNotice ? (
            <div className="mobile-item" id="runs-best">
              <div className="close-mobile-button">
                <i
                  onClick={() => setResizeNotice(false)}
                  className="fa-solid fa-circle-xmark"
                ></i>
              </div>
              <h6 id="sixteennine">
                This experience runs best in a 16x9 enviornment.
              </h6>
              <h6>Please open this site in a browser / resize your window.</h6>
            </div>
          ) : (
            <></>
          )}
          <div className="mobile-item">
            <h1>Tom Leslie Li</h1>
            <h4>Software Engineer / Video Editor / Producer</h4>
          </div>
          <div className="mobile-item">
            <h2>About</h2>
            <h5>
              I'm a software engineer / video editor / producer from NYC. I
              produce music in my spare time & will never miss out on an
              opportunity to go backpacking, climbing or snowboarding.
            </h5>
          </div>
          <div className="mobile-item">
            <h2>Skills</h2>
            <h5>
              React.js, Redux, JavaScript, HTML5, CSS3, Node.js, Ruby, Rails 5,
              PostGreSQL, Express, MongoDB, Git, Adobe Creative Suite.
            </h5>
          </div>
          <div className="mobile-item">
            <h2>Projects</h2>
            <h3>BeatBox</h3>
            <h5>
              Built entirely in vanilla JavaScript, BeatBox is a four-channel
              audio mixing interface that allows users to load and manipulate
              tracks with features such as loops and hotcues.
            </h5>
            <div className="mobile-links-container">
              <a
                href="https://tomleslieli.github.io/BeatBox"
                className="mobile-link"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/tomleslieli/BeatBox"
                className="mobile-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <h3>Roobinhüd</h3>
            <h5>
              Roobinhüd is a (Robinhood clone) stock trading application that
              allows users to view / trade stocks with real time data and price
              charts.
            </h5>
            <div className="mobile-links-container">
              <a
                href="https://roobinhud.herokuapp.com"
                className="mobile-link"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/tomleslieli/Roobinhud"
                className="mobile-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <h3>LineAlert</h3>
            <h5>
              LineAlert is a NYC-based subway alert application where users can
              create live alerts to notify other users of subway hazards,
              delays, and other suspicious activity.
            </h5>
            <div className="mobile-links-container">
              <a
                href="https://aa-linealert.herokuapp.com/"
                className="mobile-link"
                target="_blank"
                rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/leochung97/LineAlert"
                className="mobile-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mobile-item">
            <h2>Videos</h2>
            <a
              href="https://vimeo.com/490636317"
              target="_blank"
              className="mobile-link"
            >
              <h4 id="phony-mobile">
                Phony Ppl - On My Shit (feat. Joey Bada$$) - Behind the Scenes
              </h4>
            </a>
            <a
              href="https://vimeo.com/538925669"
              target="_blank"
              className="mobile-link"
            >
              <h4>
                Ingrid Michaelson, ZAYN - To Begin Again (Official Music Video)
              </h4>
            </a>
            <a
              href="https://vimeo.com/351079177"
              target="_blank"
              className="mobile-link"
            >
              <h4>Athletix CBD - Jim Miller</h4>
            </a>
            <a
              href="https://vimeo.com/275677750"
              target="_blank"
              className="mobile-link"
            >
              <h4>Axtone Miami 2018</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
