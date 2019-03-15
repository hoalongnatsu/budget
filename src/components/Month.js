import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';

export class Month extends Component {
  months = [{
    name: 'January',
    value: 1
  }, {
    name: 'February',
    value: 2
  }, {
    name: 'March',
    value: 3
  }, {
    name: 'April',
    value: 4
  }, {
    name: 'May',
    value: 5
  }, {
    name: 'June',
    value: 6
  }, {
    name: 'July',
    value: 7
  }, {
    name: 'August',
    value: 8
  }, {
    name: 'September',
    value: 9
  }, {
    name: 'October',
    value: 10
  }, {
    name: 'November',
    value: 11
  }, {
    name: 'December',
    value: 12
  }];

  render() {
    let { year } = this.props;

    return (
      <div className="group-month mb-sm">
        {
          this.months.map(month => (
            <Link 
              className="btn btn--outline-primary btn--icon"
              to={`budget/${year}/${month.value}`}
              key={month.value}
            >
              <Icon className="btn--svg" name="open-book" />
              <span className="btn--text">{month.name} - {year}</span>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Month;
