import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Songs from './Songs';
import Header from './components/Header';
import SelectSong from './SelectSong';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={SelectSong} />
          <Route exact path="/songs" component={Songs} />
        </div>
      </Router>
    )
  }
}

export default App;
