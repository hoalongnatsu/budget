import React, { Component } from 'react'

export class CreateExpenses extends Component {
  render() {
    return (
      <form>
        <div className="input-form-inline mb-tn">
          <div className="input-group">
            <label className="input-label">Description</label>
            <input type="text" className="input-control"/>
          </div>
          <div className="input-group">
            <label className="input-label">Type</label>
            <input type="text" className="input-control"/>
          </div>
          <div className="input-group">
            <label className="input-label">Value</label>
            <input type="text" className="input-control"/>
          </div>
        </div>
        <button className="btn btn--primary">ADD</button>
      </form>
    )
  }
}

export default CreateExpenses;
