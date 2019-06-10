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
            data: [36, 81, 0, 95, 435, 40],
            backgroundColor: [
              "rgba(45, 64, 89, 0.6)",
              "rgba(45, 64, 89, 0.6)",
              "rgba(45, 64, 89, 0.6)",
              "rgba(45, 64, 89, 0.6)",
              "rgba(45, 64, 89, 0.6)",
              "rgba(45, 64, 89, 0.6)"
            ]
          },
          {
            label: "CS:GO",
            data: [77, 97, 11, 433, 126, 46],
            backgroundColor: [
              "rgba(247, 56, 89, 0.6)",
              "rgba(247, 56, 89, 0.6)",
              "rgba(247, 56, 89, 0.6)",
              "rgba(247, 56, 89, 0.6)",
              "rgba(247, 56, 89, 0.6)",
              "rgba(247, 56, 89, 0.6)"
            ]
          },
          {
            label: "DOTA 2",
            data: [31, 41, 4, 155, 247, 8],
            backgroundColor: [
              "rgba(122, 199, 196, 0.6)",
              "rgba(122, 199, 196, 0.6)",
              "rgba(122, 199, 196, 0.6)",
              "rgba(122, 199, 196, 0.6)",
              "rgba(122, 199, 196, 0.6)",
              "rgba(122, 199, 196, 0.6)"
            ]
          },
          {
            label: "Overwatch",
            data: [44, 77, 0, 65, 267, 42],
            backgroundColor: [
              "rgba(196, 237, 222, 0.6)",
              "rgba(196, 237, 222, 0.6)",
              "rgba(196, 237, 222, 0.6)",
              "rgba(196, 237, 222, 0.6)",
              "rgba(196, 237, 222, 0.6)",
              "rgba(196, 237, 222, 0.6)"
            ]
          },
          {
            label: "Rainbow 6 Siege",
            data: [16, 42, 0, 61, 10, 11],
            backgroundColor: [
              "rgba(7, 104, 159, 0.6)",
              "rgba(7, 104, 159, 0.6)",
              "rgba(7, 104, 159, 0.6)",
              "rgba(7, 104, 159, 0.6)",
              "rgba(7, 104, 159, 0.6)",
              "rgba(7, 104, 159, 0.6)"
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
        <h1> Player Demographic Distriubtion by Game </h1>{" "}
        <p>
          Europe and South America have more prominent professional players in
          more realistic games like CS: GO and Rainbow 6, whereas Asia dominates
          more in cartoon aesthetic games like League, DOTA 2 and Overwatch.{" "}
        </p>{" "}
        <p>
          Similarly, Asian players are better at MOBA games whereas Europe has a
          strong control of FPS games.{" "}
        </p>{" "}
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
