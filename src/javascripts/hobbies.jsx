import React, { useState, useEffect } from "react";
import "../assets/stylesheets/hobbies.scss";
import Blue from "./svgs/blue.jsx";
import DarkRed from "./svgs/dark-red.jsx";
import LightRed from "./svgs/light-red.jsx";
import ItemsSnowboard from "./svgs/items-snowboard.jsx";
import ItemsClimbing from "./svgs/items-climbing.jsx";
import ItemsMusic from "./svgs/items-music.jsx";
import ItemsPhotos from "./svgs/items-photos.jsx";
import Orange from "./svgs/orange.jsx";
import WhiteBottom from "./svgs/white-bottom.jsx";
import WhiteTop from "./svgs/white-top.jsx";
import WhiteMid from "./svgs/white-mid.jsx";

function Hobbies() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [allArr, setAllArr] = useState([]);
  const [allClicked, setAllClicked] = useState(false);

  useEffect(() => {
    if (selectedItem === "items-photos" && !allArr.includes("items-photos")) {
      setAllArr((oldArr) => [...oldArr, "items-photos"]);
    }
    if (selectedItem === "items-music" && !allArr.includes("items-music")) {
      setAllArr((oldArr) => [...oldArr, "items-music"]);
    }
    if (
      selectedItem === "items-climbing" &&
      !allArr.includes("items-climbing")
    ) {
      setAllArr((oldArr) => [...oldArr, "items-climbing"]);
    }
    if (
      selectedItem === "items-snowboard" &&
      !allArr.includes("items-snowboard")
    ) {
      setAllArr((oldArr) => [...oldArr, "items-snowboard"]);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (
      allArr.includes("items-photos") &&
      allArr.includes("items-music") &&
      allArr.includes("items-climbing") &&
      allArr.includes("items-snowboard")
    ) {
      setAllClicked(true);
    }
  }, [allArr]);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem === "items-snowboard") {
        const orange = document.getElementById("orange");
        orange.style.opacity = "100%";
        orange.style.display = "block";
      }
      if (selectedItem === "items-photos") {
        const whiteTop = document.getElementById("white-top");
        whiteTop.style.opacity = "100%";
        whiteTop.style.display = "block";
      }
      if (selectedItem === "items-music") {
        const whiteMid = document.getElementById("white-mid");
        whiteMid.style.opacity = "100%";
        whiteMid.style.display = "block";
      }
      const currentTarget = document.getElementById(`${selectedItem}`);
      currentTarget.style.opacity = "100%";
      currentTarget.style.display = "block";
    }
  }, [selectedItem]);

  return (
    <>
      <div className="hobbies-left">
        <div className="thank-you-container">
          {allClicked ? (
            <>
              <div className="thank-you">
                <h3>Thank you for visiting my portfolio!</h3>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div id="blue" className="hobbies-layer">
          <Blue />
        </div>
        <div id="dark-red" className="hobbies-layer">
          <DarkRed />
        </div>
        <div id="light-red" className="hobbies-layer">
          <LightRed />
        </div>
        <div id="items-snowboard" className="hobbies-layer items">
          <ItemsSnowboard />
        </div>
        <div id="items-climbing" className="hobbies-layer items">
          <ItemsClimbing />
        </div>
        <div id="items-music" className="hobbies-layer items">
          <ItemsMusic />
        </div>
        <div id="items-photos" className="hobbies-layer items">
          <ItemsPhotos />
        </div>
        <div id="orange" className="hobbies-layer items">
          <Orange />
        </div>
        <div id="white-bottom" className="hobbies-layer">
          <WhiteBottom />
        </div>
        <div id="white-top" className="hobbies-layer">
          <WhiteTop />
        </div>
        <div id="white-mid" className="hobbies-layer">
          <WhiteMid />
        </div>
      </div>
      <div className="hobbies-right">
        <div className="hobbies-buttons">
          <button onClick={() => setSelectedItem("items-photos")}>
            <i class="fa-solid fa-camera fa-xl"></i>
          </button>
          <button onClick={() => setSelectedItem("items-music")}>
            <i class="fa-brands fa-soundcloud fa-xl"></i>
          </button>
          <button onClick={() => setSelectedItem("items-climbing")}>
            <i class="fa-solid fa-mountain fa-xl"></i>
          </button>
          <button onClick={() => setSelectedItem("items-snowboard")}>
            <i class="fa-solid fa-person-snowboarding fa-xl"></i>
          </button>
          <div className="placeholder" />
        </div>
        <div className="hobbies-descriptions-text">
          {selectedItem === "items-photos" ? (
            <>
              <div className="photos-text">
                <div className="photos-text-title">
                  <h2>Photography</h2>
                </div>
                <h5 className="border-box">
                  Although I consider myself a hobbyist when it comes to
                  photography, I love to capture moments from my adventures.
                </h5>
                <h6 className="border-box">
                  There's a type of beauty in our ability to tell a story
                  through still moments - forever frozen in time.
                </h6>
              </div>
            </>
          ) : (
            <></>
          )}
          {selectedItem === "items-climbing" ? (
            <>
              <div className="photos-text">
                <div className="photos-text-title">
                  <h2 id="climbing-title">Backpacking / Climbing</h2>
                </div>
                <h5 className="border-box">
                  I've always had an affinity for the great outdoors. Here are
                  some of my favorite hikes:
                </h5>
                <h6 className="border-box" id="climbing-bullets">
                  - Pemigewasset Loop, White Mountains, New Hampshire (31 mi)
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Havasu Falls, Supai, Arizona (20 mi)
                </h6>
                <h6 className="border-box">
                  I currently climb V4-5 in the gym (GP81) & recently made the
                  transition to lead climbing / belaying. Here are some of my
                  favorite outdoor spots:
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - New River Gorge, West Virginia, USA
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Joshua Tree, California, USA
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Bunyola, Mallorca, Spain
                </h6>
              </div>
            </>
          ) : (
            <></>
          )}
          {selectedItem === "items-snowboard" ? (
            <>
              <div className="photos-text">
                <div className="photos-text-title">
                  <h2>Snowboarding</h2>
                </div>
                <h5 className="border-box">
                  Hitting the slopes is hands down one of my favorite pastimes
                  during the winter.
                </h5>
                <h6 className="border-box">
                  I would categorize myself as an intermediate snowboarder & you
                  can usually find me trying jumps at the terrain park.
                </h6>
                <h6 className="border-box">
                  Here are some of my favorite resorts:
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Northstar (Lake Tahoe), California, USA
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Mont Tremblant, Québec, Canada
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Park City, Utah, USA
                </h6>
                <h6 className="border-box" id="climbing-bullets">
                  - Vail, Colorado, USA
                </h6>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="hobbies-descriptions">
          {selectedItem === null ? (
            <>
              <div className="items-item">
                <div className="music-text" id="hobbies-text">
                  <h2>Hobbies</h2>
                  <h3>
                    Over the years, I've accumulated a handful of interests &
                    hobbies.
                  </h3>
                  <h3>
                    These are my go-tos to decompress, and have become an
                    integral part of my life.
                  </h3>
                  <h5>(Use the tabs below)</h5>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {selectedItem === "items-photos" ? (
            <div className="items-item-collage">
              <img
                className="photos-collage"
                src="https://tomleslieli-portfolio.s3.amazonaws.com/photos-collage-min.png"
                alt="photos-collage"
              />
            </div>
          ) : (
            <></>
          )}
          {selectedItem === "items-music" ? (
            <>
              <div className="items-item">
                <div className="music-text">
                  <h2>Music Production</h2>
                  <h3>Full Tracks</h3>
                </div>
              </div>
              <div className="items-item">
                <iframe
                  width="70%"
                  title="soundcloud-player"
                  height="275px"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1473581347&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&show_artwork=false&single_active=true&show_playcount=false&sharing=false"
                ></iframe>
              </div>
              <div className="items-item">
                <div className="music-text">
                  <h5 className="border-box-music" id="throughout-college">
                    During college, I decided to put my 10+ years of piano
                    experience to work & taught myself Logic Pro X. Here are
                    some of those projects.{" "}
                  </h5>
                </div>
              </div>
              <div className="items-item">
                <div className="music-text">
                  <h3>Unfinished Ideas</h3>
                </div>
              </div>
              <div className="items-item">
                <iframe
                  width="70%"
                  title="soundcloud-player"
                  height="275px"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1479437002%3Fsecret_token%3Ds-8DEJ0ncbpUh&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&show_artwork=false&single_active=true&show_playcount=false"
                ></iframe>
              </div>
              <div className="items-item">
                <div className="music-text">
                  <h5 className="border-box-music" id="throughout-college">
                    Here are some clips of the (many) random ideas I've come up
                    with. These were created in Ableton Live 11 after switching
                    over from Logic Pro X.
                  </h5>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {selectedItem === "items-snowboard" ? (
            <div className="items-item" id="climbing-video-item">
              <video
                className="climbing-video"
                key="climbing-video"
                autoPlay
                loop
                muted
                preload="auto | metadata | none"
                poster="https://tomleslieli-portfolio.s3.amazonaws.com/video-default.png"
              >
                <source
                  src="https://tomleslieli-portfolio.s3.amazonaws.com/snowboarding-compressed.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <></>
          )}
          {selectedItem === "items-climbing" ? (
            <div className="items-item" id="climbing-video-item">
              <video
                className="climbing-video"
                key="climbing-video"
                autoPlay
                loop
                muted
                preload="auto | metadata | none"
                poster="https://tomleslieli-portfolio.s3.amazonaws.com/video-default.png"
              >
                <source
                  src="https://tomleslieli-portfolio.s3.amazonaws.com/climbing-compressed.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Hobbies;
