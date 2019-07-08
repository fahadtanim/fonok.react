import React, { Component } from "react";
import "./NavigationBar.css";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
class NavigationBar extends Component {
  state = {};
  componentDidMount() {
    // console.log(this.sidenav);
    M.Sidenav.init(this.sidenav, { draggable: true });
  }
  closeSidenav = () => {
    // this.sidecatnav.close();
    let instance = M.Sidenav.getInstance(this.sidenav);
    // console.log(instance);
    instance.close();
  };
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed z-depth-4">
          <nav id="main-nav">
            <div className="nav-wrapper">
              <NavLink activeClassName="url-active"
                className="btn waves-effect"
                to="/home"
                className="brand-logo"
              >
                Fonok's
              </NavLink>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down nav-items">
                <li>
                  <NavLink activeClassName="url-active" to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="url-active" to="/photobox">
                    Photobox
                  </NavLink>
                  {/* <ul className="z-depth-4 sub-menu">
                    <li>
                      <NavLink activeClassName="url-active" to="/photobox/fashion/view">Fashion Photobox</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="url-active" to="/photobox/event/view">Event Photobox</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="url-active" to="/photobox/product/view">
                        Product Photobox
                        <i className="material-icons sub-submenu-icon">
                          chevron_right
                        </i>
                      </NavLink>

                      <ul className = "sub-sub-menu">
                        <li>
                          <NavLink activeClassName="url-active" to = "#">Test</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <NavLink activeClassName="url-active" to="/service">Service</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="url-active" to="/pricing">Pricing Plan</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="url-active" to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="url-active" to="/contact">Contact Us</NavLink>
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
            <NavLink activeClassName="url-sidebar-active" className="" to="/home" onClick={this.closeSidenav}>
              Home
            </NavLink >
          </li>
          <li>
            <NavLink activeClassName="url-sidebar-active" className="" to="/photobox" onClick={this.closeSidenav}>
              Photobox
            </NavLink >
          </li>
          <li>
            <NavLink activeClassName="url-sidebar-active" className="" to="/service" onClick={this.closeSidenav}>
              Service
            </NavLink >
          </li>
          <li>
            <NavLink activeClassName="url-sidebar-active" className="" to="/pricing" onClick={this.closeSidenav}>
              Pricing Plan
            </NavLink >
          </li>
          <li>
            <NavLink activeClassName="url-sidebar-active" className="" to="/about" onClick={this.closeSidenav}>
              About Us
            </NavLink >
          </li>
          <li>
            <NavLink activeClassName="url-sidebar-active" className="" to="/contact" onClick={this.closeSidenav}>
              Contact Us
            </NavLink >
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
