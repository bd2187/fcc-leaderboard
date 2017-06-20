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
     <UserImage image={user.img} />
      {user.username}
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
      category: '',
      loading: true,
      data: null
    }
  }
  componentDidMount() {
    const endpoint = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    api.fetchAPI(endpoint)
      .then( (data) => {
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
    var data = this.state.data;
    var arr = [1, 2, 3, 4, 5];
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
