import React, { Component } from "react";
import "./HomeServices.css";

class HomeServices extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="container home-services-wrapper">
            <div className="row">
              <p className="about-us-sub-header wow fadeInUp">WHAT WE Offer</p>
            </div>
            <div className="row">
              <h1 className="about-us-feature-header wow fadeInUp">Our Services</h1>
            </div>
            <div className="row">
              <div className="header-bottom-line wow fadeInUp" />
            </div>
            <div className="row">
              <div className="col s12 m6 l4 wow fadeInUp">
                <div
                  className="home-service-box wow fadeInUp"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center wow fadeInUp">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center wow fadeInUp">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center wow fadeInUp">
                      <a className="button-class" href="#">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4 wow fadeInUp">
                <div
                  className="home-service-box wow fadeInUp"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center wow fadeInUp">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center wow fadeInUp">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center wow fadeInUp">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center wow fadeInUp">
                      <a className="button-class" href="#">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4 wow fadeInUp">
                <div
                  className="home-service-box wow fadeInUp"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center wow fadeInUp">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center wow fadeInUp">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center wow fadeInUp">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center wow fadeInUp">
                      <a className="button-class" href="#">
                        See More
                      </a>
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

export default HomeServices;
