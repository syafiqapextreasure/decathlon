import React from "react";
import Chart from "react-apexcharts";
import "./hourChart.css";

const HourChart = () => {
  const state = {
    series: [
      {
        name: "Piloted",
        data: [
          2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200, 2200,
        ],
      },
      {
        name: "Actual",
        data: [
          2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800, 2800,
        ],
      },
    ],
    options: {
      colors: ["#c5c1bb", "#4c5eff"],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
       categories: ['W1', '', '', '', 'W5', '', '', '', '', 'W10', '', '', '', '', 'W15', '', '', '', '', 'W20', '', '', '', '', 'W25', '', '', '', '', 'W30', '', '', '', '', 'W35', '', '', '', '', 'W40', '', '', '', '', 'W45', '', '', '', '', 'W50', '', ''],
      },
      yaxis: {
        title: {
          text: "Hour(H)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "H";
          },
        },
      },
    },
  };
  return (
    <div className="chartContainer">
      <p className="chartHeading">Hour(Piloted vs Actual)</p>
      <div id="chart">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default HourChart;
