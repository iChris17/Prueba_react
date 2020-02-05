import React, { Component, Fragment } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const TypeChart = [
  {
    chart: {
      type: "line"
    },
    title: {
      text: "Grafica de linea"
    },
    xAxis: {
      categories: ["A", "B"]
    },
    series: [{ data: [1, 2] }],
  },
  {
    chart: {
      type: "bar"
    },
    title: {
      text: "Grafica de Barra"
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"]
    },
    yAxis: {
      title: {
        text: "Fruit eaten"
      }
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4]
      },
      {
        name: "John",
        data: [5, 7, 3]
      }
    ]
  },
  {
    chart: {
      type: "pie"
    },
    title: {
      text: "Grafica de Pastel"
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"]
    },
    yAxis: {
      title: {
        text: "Fruit eaten"
      }
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4]
      },
      {
        name: "John",
        data: [5, 7, 3]
      }
    ]
  }
];

export default class LineChart extends Component {

  render() {
    return (
      <Fragment>
        <div className="col-4 mt-4 mb-4">
          {" "}
          <HighchartsReact highcharts={Highcharts} options={TypeChart[this.props.numDashboard]} />
        </div>
      </Fragment>
    );
  }
}
