import React, { Component } from 'react';
import './App.css';

import Navbar from './component/Navbar'
import Topsection from './component/Top-section'
import Item from './component/Item'
import Footer from './component/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Topsection headtitle="Welcome Alex Saurav" headcontent="Something short and leading about the collection below—its contents, the creator,
         etc. Make it short and sweet, but not too short so 
         folks don’t simply skip over it entirely."/>
        <Item />
        <Footer />
      </div>
    );
  }
}

export default App;
