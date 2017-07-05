"use strict";

import React from 'react';
import Table from './Table';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="banner alignCenter" id="top">FCC Leaderboard</h1>
        <Table />
        <footer>
          <a
            id="back-to-top"
            href="#top"
          >
            Top
          </a>
        </footer>
      </div>
    )
  }
}

export default App;
