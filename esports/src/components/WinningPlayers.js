import React from "react";
import { Pie } from "react-chartjs-2";
class WinningPlayers extends React.Component {
  constructor() {
    super();
    this.state = {
      labels : ['United States','Republic of Korea','China','Sweden','Germany','Russian Federation','France','Denmark','Canada','United Kingdom','Brazil','Combined Others'],
      datasets:[{
        data:[2076,1521,778,772,664,478,370,330,325,248,242,1975],
        backgroundColor:["#FC345C","#8EA5EB","#A3DE83","#FFDD00","#af50af","#bb9c2a","#E84396","#2bd3e6","#89ac9e","#f6b28a","#b7ca7d","#07b240","#a33548"]
      }]
    };
  }

  render() {
    console.log("in WinnningPlayers");

    return (
      <div className="containter">
      <h1>Percentage of Winning Players by Country</h1>
      <Pie
        data={{
          labels:this.state.labels,
          datasets:this.state.datasets
        }}
        options={{
          tooltips:{
            callbacks:{
              label: function(tooltipItem,data) {
                let value = data.datasets[0].data[tooltipItem.index]
                return commaFormat(value);
              },
              title: function(tooltipItem,data){
                return data.labels[tooltipItem[0].index];
              }
            },
            bodyFontSize:16
          }
        }}
      />
      </div>
    );
  }
}

export default WinningPlayers;
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
