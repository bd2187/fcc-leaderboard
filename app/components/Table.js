"use strict";

import React from 'react';
import api from '../utils/api';
import Loading from './Loading';

function UserImage(props) {
  var image= props.image;
  return (
    <img src={image} width="20px"/>
  )
}

function CampersData(props) {
  var {user, index} = props;
  return (
    <tr>
     <td>{index + 1}</td>
     <td>
      <a href={`https://www.freecodecamp.com/${user.username}`} target="_blank">
       <UserImage image={user.img} />
        {user.username}
      </a>
     </td>
     <td>{user.recent}</td>
     <td>{user.alltime}</td>
    </tr>
  );
}

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
          <thead>
             <tr>
               <th>Leaderboard</th>
             </tr>
           </thead>
           <tbody>
           <tr>
             <td>#</td>
             <td>Camper Name</td>
             <td onClick={this.updateTable.bind(null,
                'https://fcctop100.herokuapp.com/api/fccusers/top/recent')}>
                Points in last 30 days
              </td>
             <td onClick={this.updateTable.bind(null,
                'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')}>
                All time points
              </td>
           </tr>
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
