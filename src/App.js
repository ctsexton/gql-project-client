import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Songs from './Songs';
import Artists from './Artists';
import Add from './Add';
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
          <Route path="/songs" component={Songs} />
          <Route path="/add" component={Add} />
          <Route path="/artists" component={Artists} />
        </div>
      </Router>
    )
  }
}

export default App;
