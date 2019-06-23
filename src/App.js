import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Home/>
    </React.Fragment>
    
  );
}

export default App;
