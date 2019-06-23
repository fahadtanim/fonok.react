import React, { Component } from "react";
import "./HomeTestimonial.css";
import CarosellService from "../../../Services/CarosellService";

class HomeTestimonial extends Component {
    state = {}
  componentDidMount(){
    let slider = new CarosellService( 'testimonial-slider',
    'testimonial-slider-container',
    'testimonial-dot',
    'testimonial-active',
    2);
    // let x  = 10;
    this.setState({ CarosellSlider : slider }, ()=>{
        console.log("state Slider ",this.state);
        this.state.CarosellSlider.animate();
    });
    
    
  }

  componentWillUnmount(){
    
      this.state.CarosellSlider.stopAnimate();
  }

  handleCarosellSlider = param =>{
    this.state.CarosellSlider.currentSlide(param)
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row testimonial-banner-section-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="testimonial-slider-container-wrapper container-fluid"
                >
                  <div className="testimonial-slider-box">
                    <div
                      id="testimonial-slider-container"
                    >
                      <div
                        className="testimonial-slider valign-wrapper"
                      >
                        <div className="row testimonial-slider-content-box">
                          <div className="container-fluid content-center">
                            <div className="row testimonial-quote justify-center">
                              <div className="justify-center">
                                <img src="./assets/images/inverted-commas.png" />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="testimonial-author-img">
                                <div style={{backgroundImage: "url('./assets/images/tanim.jpg')"}} />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="col l6 m6 s9 testimonial-quote-text-wrapper">
                                <p className="testimonial-quote-text">
                                  
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque est tortor, ultricies
                                  eget suscipit sit amet, finibus nec arcu.
                                  Etiam venenatis efficitur mollis. Nulla ac
                                  rhoncus risus, et semper nisl. Aliquam
                                  vehicula orci sed ex commodo mattis. Aliquam
                                  erat volutpat. Nunc egestas sapien porttitor
                                  ante dapibus dapibus. Morbi lacinia mauris id
                                  rhoncus egestas. Sed ultrices eros vel
                                  fringilla molestie.
                                </p>
                              </div>
                            </div>
                            <div className="row content-center justify-center testimonial-author-name">
                              
                              Md. Fahad-Uz-Zaman Khan
                            </div>
                            <div className="row content-center justify-center testimonial-author-designation">
                              Junior Software Engineer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-slider valign-wrapper"
                      >
                        <div className="row testimonial-slider-content-box">
                          <div className="container-fluid content-center">
                            <div className="row testimonial-quote justify-center">
                              <div className="justify-center">
                                <img src="./assets/images/inverted-commas.png" />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="testimonial-author-img">
                                <div style={{backgroundImage: "url('./assets/images/tanim.jpg')"}} />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="col l6 m6 s9 testimonial-quote-text-wrapper">
                                <p className="testimonial-quote-text">
                                  
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque est tortor, ultricies
                                  eget suscipit sit amet, finibus nec arcu.
                                  Etiam venenatis efficitur mollis. Nulla ac
                                  rhoncus risus, et semper nisl. Aliquam
                                  vehicula orci sed ex commodo mattis. Aliquam
                                  erat volutpat. Nunc egestas sapien porttitor
                                  ante dapibus dapibus. Morbi lacinia mauris id
                                  rhoncus egestas. Sed ultrices eros vel
                                  fringilla molestie.
                                </p>
                              </div>
                            </div>
                            <div className="row content-center justify-center testimonial-author-name">
                              
                              Md. Fahad-Uz-Zaman Khan
                            </div>
                            <div className="row content-center justify-center testimonial-author-designation">
                              Junior Software Engineer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="testimonial-slider valign-wrapper"
                      >
                        <div className="row testimonial-slider-content-box">
                          <div className="container-fluid content-center">
                            <div className="row testimonial-quote justify-center">
                              <div className="justify-center">
                                <img src="./assets/images/inverted-commas.png" />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="testimonial-author-img">
                                <div style={{backgroundImage: "url('./assets/images/tanim.jpg')"}} />
                              </div>
                            </div>
                            <div className="row content-center justify-center">
                              <div className="col l6 m6 s9 testimonial-quote-text-wrapper">
                                <p className="testimonial-quote-text">
                                  
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Quisque est tortor, ultricies
                                  eget suscipit sit amet, finibus nec arcu.
                                  Etiam venenatis efficitur mollis. Nulla ac
                                  rhoncus risus, et semper nisl. Aliquam
                                  vehicula orci sed ex commodo mattis. Aliquam
                                  erat volutpat. Nunc egestas sapien porttitor
                                  ante dapibus dapibus. Morbi lacinia mauris id
                                  rhoncus egestas. Sed ultrices eros vel
                                  fringilla molestie.
                                </p>
                              </div>
                            </div>
                            <div className="row content-center justify-center testimonial-author-name">
                              
                              Md. Fahad-Uz-Zaman Khan
                            </div>
                            <div className="row content-center justify-center testimonial-author-designation">
                              Junior Software Engineer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row testimonial-dot-wrapper">
                <div className="container-fluid testimonial-slider-bubble">
                  <div className="row justify-content-center">
                    <span className="testimonial-dot align-self-center" />
                    <span className="testimonial-dot" />
                    <span className="testimonial-dot testimonial-active" />
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

export default HomeTestimonial;
