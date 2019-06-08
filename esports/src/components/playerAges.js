import React from "react";
import { Bar } from "react-chartjs-2";

class PlayerAges extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        type: "horizontalBar",
        labels: ["<20", "20-22", "23-24", "25-28", ">28"],
        datasets: [
          {
            label: ["Age Distribution of League of Legened Pro Players"],
            data: [23, 22, 23, 33, 13],
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

  render() {
    console.log("in playerAges");

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

export default PlayerAges;
