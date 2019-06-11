import React, { Component } from "react";

import PlayerAges from "./components/playerAges";
import PlayerDemographics from "./components/playerDemographics";
import Viewership from "./components/Viewership";
import WinningPlayers from "./components/WinningPlayers";
import CountryEarnings from "./components/CountryEarnings";
import Prize from "./components/Prize";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    country: [],
    prizePools: [],
    dates: [],
    views: []
  };

  render() {
    if (this.state.data.length < 1) {
      return (
        <div className="container">
          <div className="chart">
            <PlayerAges />
          </div>{" "}
          <div className="chart">
            <PlayerDemographics />
          </div>{" "}
          <div className="chart">
            <Viewership />
          </div>{" "}
          <div className="chart">
            <CountryEarnings />
          </div>{" "}
          <div className="chart">
            <WinningPlayers />
          </div>{" "}
          <div className="chart">
            <Prize />
          </div>{" "}
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
