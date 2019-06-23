import React, { Component } from "react";
import "./NavigationBar.css";
import M from "materialize-css";

class NavigationBar extends Component {
  state = {};
  componentDidMount() {
    // console.log(this.sidenav);
    M.Sidenav.init(this.sidenav, { draggable: true });
  }
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed z-depth-1">
          <nav id="main-nav">
            <div className="nav-wrapper">
              <a className="btn waves-effect" href="#!" className="brand-logo">
                Fonok
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down nav-items">
                <li>
                  <a href="sass.html">Home</a>
                </li>
                <li>
                  <a href="badges.html">Photobox</a>
                </li>
                <li>
                  <a href="collapsible.html">Service</a>
                </li>
                <li>
                  <a href="mobile.html">About Us</a>
                </li>
                <li>
                  <a href="mobile.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul
          className="sidenav"
          id="mobile-demo"
          ref={sidenav => {
            this.sidenav = sidenav;
          }}
        >
          <li>
            <a className="waves-effect waves-light btn-flat">Button</a>
          </li>
          <li>
            <a className="waves-effect waves-light btn-flat" href="badges.html">
              Photobox
            </a>
          </li>
          <li>
            <a
              className="waves-effect waves-light btn-flat"
              href="collapsible.html"
            >
              Service
            </a>
          </li>
          <li>
            <a className="waves-effect waves-light btn-flat" href="mobile.html">
              About Us
            </a>
          </li>
          <li>
            <a className="waves-effect waves-light btn-flat" href="mobile.html">
              Contact Us
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
