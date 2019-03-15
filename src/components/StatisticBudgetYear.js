import React, { Component } from 'react';

import { BarBudget } from './Chart';

export class StatisticBudgetYear extends Component {

  state = {
    earnings: [],
    saved: []
  }

  async componentWillMount() {
    let { ybudget } = this.props;
    let earnings = [];
    let saved = [];

    for (let index = 0; index < ybudget.length; index++) {
      const budget = ybudget[index];
      const mEarnings = (await budget.earnings_).reduce((total, e) => total + e.value, 0);
      const mExpense = (await budget.expense_).reduce((total, e) => total + e.value, 0);
      earnings[budget.month - 1] = mEarnings;
      saved[budget.month - 1] = mEarnings - mExpense;
    }

    this.setState({earnings: [...earnings], saved: [...saved]});
  }

  render() {
    let { earnings, saved } = this.state;
    
    if (earnings.length === 0) return <div>Loading...</div>;

    return (
      <div className="mx-auto" style={{maxWidth: 800}}>
        <BarBudget
          saved={saved}
          budget={earnings}
          labels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          legend={true}
        />
      </div>
    )
  }
}

export default StatisticBudgetYear;
