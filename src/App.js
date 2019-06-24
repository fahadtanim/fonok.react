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

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Route path="/home" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
