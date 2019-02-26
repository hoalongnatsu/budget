import React, { Component } from 'react';

import TableHeader from './TableHeader';
import CreateEarnings from './CreateEarnings';

export class EarningsTable extends Component {
  render() {
    let { month, year, earnings, total } = this.props;

    return (
      <div className="budget__table">
        <div className="budget__table-header">
          <TableHeader title="Earnings">
            <CreateEarnings month={month} year={year} />
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
            {
              earnings.map(e => (
                <tr key={e.name}>
                  <td>{e.description}</td>
                  <td>{e.value}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className="budget__table-footer">
          Total Earning: ${total}.00
        </div>
      </div>
    )
  }
}

export default EarningsTable;
