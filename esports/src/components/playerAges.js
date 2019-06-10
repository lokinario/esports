import React from "react";
import { Bar } from "react-chartjs-2";

class PlayerAges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        type: "horizontalBar",
        labels: ["<20", "20-22", "23-24", "25-28", ">28"],
        datasets: [
          {
            label: "League of Legends",
            data: [383, 674, 275, 172, 58],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(54, 162, 235, 0.6)"
            ]
          },
          {
            label: "CS:GO",
            data: [48, 135, 93, 120, 63],
            backgroundColor: [
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 206, 86, 0.6)"
              // "rgba(75, 192, 192, 0.6)",
              // "rgba(153, 102, 255, 0.6)",
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
            ]
          },
          {
            label: "DOTA 2",
            data: [48, 135, 93, 120, 63],
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)"
              // "rgba(75, 192, 192, 0.6)",
              // "rgba(153, 102, 255, 0.6)",
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
            ]
          },
          {
            label: "Overwatch",
            data: [157, 71, 30, 11, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)"
              // "rgba(153, 102, 255, 0.6)",
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
            ]
          },
          {
            label: "Rainbow 6 Siege",
            data: [157, 71, 30, 11, 2],
            backgroundColor: [
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 0.6)"
              // "rgba(255, 159, 64, 0.6)",
              // "rgba(255, 99, 132, 0.6)"
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

  componentDidMount() {
    console.log("playerage mounted");
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
            scales: {
              xAxes: [
                {
                  stacked: true
                }
              ],
              yAxes: [
                {
                  stacked: true
                }
              ]
            },
            maintainAspectRatio: true
          }}
        />{" "}
      </div>
    );
  }
}

export default PlayerAges;
