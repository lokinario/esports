import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.piecelabel.js";

class WinningPlayers extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "United States",
        "Republic of Korea",
        "China",
        "Sweden",
        "Germany",
        "Russian Federation",
        "France",
        "Denmark",
        "Canada",
        "United Kingdom",
        "Brazil",
        "Smaller Countries Combined"
      ],
      datasets: [
        {
          data: [2076, 1521, 778, 772, 664, 478, 370, 330, 325, 248, 242, 1975],
          backgroundColor: [
            "#FC345C",
            "#8EA5EB",
            "#A3DE83",
            "#FFDD00",
            "#af50af",
            "#bb9c2a",
            "#E84396",
            "#2bd3e6",
            "#89ac9e",
            "#f6b28a",
            "#b7ca7d",
            "#07b240",
            "#a33548"
          ]
        }
      ]
    };
  }

  render() {
    console.log("in WinnningPlayers");

    return (
      <div className="containter">
        <h1> Player Winnings by Country (1998 - 2018) </h1>{" "}
        <p>
          The United States and Korea contain over 33 % of the of the player
          winnings over a 20 year long period.Every other country has about the
          same number of winnings, except for the "smaller countries combined"
          which is made up of over 50 countries, however the United States makes
          up 21.33 % .This is almost 5 times as much as many of the other
          countries.{" "}
        </p>{" "}
        <Doughnut
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          options={{
            pieceLabel: [
              {
                render: "label",
                position: "outside",
                fontColor: "black",
                fontSize: 14
              },
              {
                render: "percentage",
                fontColor: "black",
                fontSize: 14,
                fontStyle: "bold",
                precision: 2
              }
            ],
            tooltips: {
              callbacks: {
                // this callback is used to create the tooltip label
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  var dataLabel = data.labels[tooltipItem.index];
                  // add the currency symbol $ to the label
                  var winnings =
                    data.datasets[tooltipItem.datasetIndex].data[
                      tooltipItem.index
                    ];
                  var value = ": " + commaFormat(winnings);
                  dataLabel += value;
                  // return the text to display on the tooltip
                  return dataLabel;
                },
                bodyFontSize: 16
              }
            }
          }}
        />{" "}
      </div>
    );
  }
}

export default WinningPlayers;
//function set commas
function commaFormat(num) {
  let strNum = num.toString();
  let strSplit = strNum.split(".");
  let result = "";
  let digitSplit = strSplit[0].split("");
  let decSplit = strSplit[1] ? "." + strSplit[1] : "";
  let digitSplitMod = (digitSplit.length % 3) - 1;

  if (digitSplit.length > 3) {
    for (let i = 0; i < digitSplit.length - 3; i++) {
      //console.log(digitSplit[i])
      if (i % 3 === digitSplitMod) {
        //console.log('comma')
        digitSplit[i] = digitSplit[i] + ",";
      }
    }
  }
  result = digitSplit.join("") + decSplit;
  return result;
}
