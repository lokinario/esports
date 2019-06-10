import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class PlayerDemographics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        type: "horizontalBar",
        labels: [
          "North America",
          "South America",
          "Africa",
          "Europe",
          "Asia",
          "Australia"
        ],
        datasets: [
          {
            label: "League of Legends",
            data: [19, 40, 0, 27, 184, 14],
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
            data: [77, 97, 11, 433, 126, 46],
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
            data: [31, 41, 4, 155, 247, 8],
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
            data: [44, 77, 0, 65, 267, 42],
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
            data: [16, 42, 0, 61, 10, 11],
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

  componentDidMount() {
    console.log("playedemo mounted");
  }

  render() {
    console.log("in playerDemo");
    return (
      <div className="App containter">
        <h1> Player Contenient Distriubtion by Game </h1>{" "}
        <HorizontalBar
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

export default PlayerDemographics;
