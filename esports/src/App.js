import React, { Component } from "react";
// import * as d3 from 'd3';
// import _ from 'lodash';

// import Preloader from './components/Preloader.js';
import PlayerAges from "./components/playerAges";
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
    if (this.state.data.length < 1) {
      return (
        <div className="App container">
          <PlayerAges />
        </div>
      );
    }
    return (
      <div className="App">
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
