import React, { Component } from 'react';

import { NumberFormat } from '../NumberFormat';

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
            <div className="bg-white text-primary-dark">
              <NumberFormat
                value={earnings}
                local="en-US"
                type="currency"
                currency="USD"
              />
            </div>
          </div>
          <div className="budget__total-item">
            <h1>Total Expenses</h1>
            <div className="bg-white text-primary-dark">
              <NumberFormat
                value={expense}
                local="en-US"
                type="currency"
                currency="USD"
              />
            </div>
          </div>
          <div className="budget__total-item">
            <h1>Save</h1>
            <div className="bg-white text-primary-dark">
              <NumberFormat
                value={earnings - expense}
                local="en-US"
                type="currency"
                currency="USD"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Total;
