import React, { Component } from "react";
// import * as d3 from 'd3';
// import _ from 'lodash';

// import Preloader from './components/Preloader.js';
import PlayerAges from "./components/playerAges";
import Viewership from "./components/Viewership";
import WinningPlayers from "./components/WinningPlayers";
import CountryEarnings from "./components/CountryEarnings";
import Prize from "./components/Prize";
import './App.css';
import fortnite from "./assets/Twitch/Fortnite.txt";
// import SunburstDistribution from "./components/Sunburst";
// import Histogram from "./components/Histogram";
// import {
//   loadAllData
// } from './DataHanding';

class App extends Component {
  state = {
    data: [],
    country: [],
    prizePools: [],
    dates: [],
    views: []
  };
  // componentWillMount() {
  //   loadAllData(data => this.setState(data))
  // }
  render() {
    console.log(fortnite);
    if (this.state.data.length < 1) {
      return (
        <div className="container">
          <div className="chart">
            <PlayerAges />
          </div>
          <div className="chart">
            <Viewership />
          </div>
          <div className="chart">
            <CountryEarnings />
          </div>
          <div className="chart">
            <WinningPlayers />
          </div>
          <div className="chart">
            <Prize />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>
          {" "}
          Loaded {this.state.data.length}
          values{" "}
        </h1>{" "}
      </div>
    );
  }
}
export default App;
