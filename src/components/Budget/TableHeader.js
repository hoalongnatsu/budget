import React, { Component } from 'react'

export class TableHeader extends Component {

  state = {
    height: 0
  }

  showForm = () => {
    this.setState({height: 132});
  }

  hiddenForm = () => {
    this.setState({height: 0});
  }

  render() {
    let { title, children } = this.props;

    return (
      <div className="budget__table-header">
        <div className="budget__table-title">
          <span>{title}</span>
          <span>
            {
              this.state.height ?
                <svg
                  className="btn--svg"
                  onClick={this.hiddenForm}
                >
                  <use xlinkHref="/icon/symbol.svg#icon-minus"></use>
                </svg>
              :
                <svg
                  className="btn--svg"
                  onClick={this.showForm}
                >
                  <use xlinkHref="/icon/symbol.svg#icon-plus"></use>
                </svg>
            }
          </span>
        </div>
        <div
          className="budget__table-form"
          style={{
            height: this.state.height,
            padding: this.state.height ? '1rem' : 0
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default TableHeader
