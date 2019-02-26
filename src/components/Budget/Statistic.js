import React, { Component } from 'react'

export class Statistic extends Component {
  render() {
    return (
      <div className="budget__statistic">
        <div className="budget__title budget__title--primary text-center text-white">
          Statistic
        </div>
        <div className="budget__statistic-content">
          <ul className="budget__statistic-list">
            <li className="budget__statistic-item">
              <div>Food</div>
              <div className="bg-primary-dark text-white">30%</div>
              <div>500</div>
            </li>
            <li className="budget__statistic-item">
              <div>Entertainment</div>
              <div className="bg-success-dark text-white">30%</div>
              <div>1000</div>
            </li>
            <li className="budget__statistic-item">
              <div>Other</div>
              <div className="bg-secondary-dark text-white">10%</div>
              <div>300</div>
            </li>
          </ul>
          <div className="budget__statistic-chart">
            <div className="chart"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Statistic;
