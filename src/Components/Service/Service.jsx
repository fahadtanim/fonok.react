import React, { Component } from "react";
import "./Service.css";
import WOW from "wowjs";
class Service extends Component {
  state = {};
  componentDidMount(){
    new WOW.WOW().init();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  componentWillUnmount(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row photobox-category-section-wrapper">
            <div className="col s12 l6 m6 s12 photobox-gallery-boyan wow fadeInUp">
              <div className="container">
                <div className="row">
                  <p className="service-feature-header wow fadeInUp">Product</p>
                </div>
                <div className="row">
                  <h1 className="service-sub-header wow fadeInUp">Photography</h1>
                </div>
                <div className="row">
                  <div className="header-bottom-line wow fadeInUp" />
                </div>
                <div className="row">
                  <p className="photobox-boyan wow fadeInUp">
                    Through our best-in-className techniques and bespoke growth
                    plans we assess digital problems and put in place strategies
                    that lead to commercial success. This means achieving what
                    matters most to you. Whether that’s creating a phenomenal
                    brand, a highly-optimised eCommerce website, a digital
                    marketing strategy that delivers quality leads – or all 3.
                    We know how to make it happen.{" "}
                  </p>
                </div>
                <div className="row">
                  <a href="#" className="red-button-class wow fadeInUp">
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 l6 m6 wow fadeInUp">
              <div
                className="photobox-gallery-img"
                style={{
                  backgroundImage: "url('assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="col s12 photobox-img-basic-gallery wow fadeInUp">
              <div className="row">
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list2.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list-3.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row photobox-category-section-wrapper wow fadeInUp">
            <div className="col s12 l6 m6 s12 wow fadeInUp">
              <div
                className="photobox-gallery-img"
                style={{
                  backgroundImage: "url('assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="col s12 l6 m6 s12 photobox-gallery-boyan wow fadeInUp">
              <div className="container">
                <div className="row justify-end">
                  <p className="service-feature-header wow fadeInUp">Fashion</p>
                </div>
                <div className="row justify-end">
                  <h1 className="service-sub-header wow fadeInUp">Photography</h1>
                </div>
                <div className="row justify-end">
                  <div className="header-bottom-line wow fadeInUp" />
                </div>
                <div className="row jusity-end">
                  <p className="photobox-boyan text-right wow fadeInUp">
                    Through our best-in-className techniques and bespoke growth
                    plans we assess digital problems and put in place strategies
                    that lead to commercial success. This means achieving what
                    matters most to you. Whether that’s creating a phenomenal
                    brand, a highly-optimised eCommerce website, a digital
                    marketing strategy that delivers quality leads – or all 3.
                    We know how to make it happen.{" "}
                  </p>
                </div>
                <div className="row justify-end">
                  <a href="#" className="red-button-class wow fadeInUp">
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 photobox-img-basic-gallery wow fadeInUp">
              <div className="row">
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list2.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list3.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row photobox-category-section-wrapper">
            <div className="col s12 l6 m6 s12 photobox-gallery-boyan wow fadeInUp">
              <div className="container">
                <div className="row">
                  <p className="service-feature-header wow fadeInUp">Event</p>
                </div>
                <div className="row">
                  <h1 className="service-sub-header wow fadeInUp">Photography</h1>
                </div>
                <div className="row">
                  <div className="header-bottom-line wow fadeInUp" />
                </div>
                <div className="row">
                  <p className="photobox-boyan wow fadeInUp">
                    Through our best-in-class techniques and bespoke growth
                    plans we assess digital problems and put in place strategies
                    that lead to commercial success. This means achieving what
                    matters most to you. Whether that’s creating a phenomenal
                    brand, a highly-optimised eCommerce website, a digital
                    marketing strategy that delivers quality leads – or all 3.
                    We know how to make it happen.{" "}
                  </p>
                </div>
                <div className="row">
                  <a href="#" className="red-button-class wow fadeInUp">
                    View Gallery
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 l6 m6 s12 wow fadeInUp">
              <div
                className="photobox-gallery-img"
                style={{
                  backgroundImage: "url('assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="col s12 photobox-img-basic-gallery wow fadeInUp">
              <div className="row">
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list2.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/price-list3.jpg')"
                    }}
                  />
                </div>
                <div className="col s6 l3 m3 wow fadeInUp">
                  <div
                    className="square-img-box"
                    style={{
                      backgroundImage: "url('assets/images/bg-about-me.jpg')"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Service;
