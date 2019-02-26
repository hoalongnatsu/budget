import React, { Component } from 'react';

import TableHeader from './TableHeader';
import CreateExpenses from './CreateExpenses';

export class ExpensesTable extends Component {
  render() {
    return (
      <div className="budget__table">
        <div className="budget__table-header">
          <TableHeader title="Expenses">
            <CreateExpenses />
          </TableHeader>
        </div>

        <table>
          <thead className="bg-primary-light">
            <tr>
              <th>Description</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fast Food</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Fast Food</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Fast Food</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>

        <div className="budget__table-footer">
          Total Earning: $2000.00
        </div>
      </div>
    )
  }
}

export default ExpensesTable;
