import React from "react";
import { Bubble } from "react-chartjs-2";


class Prize extends React.Component {
  constructor() {
    super();
    this.state = {
        rs:null,
      datasets:[
        {
         label: ["Fortnite"],
         backgroundColor: "rgba(252, 52, 92, 0.6)",
         borderColor: "rgba(252, 52, 92, 0.6)",
         data: [
           {x:20055832.14	,r:174/2,y:1442}
        ]
        },
         {
          label: ["Dota 2"],
          backgroundColor: "rgba(142, 165, 235, 0.6)",
          borderColor: "rgba(142, 165, 235, 0.6)",
          data: [
            {x:41420078.99,r:167/2,y:1118}
         ]
       },
       {
        label: ["LoL"],
        backgroundColor: "rgba(255, 221, 0, 0.6)",
        borderColor: "rgba(255, 221, 0, 0.6)",
          data: [
            {x:14512216.23,r:178/2,y:1799}
         ]
       },
       {
        label: ["Overwatch"],
        backgroundColor: "rgba(163, 222, 131, 0.6)",
        borderColor: "rgba(163, 222, 131, 0.6)",
          data: [
            {x:6590091.65,r:95/2,y:1452}
         ]
       },
       {
        label: ["CS:GO"],
        backgroundColor: "rgba(175, 80, 175, 0.6)",
        borderColor: "rgba(175, 80, 175, 1)",
          data: [
            {x:22657892.39,r:828/2,y:4548}
         ]
       },
       {
        label: ["Rainbow Six Siege"],
        backgroundColor: "rgba(187, 156, 42, 0.6)",
        borderColor: "rgba(187, 156, 42, 1)",
          data: [
            {x:1884653.23,r:44/2,y:401}
         ]
       },
       {
        label: ["PUBG"],
        backgroundColor: "rgba(232, 67, 150, 0.6)",
        borderColor: "rgba(232, 67, 150, 1)",
          data: [
            {x:7572167.16,r:107/2,y:1473}
         ]
       },
       {
        label: ["Hearthstone"],
        backgroundColor: "rgba(43, 211, 230, 0.6)",
        borderColor: "rgba(43, 211, 230, 1)",
          data: [
            {x:4711852.27,r:131/2,y:828}
         ]
       },
       {
        label: ["Heroes of the Storm"],
        backgroundColor: "rgba(137, 172, 158, 0.6)",
        borderColor: "rgba(137, 172, 158, 1)",
          data: [
            {x:5277279.76,r:34/2,y:368}
         ]
       },
       {
        label: ["Starcraft II"],
        backgroundColor: "rgba(246, 178, 138, 0.6)",
        borderColor: "rgba(246, 178, 138, 1)",
          data: [
            {x:4013357.65,r:434/2,y:364}
         ]
       },
       {
        label: ["Call of Duty: World War II"],
        backgroundColor: "rgba(183, 202, 125, 0.6)",
        borderColor: "rgba(183, 202, 125, 1)",
          data: [
            {x:4276751.83,r:38/2,y:220}
         ]
       },
       {
        label: ["Arena of Valor"],
        backgroundColor: "rgba(7, 178, 64, 0.6)",
        borderColor: "rgba(7, 178, 64, 1)",
          data: [
            {x:3324141.25,r:18/2,y:210}
         ]
       },
       {
        label: ["Rocket League"],
        backgroundColor: "rgba(163, 53, 72, 0.6)",
        borderColor: "rgba(163, 53, 72, 1)",
          data: [
            {x:2297363.32,r:74/2,y:287}
         ]
       },
        ]
    };
  }

  render() {
    return (
      <div className="App containter">
        <h1>Prize Pool Game Distribution of 2018</h1>
        <Bubble
          data={{
            datasets: this.state.datasets
          }}
          options={{
            legend: {
              display: true
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              streaming: {
                frameRate: 120
              }
            },
            scales: {
              xAxes: [{
                  gridLines: {
                      display:true
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Total Prize Pool Money',
                      fontStyle: 'bold',
                      fontSize: 20
                  },
                 ticks: {
                   callback: function(value, index, values) {
                     if(parseInt(value) >= 1000){
                       return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                     } else {
                       return '$' + value;
                     }
                   }
                 }
             }],
             yAxes: [{
                 scaleLabel: {
                     display: true,
                     labelString: '# of Tournaments',
                     fontStyle: 'bold',
                     fontSize: 20
                 },
                 stacked:true,
                 gridLines: {
                     display:true,
                 },
                 ticks: {
                    suggestedMax: 100,
                    suggestedMin: -10000,
                    callback: function(value, index, values) {
                      if(parseInt(value) >= 1000) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        return value;
                      }
                    }
                }
            }],
            },
            tooltips: {
              callbacks: {
                // this callback is used to create the tooltip label
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                  // add the currency symbol $ to the label
                  var data = JSON.stringify(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                  // var revenue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r * 2;
                  // revenue = Math.trunc(revenue);
                  // var value = ': ' + commaFormat(revenue);
                  dataLabel += ': ' + data;
                  // return the text to display on the tooltip
                  return dataLabel;
                }
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Prize;
//function set commas
function commaFormat(num){
  let strNum = num.toString()
  let strSplit = strNum.split('.')
  let result =''
  let digitSplit = strSplit[0].split('')
  let decSplit = (strSplit[1]) ? ('.'+strSplit[1]) : ('')
  let digitSplitMod = digitSplit.length % 3 -1

  if(digitSplit.length > 3){
    for(let i=0;i<digitSplit.length-3;i++){
      //console.log(digitSplit[i])
      if(i%3 === digitSplitMod){
        //console.log('comma')
        digitSplit[i] = digitSplit[i]+','
      }
    }
  }
  result = digitSplit.join('')+decSplit
  return result
}
