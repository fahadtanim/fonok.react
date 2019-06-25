
import React, { Component } from "react";
import "./PhotoboxCategory.css";
import SliderService from "../../../Services/SliderService";
class PhotoboxCategory extends Component {
  state = {};
  constructor(props){
    super();
    console.log(props);
    this.state.images = props.images;
  }
  componentDidMount() {
    let slider = new SliderService(
      "home-slider",
      "home-slider-container",
      "dot",
      "active",
      3
    );
    // let x  = 10;
    this.setState({ HomeSlider: slider }, () => {
      console.log("state Slider ", this.state);
      this.state.HomeSlider.animate();
    });
    
  }

  componentWillUnmount() {
    this.state.HomeSlider.stopAnimate();
  }

  handleHomeSlider = param => {
    this.state.HomeSlider.currentSlide(param);
  };

  handlePrintBox = () =>{
    return(
      this.state.images.map(
        (img) =>
        <div key= {img.image_id} className= {"mosaic-"+ img.size +" mosaic-pic-box"}>
            <div
              className="photo-container"
              style={{
                backgroundImage: "url('./assets/images/portfolio/"+img.category+"/"+img.subcategory+"/JPEG/"+ img.image +"')"
              }}
            />
          </div>
        
      )
    );
  }

 
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="home-slider-container-wrapper container-fluid">
            <div className="home-slider-box">
              <div id="home-slider-container">
                <div
                  className="home-slider"
                  style={{
                    backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                  }}
                >
                  1
                </div>
                <div
                  className="home-slider"
                  style={{
                    backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                  }}
                >
                  2
                </div>
                <div
                  className="home-slider"
                  style={{
                    backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                  }}
                >
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row dot-wrapper">
          <div className="container-fluid home-slider-bubble">
            <div className="row justify-content-center">
              <span
                className="dot active align-self-center"
                onClick={() => this.handleHomeSlider(0)}
              />
              <span className="dot" onClick={() => this.handleHomeSlider(1)} />
              <span className="dot" onClick={() => this.handleHomeSlider(2)} />
            </div>
          </div>
        </div>
        <div className="row" id="get-down-row" />
        <div className="row">
          <div className="mosaic-container">
            {
              this.handlePrintBox()
            }
            {/* <div className="mosaic-square mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-square mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-tall mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-wide mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-fat mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-medium mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
            <div className="mosaic-medium mosaic-pic-box">
              <div
                className="photo-container"
                style={{
                  backgroundImage: "url('./assets/images/bg-about-me.jpg')"
                }}
              />
            </div>
           */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PhotoboxCategory;
