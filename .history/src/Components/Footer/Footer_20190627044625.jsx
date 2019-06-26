import React, { Component } from "react";
import "./Footer.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  componentDidMount() {
    // console.log(M);
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".carousel");
      var carousel = M.Carousel.init(elems, { duration: 200,indicators:true });
      var elems = document.querySelectorAll(".materialboxed");
      var materialLightbox = M.Materialbox.init(elems, {});
      var elems = document.querySelectorAll(".modal");
      var footerModal = M.Modal.init(elems, {});
    });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="row footer-wrapper"
          style={{ backgroundImage: "url('/assets/images/footer-bg.jpg')" }}
        >
          <div className="footer-wrapper-effect">
            <div className="row">
              {/* <!--First Boyans--> */}
              <div className="col s12 content-center">
                <div className="row justify-center">
                  <h1 className="footer-header-time primary-white-color">
                    Now
                  </h1>
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
                  <p className="primary-red-color footer-project-fapor-v2">
                    Then
                  </p>
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
                    <Link to = "/home" className="footer-menu-item">Home</Link>
                    <Link to = "/photobox" className="footer-menu-item">Photobox</Link>
                    <Link to = "/services" className="footer-menu-item">Services</Link>
                    <Link to = "/pricing" className="footer-menu-item">Pricing Plan</Link>
                    <Link to = "/about" className="footer-menu-item">About Us</Link>
                    <Link to = "/contact" className="footer-menu-item">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="carousel">
                  <div className="carousel-item">
                    <img
                      src="/assets/images/footerCarousel/DSC_4749.jpg"
                      className="materialboxed"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/footerCarousel/Havit-headphone.jpg"
                      className="materialboxed"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/footerCarousel/perfume-in-water.jpg"
                      className="materialboxed"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/footerCarousel/DSC_3099-1.jpg"
                      className="materialboxed"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/footerCarousel/DSC_4364.jpg"
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
                    <button
                      className="footer-bottom-link btn btn-flat modal-trigger"
                      data-target="footer-main-modal"
                    >
                      Terms &amp; Policies
                    </button>
                  </div>
                </div>
              </div>
              <div className="footer-wrapper-effect" />
            </div>
          </div>
        </div>
        {/* <!-- Modal Structure --> */}
        <div id="footer-main-modal" className="modal footer-modal">
          <div className="modal-content">
            <h4>Terms &amp; Privacy Policy</h4>
            <h6>Develop across all platforms</h6>
            <p>
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </p>

            <h6>Speed &amp; Performance</h6>
            <p>
              Achieve the maximum speed possible on the Web Platform today, and
              take it further, via Web Workers and server-side rendering.
              Angular puts you in control over scalability. Meet huge data
              requirements by building data models on RxJS, Immutable.js or
              another push-model.
            </p>

            <h6>Incredible tooling</h6>
            <p>
              Build features quickly with simple, declarative templates. Extend
              the template language with your own components and use a wide
              array of existing components. Get immediate Angular-specific help
              and feedback with nearly every IDE and editor. All this comes
              together so you can focus on building amazing apps rather than
              trying to make the code work.
            </p>

            <h6>Loved by millions</h6>
            <p>
              From prototype through global deployment, Angular delivers the
              productivity and scalable infrastructure that supports Google's
              largest applications.
            </p>

            <h6>What is Angular?</h6>

            <p>
              Angular is a platform that makes it easy to build applications
              with the web. Angular combines declarative templates, dependency
              injection, end to end tooling, and integrated best practices to
              solve development challenges. Angular empowers developers to build
              applications that live on the web, mobile, or the desktop
            </p>

            <h6>Architecture overview</h6>

            <p>
              Angular is a platform and framework for building client
              applications in HTML and TypeScript. Angular is itself written in
              TypeScript. It implements core and optional functionality as a set
              of TypeScript libraries that you import into your apps.
            </p>

            <p>
              The basic building blocks of an Angular application are NgModules,
              which provide a compilation context for components. NgModules
              collect related code into functional sets; an Angular app is
              defined by a set of NgModules. An app always has at least a root
              module that enables bootstrapping, and typically has many more
              feature modules.
            </p>

            <p>
              Components define views, which are sets of screen elements that
              Angular can choose among and modify according to your program
              logic and data. Every app has at least a root component.
            </p>

            <p>
              Components use services, which provide specific functionality not
              directly related to views. Service providers can be injected into
              components as dependencies, making your code modular, reusable,
              and efficient.
            </p>

            <p>
              Both components and services are simply classes, with decorators
              that mark their type and provide metadata that tells Angular how
              to use them.
            </p>

            <p>
              The metadata for a component class associates it with a template
              that defines a view. A template combines ordinary HTML with
              Angular directives and binding markup that allow Angular to modify
              the HTML before rendering it for display.
            </p>

            <p>
              The metadata for a service class provides the information Angular
              needs to make it available to components through Dependency
              Injection (DI).
            </p>

            <p>
              An app's components typically define many views, arranged
              hierarchically. Angular provides the Router service to help you
              define navigation paths among views. The router provides
              sophisticated in-browser navigational capabilities.
            </p>
          </div>
          {/* <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
