import React from "react";
import { Bar } from "react-chartjs-2";

class PlayerAges extends React.Component {

  constructor() {
    super();
    this.state = {
      leagueData: {
        type: "horizontalBar",
        labels: ["<20", "20-22", "23-24", "25-28", ">28"],
        datasets: [
          {
            label: ["Age Distribution of 1534 Notable LoL Players"],
            data: [372, 664, 351, 90, 57],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      },
      csgoData: {
        type: "horizontalBar",
        labels: ["<20", "20-22", "23-24", "25-28", ">28"],
        datasets: [
          {
            label: ["Age Distribution of 459 Notable CS:GO Players"],
            data: [49, 136, 133, 79, 62],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }

  // constructor(props) {
  //   super(props);
  //
  //   this.updateD3(props);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   this.updateD3(newProps);
  //
  // }

  // updateD3(props) {}

  render() {
    return (
      <div className="containter">
        <Bar
          data={this.state.leagueData}
          options={{
            legend: {
              display: true
            },
            maintainAspectRatio: true
          }}
        />
        <Bar
          data={this.state.csgoData}
          options={{
            legend: {
              display: true
            },
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

export default PlayerAges;
