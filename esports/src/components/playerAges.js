import React from "react";
import { Bar } from "react-chartjs-2";

class PlayerAges extends React.Component {
  constructor(props) {
    super(props);

    this.updateD3(props);
  }

  componentWillReceiveProps(newProps) {
    this.updateD3(newProps);
  }

  updateD3(props) {}

  render() {
    console.log("in playerAges");
    if (!this.props.data) {
      return null;
    } else {
      return (
        <div className="App containter">
          <Bar
            data={this.state.chartData}
            options={{
              legend: {
                display: true
              },
              maintainAspectRatio: false
            }}
          />{" "}
        </div>
      );
    }
  }
}

export default PlayerAges;
