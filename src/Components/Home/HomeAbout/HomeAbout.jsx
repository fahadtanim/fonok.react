import React, { Component } from "react";
import "./HomeAbout.css";

class HomeAbout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row" style={{backgroundImage : "url('./assets/images/bg-about-me.jpg')", backgroundSize:"cover", backgroundPosition: "center center"}}>
          <div className="container">
            <div className="row home-about-parts-container valign-wrapper wow fadeInUp">
              <div className="col s12 m12 l12 content-center wow fadeInUp">
                <div className="row">
                  <p className="home-about-greetings primary-red-color wow fadeInUp">
                    Nice to meet you
                  </p>
                </div>
                <div className="row">
                  <span className="primary-white-color">
                    <p className="home-about-name-dummy primary-white-color wow fadeInUp">
                      My Name Is
                    </p>
                    <p className="home-about-name-main primary-white-color wow fadeInUp">
                      Md. Iftekhar Uddin Emon
                    </p>
                  </span>
                </div>
                <div className="row">
                  <p className="home-about-designation wow fadeInUp">
                    Founder of Fonok's Photobox
                  </p>
                </div>
                <div className="row">
                  <div className="col l6 m6 s12 wow fadeInUp">
                    <div className="row">
                      <p className="home-about-details wow fadeInUp">
                        I was born in the UK and raised in the African desert by
                        bushmen. Okay, that might be a stretch – my parents were
                        from the UK, but I did grow up shaking Kalahari sand out
                        of my shoes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col l6 m6 s12 wow fadeInUp">
                    <div className="row valign-wrapper wow fadeInUp">
                      <img
                        src="./assets/images/lens-hood.png"
                        alt="camera-icon.png"
                        className="home-about-icon content-center wow fadeInUp"
                      />
                      <span className="home-about-icon-counter primary-red-color wow fadeInUp">
                        132
                      </span>
                      <span className="col s5 home-about-icon-details content-center wow fadeInUp">
                        Pounds of Equipment
                      </span>
                    </div>
                  </div>
                  <div className="col l6 m6 s12 wow fadeInUp">
                    <div className="row valign-wrapper">
                      <img
                        src="./assets/images/camera-icon.png"
                        alt="camera-icon.png"
                        className="home-about-icon content-center wow fadeInUp"
                      />
                      <span className="home-about-icon-counter primary-red-color wow fadeInUp">
                        280
                      </span>
                      <span className="col s5 home-about-icon-details content-center wow fadeInUp">
                        Finished Photosessions
                      </span>
                    </div>
                  </div>
                  <div className="col l6 m6 s12 wow fadeInUp">
                    <div className="row valign-wrapper">
                      <img
                        src="./assets/images/photographer-umbrella.png"
                        alt="camera-icon.png"
                        className="home-about-icon content-center wow fadeInUp"
                      />
                      <span className="home-about-icon-counter primary-red-color">
                        195
                      </span>
                      <span className="col s5 home-about-icon-details content-center wow fadeInUp">
                        Studio Sessions
                      </span>
                    </div>
                  </div>
                  <div className="col l6 m6 s12 wow fadeInUp">
                    <div className="row valign-wrapper">
                      <img
                        src="./assets/images/camera-focus.png"
                        alt="camera-icon.png"
                        className="home-about-icon content-center"
                      />
                      <span className="home-about-icon-counter primary-red-color wow fadeInUp">
                        253
                      </span>
                      <span className="col s5 home-about-icon-details content-center wow fadeInUp">
                        Happy Clients
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="row home-about-signature">
                  <div className="col s1 content-center wow fadeInUp">
                    <div className="row">
                      <p className="home-about-signature-title wow fadeInUp">
                        Best
                        <br />
                        Regards
                      </p>
                    </div>
                  </div>
                  <div className="col s4 content-center wow fadeInUp">
                    <div className="row">
                      <img
                        src="./assets/images/signature.png"
                        alt="Signature"
                        className="home-about-signature-image wow fadeInUp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeAbout;
