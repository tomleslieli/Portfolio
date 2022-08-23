import React, { useRef, useState, useEffect } from "react";
import "../assets/stylesheets/about.scss";
import DarkBlue from "./svgs/dark-blue.jsx";
import Yellow from "./svgs/yellow.jsx";
import LightGrey from "./svgs/light-grey.jsx";
import DarkGrey from "./svgs/dark-grey.jsx";
import Cart from "./svgs/cart.jsx";
import Tools from "./svgs/tools.jsx";
import RocksOne from "./svgs/rocks-one.jsx";
import RocksTwo from "./svgs/rocks-two.jsx";
import RocksThree from "./svgs/rocks-three.jsx";


function About() {
  return (
    <>
      <div className="about-contents-container">
        <div className="about-left">
          <div className="about-item">
            <h5>
              I'm a <span className="bold">software engineer</span>
            </h5>
            <h5>
              {" "}
              / <span className="bold">video editor</span> / <span className="bold">producer</span> from NYC.
            </h5>
            <h6>I produce music in my spare time &</h6>
            <h5>will never miss out on an opportunity to</h5>
            <h5>go backpacking, climbing or snowboarding.</h5>
          </div>
        </div>
        <div className="about-right">
          <div className="about-item-icons">
            <div className="about-icon-row">
              <div className="about-icon-item">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-ruby-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-react-original-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-redux-original"></i>
              </div>
            </div>
            <div className="about-icon-row">
              <div className="about-icon-item"></div>
              <div className="about-icon-item">
                <i className="devicon-rails-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-postgresql-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-nodejs-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
            </div>
            <div className="about-icon-row">
              <div className="about-icon-item">
                <i className="devicon-git-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-express-original-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-html5-plain-wordmark"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-css3-plain-wordmark"></i>
              </div>
            </div>
            <div className="about-icon-row">
              <div className="about-icon-item">
                <i className="devicon-photoshop-plain"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-illustrator-plain"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-premierepro-plain"></i>
              </div>
              <div className="about-icon-item">
                <i className="devicon-aftereffects-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-asset">
        <DarkBlue />
      </div>
      <div className="about-asset-cart">
        <Cart />
      </div>
      <div className="about-asset-cart">
        <RocksOne />
      </div>
      <div className="about-asset-cart">
        <RocksTwo />
      </div>
      <div className="about-asset-cart">
        <RocksThree />
      </div>
      <div className="about-asset">
        <Tools />
      </div>
      <div className="about-asset">
        <Yellow />
      </div>
      <div className="about-asset">
        <LightGrey />
      </div>
      <div className="about-asset">
        <DarkGrey />
      </div>
      <div className="about-asset-bg" />
    </>
  );
}

export default About;
