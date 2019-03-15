import React, { Component } from 'react';

import Chart from 'chart.js';

export class BarBudget extends Component {
  ctx = null;

  componentDidMount() {
    let { saved, budget, labels, legend } = this.props;

    this.ctx = this.refs.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Saved',
          data: saved,
          fill: false,
          backgroundColor: "#87a33d",
          borderColor: "#93a666",
        }, {
          label: 'Total Budget',
          data: budget,
          fill: false,
          backgroundColor: "#bd4243",
          borderColor: "#b96667",
        }],
        labels
      },
      options: {
        title: {
          display: true,
          position: "top",
          text: "Statistic Budget Year",
          fontSize: 18,
        },
        responsive: true,
        legend: {
          display: legend,
          position: "bottom",
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              callback: function(value, index, values) {
                return '$' + value;
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'USD'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }]
        },
      }
    })
  }

  render() {
    return (
      <canvas ref="canvas"></canvas>
    )
  }
}

export default BarBudget;
