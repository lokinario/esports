import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";
class Viewership extends React.Component {
  constructor() {
    super();
    console.log("line constructed");
    this.state = {
      chartData: {
        datasets: [
          // {
          //   label: "LOL",
          //   data: [
          //     {
          //       x: 0,
          //       y: 1
          //     },
          //     {
          //       x: 1,
          //       y: 2
          //     },
          //     {
          //       x: 2,
          //       y: 3
          //     }
          //   ],
          //   borderColor: ["#FC345C"],
          //   pointHoverBackgroundColor: "white",
          //   backgroundColor: ["#FC345C"],
          //   fill: false,
          //   borderWidth: 1.0
          // },
          // {
          //   label: "CSGO",
          //   data: [
          //     {
          //       x: 0,
          //       y: 2
          //     },
          //     {
          //       x: 1,
          //       y: 1
          //     },
          //     {
          //       x: 2,
          //       y: 5
          //     }
          //   ],
          //   borderColor: ["#8EA5EB"],
          //   backgroundColor: ["#8EA5EB"],
          //   fill: false,
          //   borderWidth: 1.0
          // },
          // {
          //   label: "OW",
          //   data: [
          //     {
          //       x: 0,
          //       y: 1
          //     },
          //     {
          //       x: 1,
          //       y: 12
          //     },
          //     {
          //       x: 2,
          //       y: 3
          //     }
          //   ],
          //   borderColor: ["#A3DE83"],
          //   backgroundColor: ["#A3DE83"],
          //   fill: false,
          //   borderWidth: 1.0
          // },
          {
            label: "Fortnite",
            data:[],
            borderColor: ["#FFDD00"],
            backgroundColor: ["#FFDD00"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "LoL",
            data:[],
            borderColor:["#FC345C"],
            backgroundColor:["#FC345C"],
            fill: false,
            borderWidth:1.0
          }
        ]
      }
    };
    //console.log(this.state);
  }

  //   componentDidMount() {
  //     console.log("line did mount");
  //     this.setState(this.updateData());
  //     //console.log(this.state);
  //   }

  //   }

  // // componentWillUpdate() {
  // //   this.keepUpdate();
  // // }

  // updateData() {
  //   return {
  //     chartData: {
  //       datasets: [
  //         {
  //           label: "CPU percentage",
  //           data: [{ x: Date.now(), y: Math.random() }],
  //           borderColor: ["#00B8B1"],
  //           fill: false,
  //           borderWidth: 1.69
  //         }
  //       ]
  //     }
  //   };
  // }
  //setInterval(this.keepUpdate(),1000);

  render() {
    if (true) {
      console.log("in Viewership");
    }
    if (this.state) {
      return (
        <div className="app container">
          <Line
            data={this.state.chartData}
            width={200}
            height={100}
            options={{
              legend: {
                display: true
              },
              pan: {
                enabled: true, // Enable panning
                mode: "x", // Allow panning in the x direction
                rangeMin: {
                  x: null // Min value of the delay option
                },
                rangeMax: {
                  x: null // Max value of the delay option
                }
              },
              zoom: {
                enabled: true, // Enable zooming
                mode: "x", // Allow zooming in the x direction
                rangeMin: {
                  x: null // Min value of the duration option
                },
                rangeMax: {
                  x: null // Max value of the duration option
                }
              },
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      zeroLineColor: "white"
                    },
                    ticks: {
                      fontColor: "white"
                    }
                  }
                ],
                yAxes: [
                  {
                    gridLines: {
                      zeroLineColor: "white"
                    },
                    ticks: {
                      fontColor: "white"
                    }
                  }
                ]
              }
            }}
          />{" "}
        </div>
      );
    } else {
      return <div className="app container"> no data </div>;
    }
  }
}

export default Viewership;
