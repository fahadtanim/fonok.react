import React, { Component } from "react";
import "./Contact.css";
import Particles from "react-particles-js";
class Contact extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      particles: {
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
              value_area: 500
            }
          },
          color: {
            value: "#f75e50"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0.6,
              color: "#f75e50"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: false,
              speed: 500,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              size_min: 0.2,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#f75e50",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.4
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100
            },
            push: {
              particles_nb: 5
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#020202",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover"
        }
      }
    };

    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <Particles width="100%" height="100vh" params={this.state.particles} />
        <div className="row home-contact-container-wrapper valign-wrapper">
          <div className="container">
            <div className="row">
              <div className="col l6 m6 s12 content-center home-contact-info-wrapper">
                <div className="row">
                  <h3 className="home-contact-location">Our Office</h3>
                </div>
                <div className="row">
                  <p className="home-contact-address secondary-font">
                    51/1/E Manikaagar Pukur Par,
                    <br />
                    Maniknagar, Mugda,
                    <br />
                    Dhaka-1214
                    <br />
                    Bangladesh
                    <br />
                  </p>
                </div>
                <div className="row">
                  <div className="home-contact-address-details col s11 10 m10">
                    <p className="row">
                      Our studio space is located in downtown San Luis Obispo.
                      right in the heart of Central Coast, CA. Conveniently
                      surrounded by some of the world’s most talented craft
                      producers. Come on by.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <h2 className="home-contact-info-title">Contact Info</h2>
                </div>
                <div className="row">
                  <p className="home-contact-info-details secondary-font">
                    Call : +8801977515062
                  </p>
                </div>
                <div className="row">
                  <p className="home-contact-info-details secondary-font">
                    Email : info@fonoksphotobox.com
                  </p>
                </div>
              </div>
              <div className="col l6 m6 s12">
                <div className="row">
                  <h1 className="contact-form-header">Drop Us A Line</h1>
                </div>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12 m6 l6">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                          id="icon_prefix"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="icon_prefix">First Name</label>
                      </div>
                      <div className="input-field col s12 m6 l6">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                        <span
                          className="helper-text"
                          data-error="wrong"
                          data-success="right"
                        />
                      </div>
                      <div className="input-field col s12">
                      <i className="material-icons prefix">textsms</i>
                        <textarea id="textarea1" className="materialize-textarea" />
                        <label htmlFor="textarea1">Message</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
