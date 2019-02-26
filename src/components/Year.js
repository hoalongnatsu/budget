import React, { Component } from 'react';
import { connect } from 'react-redux';

import Month from './Month';

import { getYears } from '../actions/year';

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
  }

  render() {
    let { years } = this.props;

    if (!years) return <div>Loading...</div>;

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
                <svg className="btn--svg">
                  <use xlinkHref="/icon/symbol.svg#icon-folder"></use>
                </svg>
                <span className="btn--text">{year}</span>
              </button>
            ))
          }
        </div>
        {
          this.state.showGroupMonth ?
            <div className="container-month">
              <svg
                className="btn--svg mt-sm"
                onClick={this.hiddenGroupMonth}
              >
                <use xlinkHref="/icon/symbol.svg#icon-squared-cross"></use>
              </svg>
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
    years: state.years
  }
}

export default connect(mapStateToProps, { getYears })(Year);
