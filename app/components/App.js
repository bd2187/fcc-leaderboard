"use strict";

import React from 'react';
import Table from './Table';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="banner">FCC Leaderboard</h1>
        <Table />
      </div>
    )
  }
}

export default App;
