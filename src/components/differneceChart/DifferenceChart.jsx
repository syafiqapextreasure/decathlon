import React from "react";
import "./differenceChart.css";
import Chart from "react-apexcharts";

const DifferenceChart = () => {
  const state = {
    series: [
      {
        name: "TO(RM)",
        data: [
          350, 280, 290, 310, 360, 380, 400, 450, 460, 470, 430, 380, 390, 580,
          560, 510, 530, 490, 480, 380, 280, 580, 530, 580, 300, 380, 480, 450,
          460, 470, 490, 500, 520, 530, 540, 550, 520, 480, 470, 460, 420, 440,
          460, 480, 500, 520, 560, 580, 550, 500, 490, 480,
        ],
      },
      {
        name: "Hours(H)",
        data: [
          2000, 2050, 2100, 2150, 2200, 2220, 2180, 2230, 1900, 1920, 1950,
          2000, 2010, 2030, 2080, 2100, 2200, 2000, 1950, 1920, 1940, 1900,
          1920, 1930, 1950, 1980, 2000, 2010, 2030, 2040, 2060, 2090, 2120,
          2140, 2160, 2150, 2180, 2200, 2210, 2240, 2200, 2180, 2160, 2190,
          2200, 2150, 2140, 2160, 2130, 2160, 2120, 2100,
        ],
      },
    ],
    options: {
      colors: ["#358cff", "#fc5855"],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        row: {
          colors: ["transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "W1",
          "",
          "",
          "",
          "W5",
          "",
          "",
          "",
          "",
          "W10",
          "",
          "",
          "",
          "",
          "W15",
          "",
          "",
          "",
          "",
          "W20",
          "",
          "",
          "",
          "",
          "W25",
          "",
          "",
          "",
          "",
          "W30",
          "",
          "",
          "",
          "",
          "W35",
          "",
          "",
          "",
          "",
          "W40",
          "",
          "",
          "",
          "",
          "W45",
          "",
          "",
          "",
          "",
          "W50",
          "",
          "",
        ],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          title: {
            text: "TO(RM)",
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: "Hours",
          opposite: true,
          axisTicks: {
            show: true,
          },
          title: {
            text: "Hours",
          },
        },
      ],
    },
  };
  return (
    <div className="chartContainer">
      <p className="chartHeading">TO vs Hours</p>
      <div id="chart">
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default DifferenceChart;
