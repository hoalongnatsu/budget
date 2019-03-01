import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from './Icon';

import { addYear } from '../actions/year';

export class CreateYear extends Component {
  state = {
    height: 0,
    year: ''
  }

  showForm = () => {
    this.setState({height: 40});
  }

  hiddenForm = () => {
    this.setState({height: 0});
  }

  toggleForm = () => {
    if (!this.state.height) {
      this.showForm();
      return;
    }

    this.hiddenForm();
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.createYear();
    }
  }

  createYear = () => {
    this.props.addYear(this.state.year);
    this.setState({year: ''})
    this.hiddenForm();
  }

  render() {
    let { height, year } = this.state;

    return (
      <div className="create-year">
        <button
          className="btn btn--primary btn--icon"
          onClick={this.toggleForm}
        >
          <Icon className="btn--svg" name="plus"/>
          <span className="btn--text">Year</span>
        </button>
        <div
          className="form"
          style={{
            height,
            marginTop: height ? '1rem' : 0
          }}
        >
          <div className="input-group">
            <input
              type="text"
              className="input-control"
              onKeyPress={this._handleKeyPress}
              value={year}
              onChange={(e) => this.setState({year: e.target.value})}
            />
          </div>
          <button
            className="btn btn--success"
            onClick={this.createYear}
          >Create</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addYear })(CreateYear);
