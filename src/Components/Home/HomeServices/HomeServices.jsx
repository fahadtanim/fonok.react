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
              <p className="about-us-sub-header">WHAT WE Offer</p>
            </div>
            <div className="row upore-uth">
              <h1 className="about-us-feature-header">Our SERVICES</h1>
            </div>
            <div className="row">
              <div className="header-bottom-line" />
            </div>
            <div className="row">
              <div className="col s12 m6 l4">
                <div
                  className="home-service-box"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center">
                      <a className="button-class" href="#">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div
                  className="home-service-box"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center">
                      <a className="button-class" href="#">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div
                  className="home-service-box"
                  style={{backgroundImage: "url('./assets/images/bg-about-me.jpg')"}}
                >
                  <div className="home-service-box-container">
                    <div className="row home-service-logo-wrapper justify-center">
                      <img src="./assets//images/camera-focus.png" />
                    </div>
                    <div className="row home-service-title-wrapper justify-center">
                      <h6>Product Photography</h6>
                    </div>
                    <div className="row home-service-details-wrapper justify-center">
                      <p>
                        I have a master's degree in civil engineering from the
                        University of Southampton
                      </p>
                    </div>
                    <div className="row home-service-button justify-center">
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
