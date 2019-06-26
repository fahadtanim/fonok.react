import React, { Component } from "react";
import "./PricingPlan.css";
class PricingPlan extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="container">
            <div className="row">
              <p className="col pricing-plan-sub-header">WHAT WE DO</p>
            </div>
            <div className="row">
              <h1 className="col pricing-plan-feature-header">Our Features</h1>
            </div>
            <div className="row">
              <div className="col header-bottom-line" />
            </div>
            <div className="row pricing-plan-feature-content">
              <div className="pricing-plan-feature-boyan col s12 m4 l4">
                <p>
                  We push boundaries through thinking not just about your brand,
                  your website, or your digital marketing – but how all of the
                  digital elements of your business work together. It’s at the
                  intersection of these two areas that we help.
                </p>
              </div>
              <div className="col s12 m8 l8 skill-item-wrapper">
                <div className="row">
                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Camerawork</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">87%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "87%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Directing</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">96%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "97%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Product Shoot</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">82%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "78%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Lighting setup</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">90%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "90%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Fashion Shoot</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">88%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "88%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--######  SKILL BARS  ######--> */}
                  <div className="col s12 m6 l6 skill-item">
                    <div className="row skill-item-text-wrapper">
                      <div className="col s8">
                        <p className="skill-item-header">Photo Editing</p>
                      </div>
                      <div className="col s4">
                        <p className="skill-item-amount">82%</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="skill-item-bar-wrapper-container">
                      <div className="skill-item-bar-wrapper">
                        <div
                          className="skill-item-bar"
                          style={{ width: "82%" }}
                        />
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <p className="col pricing-plan-sub-header">HOW MUCH</p>
            </div>
            <div className="row">
              <h1 className="col pricing-plan-feature-header">Our pricing plan</h1>
            </div>
            <div className="row">
              <div className="col header-bottom-line" />
            </div>

            <div className="row">
              <div className="col s12 m3 l3 price-box">
                <div className="row pricing-title-container">
                  <div
                    className="container-fluid price-tag"
                    style={{
                      backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                    }}
                  >
                    <div className="row">
                      <h6 className="pricing-plan-category-header">MINIMAL</h6>
                    </div>
                    <div className="row pricing-plan-price justify-center">
                      <span className="content-center">$</span>
                      79
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="pricing-details container-fluid">
                    <div className="row justify-center">
                      <p className="pricing-details-text">15 photos</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">1 location</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        Digital files included
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">No make-up</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                  </div>
                </div>
                <div className="row center-align  center-align pricing-plan-button-wrapper">
                  <a href="#" className="pricing-plan-order-button">
                    Purchase
                  </a>
                </div>
              </div>
              <div className="col s12 m3 l3 price-box">
                <div className="row pricing-title-container">
                  <div
                    className="container-fluid price-tag"
                    style={{
                      backgroundImage: "url('./assets/images/price-list2.jpg')"
                    }}
                  >
                    <div className="row">
                      <h6 className="pricing-plan-category-header">STANDARD</h6>
                    </div>
                    <div className="row pricing-plan-price justify-center">
                      <span className="content-center">$</span>
                      99
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="pricing-details container-fluid">
                    <div className="row justify-center">
                      <p className="pricing-details-text">30 photos</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        1-2 nearby location
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        Digital files included
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">No make-up</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                  </div>
                </div>
                <div className="row  center-align center-align pricing-plan-button-wrapper">
                  <a href="#" className="pricing-plan-order-button">
                    Purchase
                  </a>
                </div>
              </div>
              <div className="col s12 m3 l3 price-box">
                <div className="row pricing-title-container">
                  <div
                    className="container-fluid price-tag"
                    style={{
                      backgroundImage: "url('./assets/images/price-list3.jpg')"
                    }}
                  >
                    <div className="row">
                      <h6 className="pricing-plan-category-header">PREMIUM</h6>
                    </div>
                    <div className="row pricing-plan-price justify-center">
                      <span className="content-center">$</span>
                      129
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="pricing-details container-fluid">
                    <div className="row justify-center">
                      <p className="pricing-details-text">45 photos</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">Multiple location</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        Digital files included
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">Make-up included</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                  </div>
                </div>
                <div className="row center-align pricing-plan-button-wrapper">
                  <a href="#" className="pricing-plan-order-button">
                    Purchase
                  </a>
                </div>
              </div>
              <div className="col s12 m3 l3 price-box">
                <div className="row pricing-title-container">
                  <div
                    className="container-fluid price-tag"
                    style={{
                      backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                    }}
                  >
                    <div className="row">
                      <h6 className="pricing-plan-category-header">LUXURY</h6>
                    </div>
                    <div className="row pricing-plan-price justify-center">
                      <span className="content-center">$</span>
                      159
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="pricing-details container-fluid">
                    <div className="row justify-center">
                      <p className="pricing-details-text">60 photos</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">Multiple location</p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        Digital files included
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                    <div className="row justify-center">
                      <p className="pricing-details-text">
                        Make-up & Hairstyle
                      </p>
                    </div>
                    <div className="row justify-center pricing-details-end">
                      <div className="pricing-details-text-bar" />
                    </div>
                  </div>
                </div>
                <div className="row center-align pricing-plan-button-wrapper">
                  <a href="#" className="pricing-plan-order-button">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PricingPlan;
