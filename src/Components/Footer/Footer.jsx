import React, { Component } from "react";
import "./Footer.css";
import M from "materialize-css";
class Footer extends Component {
  state = {};
  componentDidMount() {
    console.log(M);
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, { duration: 200 });
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, {});
    });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="row footer-wrapper"
          style={{ backgroundImage: "url('./assets/images/footer-bg.jpg')" }}
        >
          {/* <!--First Boyans--> */}
          <div className="col s12 content-center">
            <div className="row justify-center">
              <h1 className="footer-header-time primary-white-color">Now</h1>
            </div>
            <div className="row justify-center">
              <p className="footer-project-availability primary-white-color">
                We are taking new{" "}
                <strong className="primary-red-color">projects</strong>
              </p>
            </div>
            <div className="row justify-center footer-service-fapor">
              <p className="footer-project-fapor primary-white-color">
                Do you want any kind of services{" "}
                <strong className="primary-red-color">?</strong>
              </p>
            </div>
          </div>
          {/* <!--Line Animation Boxes--> */}
          <div className="col s12 content-center">
            <div className="row justify-center">
              <p className="primary-red-color footer-project-fapor-v2">Then</p>
            </div>
            <div className="row justify-center">
              <span className="footer-line-animation-box" />
            </div>
            <div className="row justify-center footer-contact-button">
              <a className="red-button-class">Contact Us</a>
            </div>
          </div>
          {/* <!--OR--> */}
          <div className="col s12 content-center">
            <div className="row justify-center">
              <h1 className="footer-or primary-white-color">or</h1>
            </div>
          </div>
          {/* <!--Discovery--> */}
          <div className="col s12 content-center">
            <div className="row justify-center">
              <h1 className="footer-fapor-discover primary-red-color">
                discover more on
              </h1>
            </div>
          </div>
          {/* <!--Social Icon--> */}
          <div className="col s12 content-center">
            <div className="row justify-center footer-social-icon-wrapper">
              <div className="footer-social-icon-holder">
                <i className="fab fa-facebook-f footer-social-icon" />
              </div>
              <div className="footer-social-icon-holder">
                <i className="fab fa-instagram footer-social-icon" />
              </div>
              <div className="footer-social-icon-holder">
                <i className="fab fa-google-plus-g footer-social-icon" />
              </div>
              <div className="footer-social-icon-holder">
                <i className="fab fa-twitter footer-social-icon" />
              </div>
            </div>
          </div>
          {/* <!--Footer Menu--> */}
          <div className="col s12 content-center">
            <div className="row justify-space-around footer-social-menu-wrapper">
              <div className="justify-space-around footer-menu">
                <a className="footer-menu-item">Home</a>
                <a className="footer-menu-item">Photobox</a>
                <a className="footer-menu-item">Services</a>
                <a className="footer-menu-item">Pricing Plan</a>
                <a className="footer-menu-item">About Us</a>
                <a className="footer-menu-item">Contact</a>
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="carousel">
              <div className="carousel-item">
                <img
                  src="./assets/images/footerCarousel/DSC_4749.jpg"
                  className="materialboxed"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./assets/images/footerCarousel/Havit-headphone.jpg"
                  className="materialboxed"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./assets/images/footerCarousel/perfume-in-water.jpg"
                  className="materialboxed"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./assets/images/footerCarousel/DSC_3099-1.jpg"
                  className="materialboxed"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./assets/images/footerCarousel/DSC_4364.jpg"
                  className="materialboxed"
                />
              </div>
            </div>
          </div>
          <div className="col s12">
            <div className="row footer-bottom-container-row footer-bottom-container">
              <div className="col s6 footer-bottom-copyright primary-white-color">
                <p className="footer-copyright-text">
                  &copy; all right reserved by fonok's photobox
                </p>
              </div>
              <div className="col s6 footer-bottom-others right-align">
                <a className="footer-bottom-link" href="#">
                  terms of policies
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
