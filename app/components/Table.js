"use strict";

import React from 'react';
import api from '../utils/api';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'recent'
    }
  }
  componentDidMount() {
    var category = this.state.category;
    const endpoint = `https://fcctop100.herokuapp.com/api/fccusers/top/${category}`;
    api.fetchAPI(endpoint)
      .then(function(data){
        console.log(data);
      })
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
