import React, { Component } from "react";
import "./NavigationBar.css";
import M from "materialize-css";
import {Link} from "react-router-dom";
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
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/photobox">Photobox</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
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
            <Link className="" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="" to="/photobox">
              Photobox
            </Link>
          </li>
          <li>
            <Link className="" to="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
