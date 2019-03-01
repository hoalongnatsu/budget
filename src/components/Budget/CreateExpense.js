import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../../actions/budget';

export class CreateExpense extends Component {

  types = ['food', 'entertainment', 'other'];

  state = {
    description: '',
    type: this.types[0],
    value: ''
  }

  addExpenseByMonthYear = () => {
    let { month, year, hidden } = this.props;
    let { description, type, value } = this.state;

    this.props.addExpense({month, year, description, type, value});
    this.clearForm();
    hidden();
  }

  clearForm = () => {
    this.setState({
      description: '',
      type: this.types[0],
      value: ''
    })
  }

  render() {
    let { description, type, value } = this.state;
    let { hidden } = this.props;

    return (
      <section>
        <div className="input-form-inline mb-tn">
          <div className="input-group">
            <label className="input-label">Description</label>
            <input
              type="text"
              className="input-control"
              value={description}
              onChange={(e) => this.setState({description: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Value</label>
            <input
              type="text"
              className="input-control"
              value={value}
              onChange={(e) => this.setState({value: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Type</label>
            <select className="input-control" value={type} onChange={(e) => this.setState({type: e.target.value})}>
              {
                this.types.map(type => <option key={type} value={type}>{type}</option>)
              }
            </select>
          </div>

        </div>
        <button onClick={this.addExpenseByMonthYear} className="btn btn--primary">ADD</button>
      </section>
    )
  }
}

export default connect(null, { addExpense })(CreateExpense);
