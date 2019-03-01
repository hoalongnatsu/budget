import React, { Component } from 'react';

import Icon from '../Icon'

export class TableHeader extends Component {

  state = {
    height: 0
  }

  showForm = () => {
    if (window.innerWidth > 500) {
      this.setState({height: 132});
      return;
    }

    const length = this.refs.form.querySelectorAll('.input-control').length;
    const height = (length * 72) - 10 + 70;
    this.setState({height});
  }

  hiddenForm = () => {
    this.setState({height: 0});
  }

  render() {
    let { title, render } = this.props;

    return (
      <div className="budget__table-header">
        <div className="budget__table-title">
          <span>{title}</span>
          <span>
            {
              this.state.height ?
                <Icon className="btn--svg" onClick={this.hiddenForm} name="minus"/>
              :
                <Icon className="btn--svg" onClick={this.showForm} name="plus"/>
            }
          </span>
        </div>
        <div
          className="budget__table-form"
          ref="form"
          style={{
            height: this.state.height,
            padding: this.state.height ? '1rem' : 0
          }}
        >
          {render(this.hiddenForm)}
        </div>
      </div>
    )
  }
}

export default TableHeader
