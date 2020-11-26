import React, { Component } from 'react';
import './App.css';
import Home from '../src/containers/Home/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        
    
        
      </div>
    );
  }
}

export default App;
