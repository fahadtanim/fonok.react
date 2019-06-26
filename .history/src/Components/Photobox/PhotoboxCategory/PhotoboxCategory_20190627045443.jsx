import React, { Component } from "react";
import "./PhotoboxCategory.css";
import SliderService from "../../../Services/SliderService";
import M from "materialize-css";
class PhotoboxCategory extends Component {
  state = {};
  constructor(props) {
    super();
    // console.log(props);
    this.state.images = props.images;
  }
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var lightModal = M.Modal.init(elems, {});
    });
    let slider = new SliderService(
      "home-slider",
      "home-slider-container",
      "dot",
      "active",
      3
    );
    // let x  = 10;

    this.setState({ HomeSlider: slider }, () => {
      // console.log("state Category ", this.state);
      this.state.HomeSlider.animate();
    });
  }

  componentWillUnmount() {
    this.state.HomeSlider.stopAnimate();
    this.setState();
  }

  componentDidUpdate(){
    console.log("updated");
    this.handleReloadModelView();
    
  }

  handleHomeSlider = param => {
    this.state.HomeSlider.currentSlide(param);
  };

  handlePrintBox = props => {
    // console.log("inside render", props);
    if (props.productImages) {
      // console.log("going to output");
      if (props.productImages.length > 0) {
        return props.productImages.map(img => (
          <div
            key={img.image_id}
            className={"mosaic-" + img.size + " mosaic-pic-box modal-trigger"}
            data-target={"modal"+img.image_id}
            // onClick = { () => { M.Modal.getInstance(document.getElementById("modal"+img.image_id)).open(); }}
          >
            <div
              className="photo-container"
              style={{
                backgroundImage:
                  "url('/assets/images/portfolio/" +
                  img.category +
                  "/" +
                  img.subcategory +
                  "/JPEG/" +
                  img.image +
                  "')"
              }}
            />
          </div>
        ));
      } else {
        return (
          <h1 className="not-available-gallery">
            Sorry, No Images Available For This Moment
          </h1>
        );
      }
    } else {
      return (
        <h1 className="not-available-gallery">
          Sorry, No Images Available For This Moment
        </h1>
      );
    }
  };
  
  handleModalView = props => {
    if (props.productImages) {
      if (props.productImages.length > 0) {
        return props.productImages.map(img => (
          <div key = {img.image_id} id= {"modal"+img.image_id} className="modal img-modal">
            <div className="modal-content" onClick = { () => { M.Modal.getInstance(document.getElementById("modal"+img.image_id)).close(); }} >
              <img src={"/assets/images/portfolio/" +
                img.category +
                "/" +
                img.subcategory +
                "/JPEG/" +
                img.image} />
            </div>
              <button className = "btn-floating btn-small waves-effect waves-light red modal-close-btn" onClick = { () => { M.Modal.getInstance(document.getElementById("modal"+img.image_id)).close(); }}><i className="material-icons">close</i></button>
          </div>
        ));
      }
    }
  };

  handleReloadModelView = () => {
    var elems = document.querySelectorAll(".modal");
      var lightModal = M.Modal.init(elems, {});
      console.log("came", lightModal);
  }

  handlePrintSlider = props => {
    console.log("inside render", props);
    if (props.sliderImages) {
      console.log("going to output");
      if (props.sliderImages.length > 0) {
        return props.sliderImages.map(img => (
          <div
            key={img.image_id}
            className="home-slider"
            style={{
              backgroundImage:
                "url('/assets/images/portfolio/" +
                img.category +
                "/" +
                img.subcategory +
                "/JPEG/" +
                img.image +
                "')"
            }}
          />
        ));
      } else {
        // return <h1 className="not-available-gallery">Sorry, No Images Available For This Moment</h1>;
      }
    } else {
      // return <h1 className="not-available-gallery">Sorry, No Images Available For This Moment</h1>;
    }
  };


  handlePrintSliderDot = props => {
    // console.log("inside render", props);
    if (props.sliderImages) {
      // console.log("going to output");
      if (props.sliderImages.length > 0) {
        let i = 0;
        return props.sliderImages.map(img => (
          <span
            key={img.image_id}
            className="dot align-self-center"
            onClick={() => this.handleHomeSlider(i++)}
          />
        ));
      } else {
        // return <h1 className="not-available-gallery">Sorry, No Images Available For This Moment</h1>;
      }
    } else {
      // return <h1 className="not-available-gallery">Sorry, No Images Available For This Moment</h1>;
    }
  };



  render() {
    console.log("before render ", this.props);
    return (
      <React.Fragment>
        {this.handleModalView(this.props)}
        {this.handleReloadModelView()}
        <div className="row">
          <div className="home-slider-container-wrapper container-fluid">
            <div className="home-slider-box">
              <div id="home-slider-container">
                {this.handlePrintSlider(this.props)}
              </div>
            </div>
          </div>
        </div>
        <div className="row dot-wrapper">
          <div className="container-fluid home-slider-bubble">
            <div className="row justify-content-center">
              {this.handlePrintSliderDot(this.props)}
            </div>
          </div>
        </div>
        <div className="row" id="get-down-row" />
        <div className="row">
          <div className="mosaic-container">
            {this.handlePrintBox(this.props)}
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default PhotoboxCategory;
