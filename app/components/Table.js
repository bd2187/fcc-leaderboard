"use strict";

import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('fetch data');
  }
  render() {
    return (
      <table>
        <thead>
           <tr>
             <th>Leaderboard</th>
           </tr>
         </thead>
         <tbody>
         <tr>
           <td>#</td>
           <td>Camper Name</td>
           <td>Points in past 30 days</td>
           <td>All time points</td>
         </tr>
         </tbody>
      </table>
    )
  }
}

export default Table;
