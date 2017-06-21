"use strict";

import React from 'react';
import api from '../utils/api';
import Loading from './Loading';

function TableHead(props) {
  return (
    <thead>
     <tr>
       <td className="numberCol">#</td>
       <td className="camperCol">Camper Name</td>
       <td className="recentCol" onClick={props.onClick.bind(null,
          'https://fcctop100.herokuapp.com/api/fccusers/top/recent')}>
          Points in last 30 days
        </td>
       <td className="alltimeCol" onClick={props.onClick.bind(null,
          'https://fcctop100.herokuapp.com/api/fccusers/top/alltime')}>
          All time points
        </td>
     </tr>
     </thead>
  )
}

function CampersData(props) {
  var {user, index} = props;
  return (
    <tr>
     <td className="numberCol">{index + 1}</td>
     <td className="camperCol">
      <a href={`https://www.freecodecamp.com/${user.username}`} target="_blank">
       <UserImage image={user.img} user={user.username}/>
        {user.username}
      </a>
     </td>
     <td className="recentCol">{user.recent}</td>
     <td className="alltimeCol">{user.alltime}</td>
    </tr>
  );
}

function UserImage(props) {
  var image= props.image;
  var user = props.user;
  return (
    <img className="userAvatar" src={image} alt={`Avatar for ${user}`}/>
  )
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
