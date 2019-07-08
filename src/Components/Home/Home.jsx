import React, { Component } from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeServices from './HomeServices/HomeServices';
import "./Home.css";
import HomeAbout from './HomeAbout/HomeAbout';
import HomeTestimonial from './HomeTestimonial/HomeTestimonial';
import HomeContact from './HomeContact/HomeContact';
import WOW from "wowjs";
class Home extends Component {
    state = {  }
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
                <HomeSlider></HomeSlider>
                <div className="row" id = "get-down-row"></div>
                <HomeServices></HomeServices>
                <HomeAbout></HomeAbout>
                <HomeTestimonial></HomeTestimonial>
                <HomeContact></HomeContact>
            </React.Fragment>
            );
    }
}

 
export default Home;