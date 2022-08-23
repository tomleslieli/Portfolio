import React, { useRef, useState, useEffect } from "react";
import TransitionBackground from "./svgs/transition-background.jsx";
import "../assets/stylesheets/video.scss";
import PipesPipes from "./svgs/pipes-pipes.jsx";
import PipesLevers from "./svgs/pipes-levers.jsx";
import PipesWall from "./svgs/pipes-wall.jsx";
import PipesWallDot from "./svgs/pipes-wall-dot.jsx";

function Video() {
  const [currentVideo, setCurrentVideo] = useState("phonyppl");
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const videos = {
    tobeginagain:
      "https://tomleslieli-portfolio.s3.amazonaws.com/ingrid_michaelson%2C_zayn_-_to_begin_again_(official_video)+(1080p).mp4",
    phonyppl:
      "https://tomleslieli-portfolio.s3.amazonaws.com/Phony_Ppl_-_On_My_Shit_(feat._Joey_Bada%24%24).mp4",
    axtone:
      "https://tomleslieli-portfolio.s3.amazonaws.com/Axtone_Miami_2018+(1).mp4",
    athletix:
      "https://tomleslieli-portfolio.s3.amazonaws.com/Athletix_CBD_-_Jim_Miller.mp4",
  };

  const video = document.querySelector(".video-project");

  useEffect(() => console.log("Video Mounted"), []);

  useEffect(() => {
    if (video) {
      if (!video.muted) {
        video.muted = true;
      } else {
        video.muted = false;
      }
    }
  }, [isMuted]);

  return (
    <>
      <div className="transition-container">
        <div className="transition-layer">
          <TransitionBackground />
        </div>
      </div>
      <div className="video-projects">
        <div className="video-projects-header">
          {/* <h1>Video Production</h1> */}
        </div>
        <div className="open-side-bar-container">
          <div className="open-side-bar">
            {sideBarOpen ? (
              <></>
            ) : (
              <>
                <i class="fa-solid fa-caret-up"></i>
                <h5 onClick={() => setSideBarOpen(true)}>SHOW SIDEBAR</h5>
                <i class="fa-solid fa-caret-up"></i>
              </>
            )}
          </div>
        </div>
        {sideBarOpen ? (
          <div className="video-controller">
            <div className="trans-bar"></div>
            <div className="video-production-title">
              {/* <h1>VIDEO PRODUCTION</h1> */}
            </div>
            <button
              className="video-button"
              onClick={() => setCurrentVideo("phonyppl")}
            >
              <img
                src="https://tomleslieli-portfolio.s3.amazonaws.com/phony-ppl.png"
                alt="phony-ppl-logo"
              />
            </button>
            <button
              className="video-button"
              onClick={() => setCurrentVideo("tobeginagain")}
            >
              <img
                src="https://tomleslieli-portfolio.s3.amazonaws.com/tobeginagain.png"
                alt="to-begin-again"
              />
            </button>
            <button
              className="video-button"
              onClick={() => setCurrentVideo("athletix")}
            >
              <img
                src="https://tomleslieli-portfolio.s3.amazonaws.com/athletix.png"
                alt="athletix-logo"
              />
            </button>
            <button
              className="video-button"
              onClick={() => setCurrentVideo("axtone")}
            >
              <img
                src="https://tomleslieli-portfolio.s3.amazonaws.com/axtone.png"
                alt="axtone-logo"
              />
            </button>
            <button
              className="mute-button"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? (
                <i
                  id="caret-one"
                  className="fa-solid fa-volume-xmark fa-xl"
                ></i>
              ) : (
                <i className="fa-solid fa-volume-high fa-xl"></i>
              )}
            </button>
            <div className="close-side-bar">
              <h5 onClick={() => setSideBarOpen(false)}>HIDE SIDEBAR</h5>
            </div>
          </div>
        ) : (
          <></>
        )}
        <video
          className="video-project"
          key={videos[currentVideo]}
          autoPlay
          loop
          muted
          preload="auto | metadata | none"
          poster="https://tomleslieli-portfolio.s3.amazonaws.com/video-default.png"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
      </div>
      <div className="hobbies-transition">
        <PipesPipes />
      </div>
      <div className="hobbies-transition">
        <PipesLevers />
      </div>
      <div className="hobbies-transition">
        <PipesWall />
      </div>
      <div className="hobbies-transition">
        <PipesWallDot />
      </div>
    </>
  );
}

export default Video;
