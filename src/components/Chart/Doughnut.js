import React, { Component } from 'react';

import Chart from 'chart.js';

export class Doughnut extends Component {
  ctx = null;

  componentDidMount() {
    let { data, labels, color, legend } = this.props;

    this.ctx = this.refs.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor: color,
          data
        }],
        labels
      },
      options: {
        legend: {
          display: legend
        }
      }
    })
  }

  componentDidUpdate() {
    let { data, labels, color, legend } = this.props;
    new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor: color,
          data
        }],
        labels
      },
      options: {
        legend: {
          display: legend
        }
      }
    })
  }

  componentWillReceiveProps() {
    this.forceUpdate();
  }

  render() {
    return (
      <canvas ref="canvas"></canvas>
    )
  }
}
