import './scss/main.scss';
import React, { Component } from 'react';

import CreateYear from './components/CreateYear';
import Year from './components/Year';


export class App extends Component {

  render() {
    return (
      <div>
        <header className="container header">
          <h1 className="heading-1 heading-1--primary my-sm">Manage Your Budget</h1>
          <CreateYear />
          <Year />
        </header>
      </div>
    )
  }
}

export default App;
