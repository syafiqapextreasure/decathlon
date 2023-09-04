import React from 'react'
import Chart from 'react-apexcharts'
import "./toChart.css"

const ToChart = () => {
    const state = {
          
          series: [{
            name: 'Piloted',
            data: [420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420, 420,]
          }, {
            name: 'Actual',
            data: [480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480, 480,]
          }],
          options: {
            colors: ["#c5c1bb", "#ffc74c"],
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false,
              style:{colors: ['#C6C1BB','#FFC74C']}
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
               categories: ['W1', '', '', '', 'W5', '', '', '', '', 'W10', '', '', '', '', 'W15', '', '', '', '', 'W20', '', '', '', '', 'W25', '', '', '', '', 'W30', '', '', '', '', 'W35', '', '', '', '', 'W40', '', '', '', '', 'W45', '', '', '', '', 'W50', '', ''],
            },
            yaxis: {
              title: {
                text: 'TO(RM)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + "k" 
                }
              }
            }
          },
        
        
        };
  return (
    <div className="chartContainer">
        <p className='chartHeading'>TO(Piloted vs Actual)</p>
        <div id="chart">
            <Chart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    </div>
  )
}


export default ToChart
