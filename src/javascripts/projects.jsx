import React, { useState } from "react";
import "../assets/stylesheets/projects.scss";
import ProjectsWindowBackground from "./svgs/projects-window-background.jsx";
import ProjectsWindowButtons from "./svgs/projects-window-buttons.jsx";
import ProjectsWindowFrame from "./svgs/projects-window-frame.jsx";
import ProjectsWindowFrameBack from "./svgs/projects-window-frame-back.jsx";

function Projects() {
  const [currentVideo, setCurrentVideo] = useState("default");

  const videos = {
    default: "https://tomleslieli-portfolio.s3.amazonaws.com/default.mp4",
    beatbox: "https://tomleslieli-portfolio.s3.amazonaws.com/beatbox.mp4",
    roobinhud: "https://tomleslieli-portfolio.s3.amazonaws.com/roobinhud.mp4",
    linealert: "https://tomleslieli-portfolio.s3.amazonaws.com/linealert.mp4",
  };

  return (
    <>
      <div className="projects-header">
        <h1>Software Engineering</h1>
      </div>
      <div className="projects-container">
        <div className="projects-left" id="projects-left">
          <div className="projects-left-left">
            <div className="project-title">
              {currentVideo === "roobinhud" ? (
                <img
                  className="window-logo"
                  id="roobinhud-logo"
                  src="https://robinhood-clone-assets.s3.amazonaws.com/logo_full_white.png"
                  alt="roobinhud-logo"
                ></img>
              ) : (
                <></>
              )}
              {currentVideo === "linealert" ? (
                <img
                  className="window-logo"
                  id="linealert-logo"
                  src="https://linealert-assets.s3.amazonaws.com/linealert_logo_full.png"
                  alt="linealert-logo"
                ></img>
              ) : (
                <></>
              )}
              {currentVideo === "beatbox" ? (
                <img
                  className="window-logo"
                  id="beatbox-logo"
                  src="https://tomleslieli.github.io/BeatBox/assets/images/BEATBOXLOGO.png"
                  alt="beatbox-logo"
                ></img>
              ) : (
                <></>
              )}
            </div>
            <div className="video-window">
              <div className="video-container" id="video-container">
                <video
                  key={videos[currentVideo]}
                  autoPlay
                  loop
                  muted
                  preload="auto | metadata | none"
                  poster="https://tomleslieli-portfolio.s3.amazonaws.com/placeholder.png"
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                </video>
              </div>
              <div className="projects-window" id="projects-window-background">
                <ProjectsWindowBackground />
              </div>
              <div className="projects-window" id="projects-window-frame-back">
                <ProjectsWindowFrameBack />
              </div>
              <div className="projects-window" id="projects-window-frame">
                <ProjectsWindowFrame />
              </div>
              <div
                onClick={() => setCurrentVideo("rick")}
                className="projects-window"
                id="projects-window-button"
              >
                <ProjectsWindowButtons />
              </div>
            </div>
            <div className="video-demo-instructions">
              {currentVideo === "default" ? (
                <h6>Select a project for a video demo.</h6>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="timeline-line">
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("beatbox")}
          />
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("roobinhud")}
          />
          <div
            className="timeline-marker"
            onClick={() => setCurrentVideo("linealert")}
          />
        </div>
        <div className="projects-right">
          <div className="project-container">
            <div className="project-info">
              <h3 onClick={() => setCurrentVideo("beatbox")}>BeatBox</h3>
              <p>
                {" "}
                Built entirely in vanilla JavaScript, BeatBox is a four-channel
                audio mixing interface that allows users to load and manipulate
                tracks with features such as loops and hotcues.{" "}
              </p>
              <div className="project-links">
                <a
                  href="https://tomleslieli.github.io/BeatBox"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/tomleslieli/BeatBox"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="project-info">
              <h3 onClick={() => setCurrentVideo("roobinhud")}>Roobinhüd</h3>
              <p>
                Roobinhüd is a (Robinhood clone) stock trading application that
                allows users to view / trade stocks with real time data and
                price charts.
              </p>
              <div className="project-links">
                <a href="https://roobinhud.onrender.com" 
                target="_blank"
                rel="noreferrer">
                  Live Link
                </a>
                <a
                  href="https://github.com/tomleslieli/Roobinhud"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div className="project-info">
              <h3 onClick={() => setCurrentVideo("linealert")}>LineAlert</h3>
              <p>
                LineAlert is a NYC-based subway alert application where users
                can create live alerts to notify other users of subway hazards,
                delays, and other suspicious activity.
              </p>
              <div className="project-links">
                <a
                  href="https://aa-linealert.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/leochung97/LineAlert"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
