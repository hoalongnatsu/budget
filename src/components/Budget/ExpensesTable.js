import React, { Component } from 'react';

import TableHeader from './TableHeader';
import CreateExpense from './CreateExpense';

import { NumberFormat } from '../NumberFormat';

export class ExpensesTable extends Component {
  render() {
    let { month, year, expense, total } = this.props;

    return (
      <div className="budget__table">
        <div className="budget__table-header">
          <TableHeader title="Expenses" render={(hidden) => <CreateExpense hidden={hidden} month={month} year={year} />} />
        </div>

        <table>
          <thead className="bg-primary-light">
            <tr>
              <th>Description</th>
              <th>Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
              total ?
                expense.map(e => (
                  <tr key={e.name}>
                    <td>{e.description}</td>
                    <td>{e.type}</td>
                    <td>{e.value}</td>
                  </tr>
                ))
              :
                <tr><td className="no-value" colSpan="3">You not yet add expense</td></tr>
            }
          </tbody>
        </table>

        <div className="budget__table-footer">
          Total Expenses: <NumberFormat value={total} type="currency" local="en-US" currency="USD" />
        </div>
      </div>
    )
  }
}

export default ExpensesTable;
