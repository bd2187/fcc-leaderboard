"use strict";

import React from 'react';
import api from '../utils/api';
import Loading from './Loading';
import TableHead from './TableHead';
import CampersData from './CampersData';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      loading: true,
      data: null
    }
    this.updateTable = this.updateTable.bind(this);
  }
  updateTable(endpoint) {
    this.setState(function(){
      return {endpoint: endpoint}
    });
    api.fetchAPI(endpoint)
      .then( (data) => {
        this.setState(function(){
          return {
            loading: false,
            data: data
          }
        })
      });
  }
  componentDidMount() {
    this.updateTable(this.state.endpoint);
  }
  render() {
    var loading = this.state.loading;
    var data = this.state.data;
    return (
      <div>
        <table>
          <TableHead onClick={this.updateTable}/>
          <tbody>


          {data && data.map((user, index) =>
            <CampersData key={user.username} user={user} index={index}/>)}

          </tbody>
        </table>

        {loading && <Loading />}
      </div>
    )
  }
}

export default Table;
