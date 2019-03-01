import React, { Component } from 'react';

import TableHeader from './TableHeader';
import CreateEarnings from './CreateEarnings';

import { NumberFormat } from '../NumberFormat';

export class EarningsTable extends Component {
  render() {
    let { month, year, earnings, total } = this.props;

    return (
      <div className="budget__table">
        <div className="budget__table-header">
          <TableHeader title="Earnings" render={(hidden) => <CreateEarnings hidden={hidden} month={month} year={year} />} />
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
              total ?
                earnings.map(e => (
                  <tr key={e.name}>
                    <td>{e.description}</td>
                    <td><NumberFormat value={e.value} local="en-US" currency="USD" /></td>
                  </tr>
                ))
              :
                <tr><td className="no-value" colSpan="3">You not yet add earnings</td></tr>
            }
          </tbody>
        </table>

        <div className="budget__table-footer">
          Total Earning: <NumberFormat value={total} type="currency" local="en-US" currency="USD" />
        </div>
      </div>
    )
  }
}

export default EarningsTable;
