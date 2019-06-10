import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";
class CountryEarnings extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels:['1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
        datasets: [
          {
            label: "United States",
            data:[{x:1998 ,y: 94250.0},{x: 1999,y: 124261.09},{x:2000 ,y: 241013.4},{x:2001 ,y: 196472.65},{x:2002 ,y:169229.3 },
              {x:2003 ,y:265960.0 },{x:2004 ,y: 434701.72},{x:2005 ,y:841732.98},{x:2006 ,y: 1549643.38},{x:2007 ,y: 2036636.01},
            {x:2008 ,y:1531545.77 },{x:2009 ,y:678478.12 },{x:2010 ,y: 1562687.68},{x:2011 ,y:2051385.36 },{x: 2012,y: 1281218.86},
            {x:2013 ,y: 3740156.01},{x:2014 ,y:3986768.1 },{x:2015 ,y:13255080.31 },{x:2016 ,y: 15574628.75},{x:2017 ,y: 15175145.18},
            {x:2018 ,y:29592929.03}],
            borderColor: ["#FFDD00"],
            backgroundColor: ["#FFDD00"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "China",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000,y:0},{x:2001 ,y: 17000.0},{x:2002 ,y:8500.0 },{x:2003 ,y:10000.0 },{x:2004 ,y:145625.91},{x:2005 ,y:157310.3},
            {x:2006 ,y: 324923.32},{x:2007 ,y: 214059.16},{x:2008 ,y:246539.73},{x:2009 ,y:335208.77},{x:2010 ,y:339666.36},
            {x:2011 ,y:717629.36},{x: 2012,y:2036844.72},{x:2013 ,y: 2218437.55},{x:2014 ,y:12098419.29},{x:2015 ,y:14185754.14},
            {x:2016 ,y:19765733.93},{x:2017 ,y:16613120.38},{x:2018 ,y:16813317.22}],
            borderColor: ["#FC345C"],
            backgroundColor: ["#FC345C"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Rebublic of Korea",
            data:[{x:1998,y:0},{x: 1999,y:75876.4},{x:2000 ,y:199411.78},{x:2001 ,y:160290.09},{x:2002 ,y:139644.26},
              {x:2003 ,y:272626.59},{x:2004 ,y:611689.48},{x:2005 ,y:781694.9},{x:2006 ,y:933532.78},{x:2007 ,y:1517120.93},
            {x:2008 ,y:1506629.08},{x:2009 ,y:933787.7},{x:2010 ,y:1454914.0},{x:2011 ,y:2731645.3},{x: 2012,y:3778618.89},
            {x:2013 ,y:5429863.26},{x:2014 ,y:5675449.55},{x:2015 ,y:6569180.33},{x:2016 ,y:12690444.53},{x:2017 ,y:12151238.71},
            {x:2018 ,y:14122891.68}],
            borderColor: ["#8EA5EB"],
            backgroundColor: ["#8EA5EB"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Sweden",
            data:[{x:1998,y:150.0},{x: 1999,y:3000.0},{x:2000 ,y:86874.14},{x:2001 ,y:97120.85},{x:2002 ,y:102648.92},
            {x:2003 ,y:363269.3},{x:2004 ,y:307269.88},{x:2005 ,y:399509.34},{x:2006 ,y:576163.19},{x:2007 ,y:464999.41},
            {x:2008 ,y:508043.08},{x:2009 ,y:434889.88},{x:2010 ,y:392264.55},{x:2011 ,y:450998.76},{x: 2012,y:499530.09},
            {x:2013 ,y:2730034.88},{x:2014 ,y:2081941.45},{x:2015 ,y:4027726.1},{x:2016 ,y:5357457.19},{x:2017 ,y:4795999.5},
            {x:2018 ,y:6325898.81}],
            borderColor: ["#A3DE83"],
            backgroundColor: ["#A3DE83"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Denmark",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000 ,y:7930.39},{x:2001 ,y:17385.82},{x:2002 ,y:6193.46},{x:2003 ,y:25393.92},{x:2004 ,y:108441.22},
            {x:2005 ,y:90554.67},{x:2006 ,y:69003.91},{x:2007 ,y:193117.38},{x:2008 ,y:255649.82},{x:2009 ,y:157091.95},
            {x:2010 ,y:157402.36},{x:2011 ,y:187269.23},{x: 2012,y:291914.87},{x:2013 ,y:256908.62},{x:2014 ,y:667973.69},
            {x:2015 ,y:2261455.69},{x:2016 ,y:4560406.23},{x:2017 ,y:5019860.11},{x:2018 ,y:10538820.23}],
            borderColor: ["#af50af"],
            backgroundColor: ["#af50af"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Russian Federation",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000 ,y:6757.99},{x:2001 ,y:41630.48},{x:2002 ,y:110158.9},{x:2003 ,y:61292.2},{x:2004 ,y:132983.52},
            {x:2005 ,y:174795.64},{x:2006 ,y:354229.91},{x:2007 ,y:266957.85},{x:2008 ,y:210955.32},{x:2009 ,y:128007.65},
            {x:2010 ,y:167902.69},{x:2011 ,y:400454.5},{x: 2012,y:661244.92},{x:2013 ,y:474255.01},{x:2014 ,y:1124515.8},
            {x:2015 ,y:2066860.59},{x:2016 ,y:2279007.72},{x:2017 ,y:3576238.51},{x:2018 ,y:6994130.04}],
            borderColor: ["#bb9c2a"],
            backgroundColor: ["#bb9c2a"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Germany",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000 ,y:8476.33},{x:2001 ,y:76820.45},{x:2002 ,y:118006.98},{x:2003 ,y:236966.01},{x:2004 ,y:283095.02},
            {x:2005 ,y:419773.2},{x:2006 ,y:380987.8},{x:2007 ,y:377025.88},{x:2008 ,y:455616.1},{x:2009 ,y:289710.79},
            {x:2010 ,y:339581.71},{x:2011 ,y:325028.8},{x: 2012,y:454100.52},{x:2013 ,y:573103.78},{x:2014 ,y:883270.01},
            {x:2015 ,y:1704017.77},{x:2016 ,y:2432399.56},{x:2017 ,y:4808676.63},{x:2018 ,y:4277240.97}],
            borderColor: ["#E84396"],
            backgroundColor: ["#E84396"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Canada",
            data:[{x:1998 ,y:12400.0},{x: 1999,y:60416.35},{x:2000 ,y:37177.49},{x:2001 ,y:54025.0},{x:2002 ,y:59366.68},
            {x:2003 ,y:29996.99},{x:2004 ,y:35709.99},{x:2005 ,y:117091.67},{x:2006 ,y:57352.65},{x:2007 ,y:320430.88},
            {x:2008 ,y:161952.82},{x:2009 ,y:44501.77},{x:2010 ,y:127742.72},{x:2011 ,y:216816.84},{x: 2012,y:436998.58},
            {x:2013 ,y:500896.06},{x:2014 ,y:1377502.75},{x:2015 ,y:3704959.37},{x:2016 ,y:3168828.64},{x:2017 ,y:2834918.85},
            {x:2018 ,y:4965144.41}],
            borderColor: ["#2bd3e6"],
            backgroundColor: ["#2bd3e6"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "France",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000 ,y:701.05},{x:2001 ,y:27747.58},{x:2002 ,y:18217.66},{x:2003 ,y:45593.42},{x:2004 ,y:63226.9},
            {x:2005 ,y:82250.96},{x:2006 ,y:204796.93},{x:2007 ,y:193036.79},{x:2008 ,y:189086.84},{x:2009 ,y:140204.25},
            {x:2010 ,y:221675.41},{x:2011 ,y:350969.23},{x: 2012,y:448353.21},{x:2013 ,y:503724.32},{x:2014 ,y:646483.49},
            {x:2015 ,y:1446786.48},{x:2016 ,y:2104706.68},{x:2017 ,y:3688162.14},{x:2018 ,y:6138405.61}],
            borderColor: ["#89ac9e"],
            backgroundColor: ["#89ac9e"],
            fill: false,
            borderWidth: 1.0
          },
          {
            label: "Finland",
            data:[{x:1998,y:0},{x:1999,y:0},{x:2000 ,y:2190.84},{x:2001 ,y:15110.55},{x:2002 ,y:4394.8},{x:2003 ,y:11352.45},{x:2004 ,y:55319.0},
            {x:2005 ,y:30744.32},{x:2006 ,y:55988.19},{x:2007 ,y:126524.03},{x:2008 ,y:89854.44},{x:2009 ,y:52528.5},
            {x:2010 ,y:79714.43},{x:2011 ,y:103737.55},{x: 2012,y:111599.36},{x:2013 ,y:159091.0},{x:2014 ,y:234250.33},
            {x:2015 ,y:357754.06},{x:2016 ,y:1460858.97},{x:2017 ,y:3960309.07},{x:2018 ,y:7373971.05}],
            borderColor: ["#f6b28a"],
            backgroundColor: ["#f6b28a"],
            fill: false,
            borderWidth: 1.0
          },
        ]
      }
    };
  }

  render() {
    return (
      <div className="container">
        <h1>eSports Tournament Earnings by Country</h1>
        <p>
          There was a steady rate of recorded tournament earnings between the years of 1998 to 2011.
          After this point, the amount of eSports Tournament earnings per year began growing at sporatic
          rate with huge spikes of growth such as 2013-2014 for China or 2017-2018 for the United States.
          This could be because of a new release of a game or an increase in sponsorship and advertisment
          for a tournament or game.
        </p>{" "}
        <Line
          data={this.state.chartData}
          width={300}
          height={150}
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
            plugins: {
              streaming: {
                frameRate: 120
              }
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Total Earnings',
                        fontStyle: 'bold',
                        fontSize: 20
                    },
                   ticks: {
                     beginAtZero: true,
                     callback: function(value, index, values) {
                       if(parseInt(value) >= 1000){
                         return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                       } else {
                         return '$' + value;
                       }
                     }
                   }
               }],
               xAxes: [{
                   scaleLabel: {
                       display: true,
                       labelString: 'Year',
                       fontStyle: 'bold',
                       fontSize: 20
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
                  var revenue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
                  revenue = Math.trunc(revenue);
                  var value = ': ' + commaFormat(revenue);
                  dataLabel += value;
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

export default CountryEarnings;

function commaFormat(value) {
  if(parseInt(value) >= 1000){
    return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return '$' + value;
  }
}
