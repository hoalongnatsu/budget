import React, { Component } from 'react';
import { connect } from 'react-redux';

import Total from './Total';
import Statistic from './Statistic';
import EarningsTable from './EarningsTable';
import ExpensesTable from './ExpensesTable'

import { getBudgetByMonthYear } from '../../actions/budget';

class index extends Component {

  async componentWillMount() {
    let { month, year } = this.props.match.params;
    this.props.getBudgetByMonthYear(month, year);
  }

  render() {
    let { budget } = this.props;
    let { month, year } = this.props.match.params;

    if (Object.keys(budget).length === 0) return <div>Loading...</div>;

    let totalEarnings = budget.earnings.reduce((total, e) => total + e.value, 0);
    let totalExpenses = budget.expense.reduce((total, e) => total + e.value, 0);

    return (
      <div className="container">
        <h1 className="heading-1 heading-1--primary my-sm">Budget - {month}, {year}</h1>

        <div className="budget">
          <div className="budget__header">
            <Total earnings={totalEarnings} expense={totalExpenses} />
            <Statistic />
          </div>
          
          <div className="earnings mt-md">
            <EarningsTable earnings={budget.earnings} total={totalEarnings} month={month} year={year} />
          </div>

          <div className="expenses mt-md">
            <ExpensesTable />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    budget: state.mbudget
  }
}

export default connect(mapStateToProps, { getBudgetByMonthYear })(index);
