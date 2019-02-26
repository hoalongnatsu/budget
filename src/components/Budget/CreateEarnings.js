import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addEarnings } from '../../actions/budget';

export class CreateEarnings extends Component {

  state = {
    description: '',
    value: ''
  }

  addEarningsByMonthYear = () => {
    let { month, year } = this.props;
    let { description, value } = this.state;

    this.props.addEarnings({month, year, description, value});
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      description: '',
      value: ''
    })
  }

  render() {
    let { description, value } = this.state;

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
        </div>
        <button
          className="btn btn--primary"
          onClick={this.addEarningsByMonthYear}
        >ADD</button>
      </section>
    )
  }
}

export default connect(null, { addEarnings })(CreateEarnings);
