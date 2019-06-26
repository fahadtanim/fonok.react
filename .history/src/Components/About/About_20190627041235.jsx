import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container about-box-wrapper">
          <div className="row about-details-container">
            <div className="col l6 m6 s12">
              <div className="row">
                <p className="about-us-sub-header">WHAT WE Are</p>
              </div>
              <div className="row">
                <h1 className="about-us-feature-header">About Us</h1>
              </div>
              <div className="row">
                <div className="header-bottom-line" />
              </div>
              <div className="row">
                <p className="about-us-boyan">
                  Through our best-in-className techniques and bespoke growth
                  plans we assess digital problems and put in place strategies
                  that lead to commercial success. This means achieving what
                  matters most to you. Whether that’s creating a phenomenal
                  brand, a highly-optimised eCommerce website, a digital
                  marketing strategy that delivers quality leads – or all 3. We
                  know how to make it happen.
                </p>
              </div>
              <div className="row">
                <div className="col l6 m12 s12">
                  <div className="row valign-wrapper">
                    <img
                      src="./assets/images/lens-hood.png"
                      alt="camera-icon.png"
                      className="home-about-icon content-center"
                    />
                    <span className="home-about-icon-counter primary-red-color">
                      132
                    </span>
                    <span className="col s5 home-about-icon-details content-center ">
                      Pounds of Equipment
                    </span>
                  </div>
                </div>
                <div className="col l6 m12 s12">
                  <div className="row valign-wrapper">
                    <img
                      src="./assets/images/camera-icon.png"
                      alt="camera-icon.png"
                      className="home-about-icon content-center"
                    />
                    <span className="home-about-icon-counter primary-red-color">
                      280
                    </span>
                    <span className="col s5 home-about-icon-details content-center ">
                      Finished Photosessions
                    </span>
                  </div>
                </div>
                <div className="col l6 m12 s12">
                  <div className="row valign-wrapper">
                    <img
                      src="./assets/images/photographer-umbrella.png"
                      alt="camera-icon.png"
                      className="home-about-icon content-center"
                    />
                    <span className="home-about-icon-counter primary-red-color">
                      195
                    </span>
                    <span className="col s5 home-about-icon-details content-center ">
                      Studio Sessions
                    </span>
                  </div>
                </div>
                <div className="col l6 m12 s12">
                  <div className="row valign-wrapper">
                    <img
                      src="./assets/images/camera-focus.png"
                      alt="camera-icon.png"
                      className="home-about-icon content-center"
                    />
                    <span className="home-about-icon-counter primary-red-color">
                      253
                    </span>
                    <span className="col s5 home-about-icon-details content-center ">
                      Happy Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 l6 m6 about-photo-container">
              <div
                className="row about-photo"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
          </div>
          <div className="row">
            <p className="about-us-sub-header">see our works</p>
          </div>
          <div className="row">
            <h1 className="about-us-feature-header">Photobox</h1>
          </div>
          <div className="row">
            <div className="header-bottom-line" />
          </div>

          <div className="row photobox-cat-item">
            <a href="#" className="col l4 m4 s12 about-photobox-grid">
              <div
                className="about-photobox-img-container"
                style={{
                  backgroundImage: "url('./assets/images/price-list2.jpg')"
                }}
              >
                <div>
                  <h6>Product Photography</h6>
                </div>
              </div>
            </a>
            <a href="#" className="col l4 m4 s12 about-photobox-grid">
              <div
                className="about-photobox-img-container"
                style={{
                  backgroundImage: "url('./assets/images/price-list3.jpg')"
                }}
              >
                <div>
                  <h6>Fashion Photography</h6>
                </div>
              </div>
            </a>
            <a href="#" className="col l4 m4 s12 about-photobox-grid">
              <div
                className="about-photobox-img-container"
                style={{
                  backgroundImage: "url('./assets/images/price-list2.jpg')"
                }}
              >
                <div>
                  <h6>Event Photography</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
