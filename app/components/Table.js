"use strict";

import React from 'react';
import api from '../utils/api';
import Loading from './Loading';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      loading: true,
      data: []
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const endpoint = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    api.fetchAPI(endpoint)
      .then( (data) => {
        console.log(data);
        this.setState(function(){
          return {
            category: 'recent',
            loading: false,
            data: data
          }
        })
      })
  }
  render() {
    var loading = this.state.loading;
    return (
      <div>
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

        {loading && <Loading />}
        
      </div>
    )
  }
}

export default Table;
