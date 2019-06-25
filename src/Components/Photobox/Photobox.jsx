import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "./Photobox.css";
import PhotoboxCategory from "./PhotoboxCategory/PhotoboxCategory";

class Photobox extends Component {
  state = {
    category : "",
    subcategory : "",
    images : []
  };
  constructor(props){
    super();
    this.state.props = props;
    console.log('state : ', this.state);
  }
  componentDidMount() {
    // console.log(this.sidecatnav);
    M.Sidenav.init(this.sidecatnav, { draggable: true });
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems, {});
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    let category;
    let subcategory;
    let props = this.state.props;
    console.log('property : ',props);
    if(props.match.params.category && props.match.params.subcategory){
      console.log('dhukse');
      category = props.match.params.category;
      subcategory = props.match.params.subcategory;
    }
    else{
      console.log('dhuke nai');
      this.state.category = "product";
      this.state.subcategory = "random";
    }
    let images = [
      //bodycare
      {image_id: 1,image : 'DSC_2446.jpg', category: 'product', subcategory: 'bodycare', size: 'square'},
      {image_id: 2,image : 'DSC_2463.jpg', category: 'product', subcategory: 'bodycare', size: 'square'},
      {image_id: 3,image : 'gameon.jpg', category: 'product', subcategory: 'bodycare', size: 'tall'},
      {image_id: 4,image : 'DSC_2526.jpg', category: 'product', subcategory: 'bodycare', size: 'wide'},
      {image_id: 5,image : 'DSC_2643.jpg', category: 'product', subcategory: 'bodycare', size: 'fat'},
      {image_id: 6,image : 'DSC_2649.jpg', category: 'product', subcategory: 'bodycare', size: 'medium'},
      {image_id: 7,image : 'DSC_5632.jpg', category: 'product', subcategory: 'bodycare', size: 'medium-2'},
      //sunglass
      {image_id: 8,image : 'DSC_0545.jpg', category: 'product', subcategory: 'sunglass', size: 'square'},
      {image_id: 9,image : 'DSC_2045-1.jpg', category: 'product', subcategory: 'sunglass', size: 'square'},
      {image_id: 10,image : 'DSC_0123.jpg', category: 'product', subcategory: 'sunglass', size: 'tall'},
      {image_id: 11,image : 'ET17874.jpg', category: 'product', subcategory: 'sunglass', size: 'wide'},
      {image_id: 12,image : 'DSC_2045-1.jpg', category: 'product', subcategory: 'sunglass', size: 'fat'},
      {image_id: 13,image : 'EL-14856-54.jpg', category: 'product', subcategory: 'sunglass', size: 'medium'},
      {image_id: 14,image : 'DSC_0044.jpg', category: 'product', subcategory: 'sunglass', size: 'medium-2'},
      //bottle
      {image_id: 15,image : 'Dew.jpg', category: 'product', subcategory: 'bottle', size: 'square'},
      {image_id: 16,image : 'cocacola-water.jpg', category: 'product', subcategory: 'bottle', size: 'square'},
      {image_id: 17,image : 'grape-juice.jpg', category: 'product', subcategory: 'bottle', size: 'tall'},
      {image_id: 18,image : 'monster.jpg', category: 'product', subcategory: 'bottle', size: 'wide'},
      {image_id: 19,image : 'Hollander_n.jpg', category: 'product', subcategory: 'bottle', size: 'fat'},
      {image_id: 20,image : 'monste1r.jpg', category: 'product', subcategory: 'bottle', size: 'medium'},
      {image_id: 21,image : 'DSC_1784-1.jpg', category: 'product', subcategory: 'bottle', size: 'medium-2'},
      //food
      {image_id: 22,image : 'DSC_3099-1.jpg', category: 'product', subcategory: 'food', size: 'square'},
      {image_id: 23,image : 'DSC_9608.jpg', category: 'product', subcategory: 'food', size: 'square'},
      {image_id: 24,image : 'burger-on-air.jpg', category: 'product', subcategory: 'food', size: 'tall'},
      {image_id: 25,image : 'DSC_3160-1.jpg', category: 'product', subcategory: 'food', size: 'wide'},
      {image_id: 26,image : 'pingles_red.jpg', category: 'product', subcategory: 'food', size: 'fat'},
      {image_id: 27,image : 'DSC_9604.jpg', category: 'product', subcategory: 'food', size: 'medium'},
      {image_id: 28,image : 'DSC_9749.jpg', category: 'product', subcategory: 'food', size: 'medium-2'},
      //watch
      {image_id: 29,image : 'DSC_5326.jpg', category: 'product', subcategory: 'watch', size: 'square'},
      {image_id: 30,image : 'DSC_5330.jpg', category: 'product', subcategory: 'watch', size: 'square'},
      {image_id: 31,image : 'light-paint.jpg', category: 'product', subcategory: 'watch', size: 'tall'},
      {image_id: 32,image : 'fossil-red.jpg', category: 'product', subcategory: 'watch', size: 'wide'},
      {image_id: 33,image : 'Watch.jpg', category: 'product', subcategory: 'watch', size: 'fat'},
      {image_id: 34,image : 'DSC_5412.jpg', category: 'product', subcategory: 'watch', size: 'medium'},
      {image_id: 35,image : 'DSC_5314.jpg', category: 'product', subcategory: 'watch', size: 'medium-2'},
      //shoe
      {image_id: 36,image : 'DSC_6281.jpg', category: 'product', subcategory: 'shoe', size: 'square'},
      {image_id: 37,image : 'DSC_6315n.jpg', category: 'product', subcategory: 'shoe', size: 'square'},
      {image_id: 38,image : 'DSC_4387.jpg', category: 'product', subcategory: 'shoe', size: 'tall'},
      {image_id: 39,image : '3.jpg', category: 'product', subcategory: 'shoe', size: 'wide'},
      {image_id: 40,image : 'DSC_6281white.jpg', category: 'product', subcategory: 'shoe', size: 'fat'},
      {image_id: 41,image : 'DSC_4437.jpg', category: 'product', subcategory: 'shoe', size: 'medium'},
      {image_id: 42,image : 'DSC_6878.jpg', category: 'product', subcategory: 'shoe', size: 'medium-2'},
      //perfume
      {image_id: 43,image : 'body-spray-purple.jpg', category: 'product', subcategory: 'perfume', size: 'square'},
      {image_id: 44,image : 'DSC_2521.jpg', category: 'product', subcategory: 'perfume', size: 'square'},
      {image_id: 45,image : 'Body-spray.jpg', category: 'product', subcategory: 'perfume', size: 'tall'},
      {image_id: 46,image : 'game-on-banner.jpg', category: 'product', subcategory: 'perfume', size: 'wide'},
      {image_id: 47,image : 'pure-black.jpg', category: 'product', subcategory: 'perfume', size: 'fat'},
      {image_id: 48,image : 'DSC_2494.jpg', category: 'product', subcategory: 'perfume', size: 'medium'},
      {image_id: 49,image : 'ATOR.jpg', category: 'product', subcategory: 'perfume', size: 'medium-2'},
      //random
      {image_id: 50,image : 'camera.jpg', category: 'product', subcategory: 'random', size: 'square'},
      {image_id: 51,image : 'ring.jpg', category: 'product', subcategory: 'random', size: 'square'},
      {image_id: 52,image : 'lense.jpg', category: 'product', subcategory: 'random', size: 'tall'},
      {image_id: 53,image : 'mac.jpg', category: 'product', subcategory: 'random', size: 'wide'},
      {image_id: 54,image : 'cloud.jpg', category: 'product', subcategory: 'random', size: 'fat'},
      {image_id: 55,image : 'need-me.jpg', category: 'product', subcategory: 'random', size: 'medium'},
      {image_id: 56,image : 'car.jpg', category: 'product', subcategory: 'random', size: 'medium-2'},
  ];

  this.setState({
    category :category,
    subcategory : subcategory,
    images: images,
    props : props
  })
}
  componentWillMount(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  render() {
    const images = this.state.images.filter( img => img.category == this.state.category && img.subcategory == this.state.subcategory);
    console.log(images);
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
                          <Link to= "/photobox/product/watch">Watch</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/sunglass">Sunglass</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/food">Food</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/perfume">Perfume</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/shoe">Shoe</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/bodycare">Body Care</Link>
                      </li>
                      <li>
                          <Link to= "/photobox/product/bottle">Bottle</Link>
                      </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <PhotoboxCategory images = {images}/>
      </React.Fragment>
    );
  }
}

export default Photobox;
