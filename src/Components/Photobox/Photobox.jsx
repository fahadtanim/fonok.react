import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "./Photobox.css";
import PhotoboxCategory from "./PhotoboxCategory/PhotoboxCategory";

class Photobox extends Component {
  state = {};
  componentDidMount() {
    // console.log(this.sidecatnav);
    M.Sidenav.init(this.sidecatnav, { draggable: true });
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
}
  render() {
    return (
      <React.Fragment>
        <div className="fixed-btn">
          <a
            href="#"
            className="btn-floating btn-large red sidenav-trigger z-depth-4"
            data-target="slide-out"
          >
            <i className="large material-icons">camera</i>
          </a>
        </div>
        <ul
          id="slide-out"
          className="sidenav"
          ref={sidecatnav => {
            this.sidecatnav = sidecatnav;
          }}
        >
          <li>
            <ul className="collapsible z-depth-0">
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">event</i>Event Photography<i className = "material-icons">expand_more</i>
                </div>
                <div className="collapsible-body">
                  <ul>
                      <li>
                          <a>View Event</a>
                      </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">center_focus_weak</i>Portfolio Photography<i className = "material-icons">expand_more</i>
                </div>
                <div className="collapsible-body">
                <ul>
                      <li>
                          <a>View Portfolio</a>
                      </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">camera</i>Product Photography<i className = "material-icons">expand_more</i>
                </div>
                <div className="collapsible-body">
                <ul>
                      <li>
                          <Link to= "#">Watch</Link>
                      </li>
                      <li>
                          <Link to= "#">Sunglass</Link>
                      </li>
                      <li>
                          <Link to= "#">Food</Link>
                      </li>
                      <li>
                          <Link to= "#">Perfume</Link>
                      </li>
                      <li>
                          <Link to= "#">Shoe</Link>
                      </li>
                      <li>
                          <Link to= "#">Body Care</Link>
                      </li>
                      <li>
                          <Link to= "#">Bottle</Link>
                      </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <PhotoboxCategory/>
      </React.Fragment>
    );
  }
}

export default Photobox;
