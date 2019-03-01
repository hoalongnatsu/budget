import React, { Component } from 'react';

import { Doughnut } from '../Chart';
import { NumberFormat } from '../NumberFormat';
import { CalculatePercent } from '../CalculatePercent';

export class Statistic extends Component {
  render() {
    let { expense, total } = this.props;
    let expenseFood = 0, expenseEntertainment = 0, expenseOther = 0; 

    if (expense.length) {
      expenseFood = expense.filter(e => e.type.toLocaleLowerCase() === 'food').reduce((total, e) => total + e.value, 0);
      expenseEntertainment = expense.filter(e => e.type.toLocaleLowerCase() === 'entertainment').reduce((total, e) => total + e.value, 0);
      expenseOther = expense.filter(e => e.type.toLocaleLowerCase() === 'other').reduce((total, e) => total + e.value, 0);
    }

    return (
      <div className="budget__statistic">
        <div className="budget__title budget__title--primary text-center text-white">
          Statistic Expenses
        </div>
        <div className="budget__statistic-content">
          <ul className="budget__statistic-list">
            <li className="budget__statistic-item">
              <div>Food</div>
              <div className="bg-primary-dark text-white"><CalculatePercent value={expenseFood} total={total} />%</div>
              <div><NumberFormat value={expenseFood} local="en-US" currency="USD" /></div>
            </li>
            <li className="budget__statistic-item">
              <div>Entertainment</div>
              <div className="bg-success-dark text-white"><CalculatePercent value={expenseEntertainment} total={total} />%</div>
              <div><NumberFormat value={expenseEntertainment} local="en-US" currency="USD" /></div>
            </li>
            <li className="budget__statistic-item">
              <div>Other</div>
              <div className="bg-secondary-dark text-white"><CalculatePercent value={expenseOther} total={total} />%</div>
              <div><NumberFormat value={expenseOther} local="en-US" currency="USD" /></div>
            </li>
          </ul>
          <div className="budget__statistic-chart">
            {
              expense.length ?
                <Doughnut
                  data={[
                    CalculatePercent({value: expenseFood, total}),
                    CalculatePercent({value: expenseEntertainment, total}),
                    CalculatePercent({value: expenseOther, total})
                  ]}
                  color={['#418ab3', '#87a33d', '#88847e']}
                  labels={['Food', 'Entertainment', 'Other']}
                  legend={false}
                />
              :
               ''
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Statistic;
