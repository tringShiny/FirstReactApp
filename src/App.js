import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Midcontent from './components/mid_content/mid_content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div class="parent">
        <Header/>
        <Midcontent/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
