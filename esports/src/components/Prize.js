import React from "react";
import { Bubble } from "react-chartjs-2";


class Prize extends React.Component {
  constructor() {
    super();
    this.state = {
        rs:null,
      datasets:[
        {
         label: ["China"],
         backgroundColor: "#FC345C",
         borderColor: "#FC345C",
         data: [
           {x: 39,y:7,r: 15},{x: 15,y: 5,r: 15}
        ]
       }
      ]
    };
  }

  render() {
    return (
      <div className="App containter">
      <Bubble
        data={{
          datasets: this.state.datasets
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
