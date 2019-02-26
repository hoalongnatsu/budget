import React, { Component } from 'react'

export class Total extends Component {
  render() {
    let { earnings, expense } = this.props;

    return (
      <div className="budget__total">
        <div className="budget__title budget__title--primary-dark text-center text-white">
          Budget &amp; Expenses
        </div>
        <div className="budget__total-content bg-primary">
          <div className="budget__total-item">
            <h1>Total Budget</h1>
            <div className="bg-white text-primary-dark">${earnings}.00</div>
          </div>
          <div className="budget__total-item">
            <h1>Total Expenses</h1>
            <div className="bg-white text-primary-dark">${expense}.00</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Total;
