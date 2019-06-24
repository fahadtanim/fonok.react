import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

import {BrowserRouter,Route} from 'react-router-dom';
import Service from './Components/Service/Service';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Route path="/home" component={Home} />
      <Route path="/service" component={Service} />
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
