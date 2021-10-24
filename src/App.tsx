import React, { Component } from 'react';
import EventData from './EventData';
import Nav from './Nav';
import Featured from './Featured';
import EventPanel from './EventPanel';
import About from './About';
import Footer from './Footer';
import './App.css';


interface AppState {
  events: EventData[]; // the data structure representing the events currently inspected
}

class App extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Nav />
        <Featured />
        <div className="content">
        <EventPanel />
        <About />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;