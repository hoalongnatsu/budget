import React, { Component } from 'react';
import { connect } from 'react-redux';

import Month from './Month';
import Icon from './Icon';
import { If } from '../directive';

import { getYears } from '../actions/year';
import { getBudgetByYear } from '../actions/budget';

export class Year extends Component {
  state = {
    year: null,
    showGroupMonth: false
  }

  componentWillMount() {
    this.props.getYears();
  }

  showGroupMonth = () => {
    this.setState({showGroupMonth: true});
  }

  hiddenGroupMonth = () => {
    this.setState({showGroupMonth: false});
  }

  changeYear = (year) => {
    this.setState({year});
  }

  changeYearAndShowGroupMonth = (year) => {
    if (!this.state.showGroupMonth) {
      this.showGroupMonth();
    }
    
    this.changeYear(year);
    this.props.getBudgetByYear(year);
  }

  render() {
    let { years, ybudget } = this.props;

    if (!years.length) return <div>Loading...</div>;

    return (
      <div>
        <div className="group-year my-tn">
          {
            years.map(year => (
              <button
                className="btn btn--outline-primary btn--icon"
                key={year}
                onClick={() => this.changeYearAndShowGroupMonth(year)}
              >
                <Icon className="btn--svg" name="folder" />
                <span className="btn--text">{year}</span>
              </button>
            ))
          }
        </div>
        {
          this.state.showGroupMonth ?
            <div className="container-month">
              <div className="group-icon mt-sm">
                <If cond={ybudget.length} then={<Icon className="btn--svg" name="stats-dots" />} />
                <Icon className="btn--svg" onClick={this.hiddenGroupMonth} name="squared-cross" />
              </div>

              <Month year={this.state.year} />
            </div>
          :
            ''
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    years: state.years,
    ybudget: state.ybudget
  }
}

export default connect(mapStateToProps, { getYears, getBudgetByYear })(Year);
