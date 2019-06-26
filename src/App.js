import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import {BrowserRouter,Route} from 'react-router-dom';
import Service from './Components/Service/Service';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Photobox from './Components/Photobox/Photobox';
import PricingPlan from './Components/PricingPlan/PricingPlan';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/photobox" component={Photobox} />
      <Route exact path="/photobox/:category/:subcategory" component={Photobox}/>
      <Route exact path="/service" component={Service} />
      <Route exact path="/pricing" component={PricingPlan} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
